import { DataService } from './dataService';
import * as _ from "lodash";
import { ArticleFormDialog } from "../../modules/articles/articleFormDialog.component";
import { ArticleAgreeDialog } from "../../modules/articles/articleAgreeDialog.component";

export class ArticleService {
  public static getStyle(d:any, stateView: boolean, preserveSize: boolean = false) {
    let state = d.nodeData.type == 'group' && d.group.state ? d.group.state : 'S3';
    let style = _.extend({
      color: '#000000',
      font: 0,
      width: 0,
      height: 0,
      radius: 0
    }, d.style);

    style.color = DataService.getColor(stateView && d.nodeData.g != 'g0' ? state : d.nodeData.g);

    if(!preserveSize) {
      if(d.shape == 'article') {
        style.font = DataService.SIZES[d.nodeData.g].font;
        style.width = DataService.SIZES[d.nodeData.g].width;
        style.height = DataService.SIZES[d.nodeData.g].height;
      }
      else if(d.shape == 'SHAPE_RECT') {
        style.width = DataService.SIZES[d.nodeData.g].width;
        style.height = DataService.SIZES[d.nodeData.g].height;
      }
      else if(d.shape == 'ellipse' || d.shape == 'rect') {
        let rand = DataService.random();
        if(d.votes) {
          rand = (d.votes.agrees + d.votes.disagrees) > 20 ? 1 : (d.votes.agrees + d.votes.disagrees) / 20;
        }
        style.font = d.nodeData.focused ? DataService.SIZES[d.nodeData.g].font.max * 2 : Math.round(rand * (DataService.SIZES[d.nodeData.g].font.max - DataService.SIZES[d.nodeData.g].font.min)) + DataService.SIZES[d.nodeData.g].font.min;
      }
    }
    return style;
  }

  public static getNodeText(d, type) {
    switch(true) {
      case type == 'article': return d.title;
      case type == 'user': return d.name;
      case type == 'location': return d.country + ',' + d.state;
      case type == 'group': return d.group.name;
      case type == 'comment': return d.text;
    }
  }


  public static initNodes(data, currentView, stateView: boolean, query: any) {
    let nodes = [], nodeIndex = 0;
    let article_count = data.length
    let focusedGroup = null;
    if(currentView == 'FOCUS' && data.length > 0) {
      if(query.user) {
        let user = _.find(data[0].users, {_id: query.user});
        if(user) {
          focusedGroup = user;
          focusedGroup.nodeData = {
            g: 'g21',
            type: 'user',
            text: ArticleService.getNodeText(user, 'user'),
          };
        }
      }
      else if(query.location) {
        let location = _.find(data[0].locations, {_id: query.location});
        if(location) {
          focusedGroup = location;
          focusedGroup.nodeData = {
            g: 'g22',
            type: 'location',
            text: ArticleService.getNodeText(location, 'location'),
          };
        }
      }
      else if(query.group) {
        let group = _.find(data[0].groups, (g:any) => g.group._id == query.group );
        if(group) {
          focusedGroup = group;
          focusedGroup.nodeData = {
            g: group.group.groupType,
            type: 'group',
            text: ArticleService.getNodeText(group, 'group'),
          };
        }
      }

      if(focusedGroup) {
        focusedGroup.nodeData.nodeIndex = 0;
        focusedGroup.nodeData.parentIndex = -1;
        focusedGroup.nodeData.movable = false;
        focusedGroup.nodeData.focused = true;
        focusedGroup.fx = focusedGroup.fy = 0;

        focusedGroup.shape = DataService.SHAPES[focusedGroup.nodeData.g];
        focusedGroup.style = ArticleService.getStyle(focusedGroup, stateView);
        nodes.push(focusedGroup);
        nodeIndex ++;
      }
      else {
        return [];
      }
    }

    _.map(data, (article: any, i) => {
      // Add article node
      article.nodeData = {
        nodeIndex: nodeIndex,
        g: 'g0',
        parentIndex: currentView == 'FOCUS' ? 0 : nodeIndex,
        type: 'article',
        text: ArticleService.getNodeText(article, 'article'),
        link: currentView == 'FOCUS' ? { width: 3, color: '#ccc'} : null,
        movable: false
      }
      if(currentView == 'DEFAULT') { // fx means offset
        // article.fx = article.x = i % 2 ? 620 : 0;
        // article.fy = article.y = i * 620;
        if (i < (article_count-2))
          article.fx = article.x = i * DataService.GAP;
        else
          article.fx = article.x = (i - article_count) * DataService.GAP;
        article.fy = article.y = 0;
      }
      else if(currentView == 'FOCUS') {
        let countAround = 4
        let circleIndex = Math.floor(i / countAround)
        let itemIndex = i % countAround
        let distance = (circleIndex + 1) * 600
        let angle = - Math.PI / countAround * circleIndex + Math.PI * 2 / countAround * itemIndex
        article.fx = article.x = focusedGroup.fx + Math.round(Math.cos(angle) * distance) - DataService.SIZES.g0.width / 2
        article.fy = article.y = focusedGroup.fy + Math.round(Math.sin(angle) * distance) - DataService.SIZES.g0.height / 2
      }
      else if(currentView == 'ARTICLE') {
        article.nodeData.g = 'g100';
        article.nodeData.type = 'article_detail';
        article.x = article.fx = 0;
        article.y = article.fy = 0;
      }
      article.shape = DataService.SHAPES[article.nodeData.g];
      article.style = ArticleService.getStyle(article, stateView);
      nodes.push(article);
      nodeIndex ++;

      // Add the article's child nodes
      let clustersPopulation = {};

      let newNodes = []
      // Add Group nodes.
      newNodes = newNodes.concat(_.map(_.sortBy(ArticleService.sliceGroup(article.groups, 'group', currentView, focusedGroup), (d:any) => stateView ? d.group.state : d.group.groupType), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        let clusterName = stateView ? d.group.state : d.group.groupType;
        clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: d.group.groupType,
          clusterName,
          indexInCluster : clustersPopulation[clusterName]-1,
          parentIndex:  parentIndex,
          article_id: article._id,
          type: 'group',
          text: ArticleService.getNodeText(d, 'group'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));

      if (currentView == 'ARTICLE') { // only display users and locations on ARTICLE view
        // Add User nodes.
        newNodes = newNodes.concat(_.map(ArticleService.sliceGroup(article.users, 'user', currentView, focusedGroup), (d: any, index) => {
          let parentIndex = article.nodeData.nodeIndex;
          let clusterName = stateView ? 'S3' : 'g21';
          clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
          d.nodeData = {
            nodeIndex: nodeIndex,
            g: 'g21',
            clusterName,
            indexInCluster : clustersPopulation[clusterName]-1,
            parentIndex: parentIndex,
            article_id: article._id,
            type: 'user',
            text: ArticleService.getNodeText(d, 'user'),
            link: null,
            movable: true
          }
          d.fx = d.fy = null;
          nodeIndex ++;
          return d;
        }));
        // Add Location nodes.
        newNodes = newNodes.concat(_.map(ArticleService.sliceGroup(article.locations, 'location', currentView, focusedGroup), (d: any, index) => {
          let parentIndex = article.nodeData.nodeIndex;
          let clusterName = stateView ? 'S3' : 'g22';
          clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
          d.nodeData = {
            nodeIndex: nodeIndex,
            g: 'g22',
            clusterName,
            indexInCluster : clustersPopulation[clusterName]-1,
            parentIndex: parentIndex,
            article_id: article._id,
            type: 'location',
            text: ArticleService.getNodeText(d, 'location'),
            link: null,
            movable: true
          }
          d.fx = d.fy = null;
          nodeIndex ++;
          return d;
        }));
      }

      // Add Comment nodes.
      newNodes = newNodes.concat(_.map(ArticleService.sliceGroup(article.comments, 'comment', currentView, focusedGroup), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        let clusterName = stateView ? 'S3' : 'g5';
        clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: 'g5',
          clusterName,
          indexInCluster : clustersPopulation[clusterName]-1,
          parentIndex: parentIndex,
          article_id: article._id,
          type: 'comment',
          text: ArticleService.getNodeText(d, 'comment'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));

      newNodes.forEach((newNode, index) => {
        newNode.shape = DataService.SHAPES[newNode.nodeData.g]
        newNode.style = ArticleService.getStyle(newNode, stateView)
        let position = DataService.enterPosition(article, newNode.nodeData.clusterName, index)
        newNode.x = position.point.x + newNode.style.width * position.widthMultiplier
        newNode.y = position.point.y + newNode.style.height * position.heightMultiplier
      })

      article.nodeData.clustersPopulation = clustersPopulation;
      nodes = nodes.concat(newNodes)
    });
    return nodes;
  }


  public static sliceGroup(nodes, nodeType, currentView, focusedGroup) {
    let sliceNodes = nodes;
    if(currentView == 'FOCUS'){
      let focusedType = focusedGroup.nodeData.type;
      if(focusedType == nodeType) {
        var focusedId =  focusedType  == 'group' ? focusedGroup.group._id : focusedGroup._id;
        sliceNodes = _.filter(nodes, (d: any) => {
          let id = focusedType == 'group' ? d.group._id : d._id;
          return focusedId != id;
        });
      }
    }

    if(nodeType == 'comment') {
      sliceNodes = _.chain(sliceNodes)
                    .sortBy(d => d.votes.agrees.length + d.votes.disagrees.length)
                    .reverse()
                    .value()
                    .slice(0, DataService.NODE_COUNTS[currentView].g5);
    }
    else if(nodeType == 'group') {
      sliceNodes = _.chain(sliceNodes)
                    .groupBy(d => d.group.groupType)
                    .map((groups, g) => _.chain(groups)
                                          .sortBy(d => g == '11' ? d.createdAt : d.votes.agrees + d.votes.disagrees)
                                          .reverse()
                                          .value()
                                          .slice(0, DataService.NODE_COUNTS[currentView][g]))
                    .flatten()
                    .value();
    }

    if(nodeType == 'user') {
      sliceNodes = _.chain(sliceNodes)
                    .value()
                    .slice(0, DataService.NODE_COUNTS[currentView].g21);
    } else if(nodeType == 'location') {
      sliceNodes = _.chain(sliceNodes)
                    .value()
                    .slice(0, DataService.NODE_COUNTS[currentView].g22);
    }

    return sliceNodes;
  }

  public static popupArticleForm(dialog, node, callback) {
    let dialogRef = dialog.open(ArticleFormDialog, {
      width: '550px',
      height: node == null ? '740px' : '680px',
      data: { node: node },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => callback(result));
  }

  public static openArticleSource(node) {
    window.open(node.articleLink, '_blank');
  }

  public static copyArticleLink(node, mdSnackBar) {
    let link = window.location.origin + '/?article=' + node.slug;
    if(DataService.copyToClipboard(link)) {
      mdSnackBar.open('<' + link + '> copied to clipboard', null, {duration: 1500});
    }
    else {
      mdSnackBar.open('Copying to clipboard failed', null, {duration: 1500});
    }
  }

  public static copyArticleId(node, mdSnackBar) {
    if(DataService.copyToClipboard(node.slug)) {
      mdSnackBar.open('Article Id: ' + node.slug + ' copied to clipboard', null, {duration: 1500});
    }
    else {
      mdSnackBar.open('Copying to clipboard failed', null, {duration: 1500});
    }
  }

  public static popupAgreeDialog(node, dialog, callback) {
    if(node.nodeData.g == 'g1' || node.nodeData.g == 'g2' || node.nodeData.g == 'g3' || node.nodeData.g == 'g4' || node.nodeData.g == 'g5' || node.nodeData.g == 'g6' || node.nodeData.g == 'g7' || node.nodeData.g == 'g12' || node.nodeData.g == 'g13') {
      // show agree disagree dialog
      let dialogRef = dialog.open(ArticleAgreeDialog, {
        width: '350px',
        data: { node: node }
      });

      dialogRef.afterClosed().subscribe(result => callback(result));
    }
  }
}
