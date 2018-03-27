import * as d3 from "d3/index";
import { bboxCollide } from "d3-bboxCollide";
import * as _ from "lodash";
import * as moment from "moment";
import { DataService } from '../../shared/services/dataService';
import { D3ContextMenu } from '../components/D3/contextMenu.component';
import { Point2D, Intersection, Shapes } from 'kld-intersections';

export class D3Service {
  width: number = 1503;
  height:number = 917;
  paddings: any = { focus_article: 500, article: 400, cluster: 6, node: 3, text: 5};

  svgSelector: string;

  nodes: any = [];
  simulation: any;
  svgElements: any = {
  	ellipses: null,
      textsEllipse: null,
  	articles: null,
      textsArticleTitle: null, tspansArticleTitle1: null, tspansArticleTitle2: null,
      textsArticleBody: null, tspansArticleBody1: null, tspansArticleBody2: null, tspansArticleBody3: null, tspansArticleBody4: null,
      imgsArticle: null, imgsArticleSite: null, textsArticleSite: null,
      linesArticle: null,
      textsArticleTime: null, editLinksArticle: null, textsArticleMenu: null,
  	rects: null,
      textsRect: null,
  	texts: null,
  	links: null,
    shapeRects: null
  };
  svg: any;
  svgContainer: any;
  zoom: any;
  transform: any = { k: 1, x: 0, y: 0};
  centralOffset: any = { width: 0, height: 0};

  listeners: any = {
  	click: null,
  	dblclick: null
  };
  // used to cancel click event if double click
  handleClickListener: any = null;

  contextMenu: any;

  articleMenu: any;

  lastMoment:number

  collisionNodes: any

  currentArticleIndex: any

  isInTransition: boolean = false

  zoomEnabled: boolean = true

	constructor() {
  }

  init(svgSelector: string, zoomEnabled: boolean = true, centralOffset: any = null) {
    this.centralOffset = centralOffset ? centralOffset : { width: DataService.SIZES.g0.width/2, height: DataService.SIZES.g0.height/2};
  	this.svgSelector = svgSelector;
    this.svgContainer = d3.select(this.svgSelector)
      .append('svg')
      .attr('class', 'd3SvgContainer');
    this.zoomEnabled= zoomEnabled;

    if(zoomEnabled) {
      this.zoom = d3.zoom()
        .on("zoom", () => {
          this.transform = {
            k: d3.event.transform.k,
            x: d3.event.transform.x,
            y: d3.event.transform.y
          }
          this.translateView();
        })
        .filter( ()=> {
          if( d3.event instanceof WheelEvent) return d3.event.ctrlKey;
          return true;
        })
        .scaleExtent([0.5, 1.75]);

      this.svgContainer.call(this.zoom)
        .on("dblclick.zoom", null)
        .on("wheel", () => {
          d3.event.preventDefault();
          this.viewNextArticle(d3.event.deltaY > 0)
        });

      d3.select("body").on("keydown", () => {
        if(d3.event.keyCode == 37) {
          this.viewNextArticle(false)
        }
        else if(d3.event.keyCode == 39) {
          this.viewNextArticle(true)
        }
      });
    }

    // define filters
    var defs = this.svgContainer.append("defs");
    var filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");
    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 2)
      .attr("dy", 2)
      .attr("result", "offsetBlur");
    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    this.svg = this.svgContainer.append('g');

    this.simulation = d3.forceSimulation()
      .force("cluster", (alpha) => this.clustering(alpha));


    this.contextMenu = new D3ContextMenu(this.svg, [{id: 'AGREE_DISAGREE', label: 'Agree/Disagree'}, {id: 'DRILL_DOWN', label: 'Drill down'}]);
    this.contextMenu.on('AGREE_DISAGREE', { context: this, func: (d) => {
      this.listeners.agreedisagree.func.call(this.listeners.agreedisagree.context, d);
    }});
    this.contextMenu.on('DRILL_DOWN', { context: this, func: (d) => {
      this.listeners.drilldown.func.call(this.listeners.drilldown.context, d);
    }});

    this.articleMenu = new D3ContextMenu(this.svg,
      [ {id: 'BOOKMARK_POST', label: 'Bookmark Post'},
        {id: 'OPEN_ARTICLE_SOURCE', label: 'Open Article Source'},
        {id: 'COPY_ARTICLE_LINK', label: 'Copy Article Link'},
        {id: 'COPY_ARTICLE_ID', label: 'Copy Article Id'},
        {id: 'SHARE_POST', label: 'Share Post'},
        {id: 'REPORT_POST', label: 'Report Post'},
        {id: 'DELETE_ARTICLE', label: 'Delete Article'}]);
    this.articleMenu.on('BOOKMARK_POST', { context: this, func: (d) => {
      this.listeners.bookmark_post.func.call(this.listeners.bookmark_post.context, d);
    }});
    this.articleMenu.on('OPEN_ARTICLE_SOURCE', { context: this, func: (d:any) => {
      this.listeners.open_article_source.func.call(this.listeners.open_article_source.context, d);
    }});
    this.articleMenu.on('COPY_ARTICLE_LINK', { context: this, func: (d) => {
      this.listeners.copy_article_link.func.call(this.listeners.copy_article_link.context, d);
    }});
    this.articleMenu.on('COPY_ARTICLE_ID', { context: this, func: (d) => {
      this.listeners.copy_article_id.func.call(this.listeners.copy_article_id.context, d);
    }});
    this.articleMenu.on('SHARE_POST', { context: this, func: (d) => {
      this.listeners.share_post.func.call(this.listeners.share_post.context, d);
    }});
    this.articleMenu.on('REPORT_POST', { context: this, func: (d) => {
      this.listeners.report_post.func.call(this.listeners.report_post.context, d);
    }});

    this.articleMenu.on('DELETE_ARTICLE', { context: this, func: (d) => {
      this.listeners.delete_article.func.call(this.listeners.delete_article.context, d);
    }});
  }

  translateView() {
    let x = this.transform.x + (0 - this.centralOffset.width * this.transform.k)
    let y = this.transform.y + (0 - this.centralOffset.height * this.transform.k)
    this.svg.attr("transform", 'translate(' + x + ',' + y + ') scale(' + this.transform.k + ')');
  }

  translateViewTo(x, y, withAnimation: boolean = true) {
    if(this.zoom) {
      if(this.isInTransition) return
      let x0 = x
      let y0 = y
      if(withAnimation) {
        this.svgContainer.transition().duration(450).call(this.zoom.translateTo, x0, y0)
          .on('start', () => {
            this.isInTransition = true
          })
          .on('end', () => {
            this.isInTransition = false
          })
          .on('interrupt', () => {
            this.isInTransition = false
          });
      }
      else {
        this.svgContainer.call(this.zoom.translateTo, x0, y0)
      }
    }
  }


  resize(size: any) {
    this.width = size.width;
    this.height = size.height;

    this.svgContainer
      .style('width', size.width + 'px')
      .style('height', size.height + 'px');
    this.translateView();
  }

  start(nodes, articleIndex) {
  	this.nodes = nodes;

  	this.svg.selectAll('*').remove();

  	this.initNodes(); // define collide nodes
  	this.visualize(); //

    this.currentArticleIndex = isNaN(articleIndex) ? 0 : parseInt(articleIndex);

    if(this.nodes.length > 0) {
      let articleIndices = Object.keys(this.collisionNodes)
      this.translateViewTo(this.nodes[articleIndices[this.currentArticleIndex]].x, this.nodes[articleIndices[this.currentArticleIndex]].y, false)
    }
  }

  initNodes() {
    this.collisionNodes = {};

    let currentArticleIndex = 0;
    _.each(this.nodes, (d:any, index) => {
      if(d.nodeData.focused) return;
      if(d.nodeData.g === 'g0' || d.nodeData.g === 'g100') {
        currentArticleIndex = index
        this.collisionNodes[currentArticleIndex] = [];
        for(let articleIndex in this.collisionNodes) {
          this.collisionNodes[currentArticleIndex].push(parseInt(articleIndex))
          this.collisionNodes[articleIndex].push(currentArticleIndex)
        }
        if(this.nodes[0].nodeData.focused) {
          this.collisionNodes[currentArticleIndex].push(0)
        }
      }
      else {
        this.collisionNodes[currentArticleIndex].push(index)
      }
    });
  }

  reskinNodes(nodes) {
    let that = this;

    _.each(nodes, (d:any) => {
      let node = _.find(this.nodes, (n:any) => n.nodeData.nodeIndex == d.nodeData.nodeIndex);
      node.style = d.style;
    });

    this.svgElements.links
        .style("stroke-width", (d:any) => d.nodeData.link.width + 'px')
        .style("stroke", (d:any) => 'd.nodeData.link.color');

    this.svgElements.articles
        .attr('width', (d:any) => d.style.width)
        .attr('height', (d:any) => d.style.height)
        .style("fill", (d:any) => d.style.color);

    this.svgElements.imgsArticle
        .attr('width', (d:any) => d.style.height)
        .attr('height', (d:any) => d.style.height - 250);

    this.svgElements.ellipses
      .style("fill", (d:any) => d.style.color);

    this.svgElements.textsEllipse
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d:any) { let bb = this.getBBox(); d.style.width = bb.width + that.paddings.text * 2; d.style.height = bb.height * 2 + that.paddings.text * 2; });

    this.svgElements.rects
      .attr('width', (d:any) => d.style.width)
      .attr('height', (d:any) => d.style.height)
      .style("fill", (d:any) => d.style.color);

    this.svgElements.textsRect
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d:any) { let bb = this.getBBox(); d.style.width = bb.width + that.paddings.text; d.style.height = bb.height + that.paddings.text });

    this.svgElements.shapeRects
      .attr('width', (d:any) => d.style.width)
      .attr('height', (d:any) => d.style.height)
      .style("fill", (d:any) => d.style.color);
  }


  visualize() {
    let that = this;

    this.svgElements.links = this.svg
    	.datum(this.nodes.filter((d:any) => d.nodeData.link != null))
    	.selectAll('.link')
    	.data((d:any) => d)
    	.enter()
      .append('line')

    this.svgElements.articles = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.rect')
        .data((d:any) => d)
        .enter().append('rect')
        .attr('class', 'articleRect')
        .attr('stroke-width', 2)
        .attr('stroke', '#c2c5c7')
        .attr('id', (d:any) => 'article' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    this.svgElements.imgsArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.image')
        .data((d:any) => d)
        .enter().append('image')
        .attr('class', 'articleImage')
        .attr('xlink:href', (d:any) => d.imageLink)
        .attr('id', (d:any) => 'articleImg' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('preserveAspectRatio', 'xMinYMin slice')
        .attr('data-id', (d:any) => d._id);
    this.svgElements.textsArticleTitle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => d)
        .enter().append('text')
        .attr('class', 'pointer articleTitle')
        .attr("dominant-baseline", "central")
        .attr('id', (d:any) => 'articleText' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    this.svgElements.tspansArticleTitle1 = this.svgElements.textsArticleTitle
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 30)
          .text((d:any) => d.title.substring(0,37))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);
    this.svgElements.tspansArticleTitle2 = this.svgElements.textsArticleTitle
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 60)
          .text((d:any) => _.truncate(d.title.substring(37), {'length': 37}))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);
    this.svgElements.textsArticleBody = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => d)
        .enter().append('text')
        .attr('class', 'articleBody')
        .attr("dominant-baseline", "central")
        .attr('id', (d:any) => 'articleText' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    this.svgElements.tspansArticleBody1 = this.svgElements.textsArticleBody
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 15)
          .text((d:any) => d.body.substring(0,55))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);
    this.svgElements.tspansArticleBody2 = this.svgElements.textsArticleBody
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 36)
          .text((d:any) => d.body.substring(55, 110))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);

    this.svgElements.tspansArticleBody3 = this.svgElements.textsArticleBody
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 57)
          .text((d:any) => d.body.substring(110, 165))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);

    this.svgElements.tspansArticleBody4 = this.svgElements.textsArticleBody
          .append('tspan')
          .attr('x', 0)
          .attr('dx', 10)
          .attr('dy', 78)
          .text((d:any) => _.truncate(d.body.substring(165), {'length': 55}))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);

    this.svgElements.linesArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.line')
        .data((d:any) => d)
        .enter().append('line')
        .attr('class', 'articleLine')
        .attr('stroke-width', 1)
        .attr('stroke', '#a2a5a7')
        .attr('id', (d:any) => 'articleLine' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);

    this.svgElements.imgsArticleSite = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.image')
        .data((d:any) => d)
        .enter().append('image')
        .attr('class', 'articleSiteImage')
        .attr('xlink:href', (d:any) => d.articleSourceIcon)
        .attr('id', (d:any) => 'articleSiteImg' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .attr('width', 34)
        .attr('height', 34);

    this.svgElements.textsArticleSite = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => d)
        .enter().append('text')
        .attr('class', 'articleSiteTitle')
        .attr("text-anchor", "left")
        .attr("dominant-baseline", "middle")
        .attr('id', (d:any) => 'articleTextSite' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .text((d:any) => d.articleSource);

    this.svgElements.textsArticleTime = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => d)
        .enter().append('text')
        .attr('class', 'articleTime')
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr('id', (d:any) => 'articleTextTime' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .text((d:any) => moment(d.createdAt).fromNow());

    this.svgElements.editLinksArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.link')
        .data((d:any) => d)
        .enter().append('g')
        .append('text')
        .attr('class', 'pointer articleEdit')
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr('id', (d:any) => 'articleEditButton' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .text('Add your Opinion');


    this.svgElements.textsArticleMenu = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => d)
        .enter().append('text')
        .attr('class', 'pointer articleMenu')
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr('id', (d:any) => 'articleTextMenu' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .text('...');


    this.svgElements.ellipses = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'ellipse'))
      .selectAll('.ellipse')
      .data((d:any) => d)
      .enter().append('ellipse')
        .attr('id', (d:any) => 'ellipse' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g ellipse ' + d.nodeData.g);
    this.svgElements.textsEllipse = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'ellipse'))
      .selectAll('.text')
      .data((d:any) => d)
      .enter().append('text')
        .attr('id', (d:any) => 'ellipseText' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g text ' + d.nodeData.g)
    	.attr("text-anchor", "middle")
    	.attr("dominant-baseline", "central")
      .text((d:any) => d.nodeData.text);

    this.svgElements.rects = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'rect'))
      .selectAll('.rect')
      .data((d:any) => d)
      .enter().append('rect')
        .attr('id', (d:any) => 'rect' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g rect ' + d.nodeData.g);

    this.svgElements.textsRect = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'rect'))
      .selectAll('.text')
      .data((d:any) => d)
      .enter().append('text')
        .attr('id', (d:any) => 'rectText' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g text ' + d.nodeData.g)
      .attr("text-anchor", "left") // comment = g5: left aligned
      .attr("dominant-baseline", "text-before-edge")
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d) {
        let charsToWrap = 60;
        let totalW = 0;
        for(var i=0; i<d.nodeData.text.length; i+=charsToWrap) {
          let tspan:any = d3.select(this).append('tspan')
          .attr('dx', -1 * totalW)
          .attr('dy', i == 0 ? 0 : 15)
          .text((d:any) => d.nodeData.text.substr(i,charsToWrap))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex)
          .node();
          totalW = tspan.getComputedTextLength();
        }
      });

    this.svgElements.shapeRects = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'SHAPE_RECT'))
      .selectAll('.rect')
      .data((d:any) => d)
      .enter().append('rect')
      .attr('id', (d:any) => 'shape_rect' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'rect');

    this.reskinNodes(this.nodes);

    // Define event handlers for each SvgElements.
    _.each(this.svgElements, (elements: any, elType: string) => {
    	if(elements == null || elType == 'links') return;
    	elements
	      .on("dblclick", (d:any) => {
	      	if(this.listeners.dblclick) {
	      		if(this.handleClickListener) {
	      			this.handleClickListener = null;
	      			window.clearTimeout(this.handleClickListener);
	      		}
	      		this.listeners.dblclick.func.call(this.listeners.dblclick.context, d, elType);
	      	}
	      })
	      .on("click", (d:any) => {
	      	if(this.listeners.click) {
	      		this.handleClickListener = window.setTimeout(() => {
	      			if(that.handleClickListener) {
	      				this.listeners.click.func.call(this.listeners.click.context, d, elType);
		      			that.handleClickListener = null;

                if(elType == 'textsArticleMenu') {
                  if (d.bookmarked) {
                    that.articleMenu.items[0].label = 'Bookmarked'
                  } else {
                    that.articleMenu.items[0].label = 'Bookmark'
                  }
                  that.articleMenu.pop(d.x + d.style.width - 25, d.y + d.style.height - 10, d);
                }
		      		}
	      		}, 300);
	      	}
	      })
        .on('contextmenu', function(d:any){
            d3.event.preventDefault();
            that.contextMenu.pop(d3.mouse(this)[0], d3.mouse(this)[1], d);
        });

      if(elType == 'rects' || elType == 'ellipses') {
        elements.on('mouseenter', function(d:any) {
          if(that.dropShowable(d)) {
            this.style.filter="url('#drop-shadow')";
            d3.select('#rectText' + d.nodeData.nodeIndex).style('font-weight', "bold");
            d3.select('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "bold");
          }
        })
        .on('mouseleave', function(d:any) {
          if(that.dropShowable(d)) {
            this.style.filter="none";
            d3.select('#rectText' + d.nodeData.nodeIndex).style('font-weight', "normal");
            d3.select('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "normal");
          }
        });
      }
      else if(elType == 'textsRect' || elType == 'textsEllipse') {
        elements.on('mouseenter', function(d:any) {
          if(that.dropShowable(d)) {
            d3.select('#rect' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
            d3.select('#ellipse' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
            this.style.fontWeight = 'bold';
          }
        })
        .on('mouseleave', function(d:any) {
          if(that.dropShowable(d)) {
            d3.select('#rect' + d.nodeData.nodeIndex).style('filter', "none");
            d3.select('#ellipse' + d.nodeData.nodeIndex).style('filter', "none");
            this.style.fontWeight = 'normal';
          }
        });
      }
		});
    _.each(this.svgElements, (elements: any) => {
    	if(elements == null) return;
    	elements.call(d3.drag()
	      .on("start", function(d:any) {
          d3.event.sourceEvent.stopPropagation();
	      	if(!d.nodeData.movable) return;
          if (!d3.event.active) that.simulation.alphaTarget(1).restart();
        })
        .on("drag", function(d:any) {
        	if(!d.nodeData.movable) return;
            d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
        })
        .on("end", function (d:any) {
        	if(!d.nodeData.movable) return;
          if (!d3.event.active) that.simulation.alphaTarget(0);
        })
			);
    });

    this.simulation.restart();
    this.simulation.alpha(1);
    this.updateArticlePosition(false)
    this.simulation.nodes(this.nodes)
      .on("tick", () => this.ticked());
  }

  dropShowable(d:any) {
    return d.nodeData.g == 'g1' || d.nodeData.g == 'g2' ||  d.nodeData.g == 'g3' ||  d.nodeData.g == 'g4' ||  d.nodeData.g == 'g6' ||  d.nodeData.g == 'g7' ||  d.nodeData.g == 'g11' ||  d.nodeData.g == 'g12' ||  d.nodeData.g == 'g13' ||  d.nodeData.g == 'g21' ||  d.nodeData.g == 'g22';
  }

  on(event, listener, context = null) {
  	this.listeners[event] = { context: context, func: listener};
  }

  viewNextArticle(direction /* boolean: true - next, false - prev) */) {
    if(this.isInTransition) return;
    let articleIndices = Object.keys(this.collisionNodes)
    this.currentArticleIndex = this.currentArticleIndex + (direction ? 1 : -1)
    if(this.currentArticleIndex < 0) this.currentArticleIndex = articleIndices.length - 1
    if(this.currentArticleIndex >= articleIndices.length) this.currentArticleIndex = 0

    //this.translateViewTo(this.nodes[articleIndices[this.currentArticleIndex]].x, this.nodes[articleIndices[this.currentArticleIndex]].y)
    let article_count = articleIndices.length
    articleIndices.forEach((nodeIndex, articleIndex) => {
      let offset_from_center = 0
      if (articleIndex - this.currentArticleIndex >= 0) {
        if ((articleIndex - this.currentArticleIndex) >= (article_count - 2)) {
          offset_from_center = articleIndex - this.currentArticleIndex - article_count
        } else {
          offset_from_center = articleIndex - this.currentArticleIndex
        }
      } else {
        if ((article_count - this.currentArticleIndex + articleIndex) < (article_count - 2)) {
          offset_from_center = article_count - this.currentArticleIndex + articleIndex
        } else {
          offset_from_center = articleIndex - this.currentArticleIndex
        }
      }

      this.nodes[nodeIndex].x = offset_from_center * 620
    })

    this.updateArticlePosition()

    this.listeners.article_navigate.func.call(this.listeners.article_navigate.context, this.currentArticleIndex)
  }

  updateArticlePosition(animation:boolean = true) {
    let t = animation ? 1500 : 0
    this.svgElements.articles
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y)
          .duration(t)
    this.svgElements.imgsArticle
          .transition()
          .attr('x', (d:any) => d.x+1)
          .attr('y', (d:any) => d.y+1)
          .duration(t)
    this.svgElements.textsArticleTitle
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y)
          .duration(t)
    this.svgElements.tspansArticleTitle1
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 250)
          .duration(t)
    this.svgElements.tspansArticleTitle2
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 250)
          .duration(t)
    this.svgElements.textsArticleBody
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 40)
          .duration(t)
    this.svgElements.tspansArticleBody1
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 330)
          .duration(t)
    this.svgElements.tspansArticleBody2
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 330)
          .duration(t)
    this.svgElements.tspansArticleBody3
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 330)
          .duration(t)
    this.svgElements.tspansArticleBody4
          .transition()
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y + 330)
          .duration(t)
    this.svgElements.linesArticle
          .transition()
          .attr('x1', (d:any) => d.x)
          .attr('y1', (d:any) => d.y + d.style.height - 50)
          .attr('x2', (d:any) => d.x + d.style.width)
          .attr('y2', (d:any) => d.y + d.style.height - 50)
          .duration(t)
    this.svgElements.imgsArticleSite
          .transition()
          .attr('x', (d:any) => d.x + 8)
          .attr('y', (d:any) => d.y + d.style.height - 42)
          .duration(t)
    this.svgElements.textsArticleSite
          .transition()
          .attr('x', (d:any) => d.x + 50)
          .attr('y', (d:any) => d.y + d.style.height - 16)
          .duration(t)
    this.svgElements.textsArticleTime
          .transition()
          .attr('x', (d:any) => d.x + d.style.width - 190)
          .attr('y', (d:any) => d.y + d.style.height - 16)
          .duration(t)
    this.svgElements.editLinksArticle
          .transition()
          .attr('x', (d:any) => d.x + d.style.width - 50)
          .attr('y', (d:any) => d.y + d.style.height - 16)
          .duration(t)
    this.svgElements.textsArticleMenu
          .transition()
          .attr('x', (d:any) => d.x + d.style.width - 15)
          .attr('y', (d:any) => d.y + d.style.height - 25)
          .duration(t)
  }

  ticked () {
    this.collide(1)

    // this.svgElements.links
    // 			.attr('x1', (d:any) => d.x + d.style.width/2 )
    // 			.attr('y1', (d:any) => d.y + d.style.height/2 )
    // 			.attr('x2', (d:any) => { let p=this.parentOfElement(d); return p.x + p.style.width /2; })
    // 			.attr('y2', (d:any) => { let p=this.parentOfElement(d); return p.y + p.style.height /2; });
    // this.svgElements.articles
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y);
    // this.svgElements.imgsArticle
    //       .attr('x', (d:any) => d.x+1)
    //       .attr('y', (d:any) => d.y+1);
    // this.svgElements.textsArticleTitle
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y);
    // this.svgElements.tspansArticleTitle1
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 250);
    // this.svgElements.tspansArticleTitle2
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 250);
    // this.svgElements.textsArticleBody
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 40);
    // this.svgElements.tspansArticleBody1
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 330);
    // this.svgElements.tspansArticleBody2
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 330);
    // this.svgElements.tspansArticleBody3
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 330);
    // this.svgElements.tspansArticleBody4
    //       .attr('x', (d:any) => d.x)
    //       .attr('y', (d:any) => d.y + 330);
    // this.svgElements.linesArticle
    //       .attr('x1', (d:any) => d.x)
    //       .attr('y1', (d:any) => d.y + d.style.height - 50)
    //       .attr('x2', (d:any) => d.x + d.style.width)
    //       .attr('y2', (d:any) => d.y + d.style.height - 50);
    // this.svgElements.imgsArticleSite
    //       .attr('x', (d:any) => d.x + 8)
    //       .attr('y', (d:any) => d.y + d.style.height - 42);
    // this.svgElements.textsArticleSite
    //       .attr('x', (d:any) => d.x + 50)
    //       .attr('y', (d:any) => d.y + d.style.height - 16);
    // this.svgElements.textsArticleTime
    //       .attr('x', (d:any) => d.x + d.style.width - 190)
    //       .attr('y', (d:any) => d.y + d.style.height - 16);
    // this.svgElements.editLinksArticle
    //       .attr('x', (d:any) => d.x + d.style.width - 50)
    //       .attr('y', (d:any) => d.y + d.style.height - 16);
    // this.svgElements.textsArticleMenu
    //       .attr('x', (d:any) => d.x + d.style.width - 15)
    //       .attr('y', (d:any) => d.y + d.style.height - 25);


    this.svgElements.ellipses
    			.attr('rx', (d:any) => d.style.width/2)
          .attr('ry', (d:any) => d.style.height/2)
          .attr('cx', (d:any) => d.x + d.style.width/2)
          .attr('cy', (d:any) => d.y + d.style.height/2);
    this.svgElements.textsEllipse
          .attr('x', (d:any) => d.x + d.style.width/2 )
          .attr('y', (d:any) => d.y + d.style.height/2 );
    this.svgElements.rects
    			.attr('width', (d:any) => d.style.width)
    			.attr('height', (d:any) => d.style.height)
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y);
    this.svgElements.textsRect
          .attr('x', (d:any) => d.x)    //g5 : comment left aligned
          .attr('y', (d:any) => d.y);

    this.svgElements.shapeRects
          .attr('x', (d:any) => d.x)    //g5 : comment left aligned
          .attr('y', (d:any) => d.y);
  }

  clustering(alpha) {
    let articleIndex = this.nextArticle(-1)
    while(articleIndex < this.nodes.length) {
      let parent = this.nodes[articleIndex]
      let i = articleIndex+1
      for (; i<this.nodes.length && this.nodes[i].shape != 'article'; i++) {
        let node = this.nodes[i]
        if ((node.nodeData.parentIndex < 0) || (node.nodeData.parentIndex != articleIndex) || (parent.x == null || parent.y == null || node.x == null || node.y == null)) {
          continue
        }
        let dCenterX = (node.x + node.style.width/2), dCenterY = (node.y + node.style.height/2),
          parentCenterX = (parent.x + parent.style.width/2), parentCenterY = (parent.y + parent.style.height/2),
          parentBottomY = (parent.y + parent.style.height), parentRightX = (parent.x + parent.style.width),
          pullX, pullY;
        if (parent.nodeData.clustersPopulation) {
          if (typeof(node.nodeData.indexInCluster)=='number' && node.nodeData.clusterName) {
            let pullPoint =DataService.pullPoint(parent, node.nodeData.clusterName, node.nodeData.indexInCluster)
            pullX = pullPoint.x;
            pullY = pullPoint.y;
          } else {
            console.log('This should not happen.');
            pullX = parentCenterX;
            pullY = parentCenterY;
          }
        } else {
          pullX = parentCenterX;
          pullY = parentCenterY;
        }

        let distanceX = pullX - dCenterX, distanceY = pullY - dCenterY;
        let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        if (distance==0) {
          // Arrived at the pull point.
        } else {
          let step = 0.05
          let moveX = (distanceX)  * step * alpha;
          let moveY = (distanceY)  * step * alpha;
          node.x += moveX;
          node.y += moveY;
        }
      }
      articleIndex =i
    }
  }

  collide(alpha/*ignored*/) {
    let articleIndex = this.nextArticle(-1)
    while(articleIndex < this.nodes.length) {
      let nextArticleIndex = this.nextArticle(articleIndex)

      for (let i=0; i < nextArticleIndex - articleIndex - 1; i++ ) {
        for(let j = 0; j < this.collisionNodes[articleIndex].length; j++) {
          let oneIndex = articleIndex + i
          let otherIndex = this.collisionNodes[articleIndex][j]
          if(oneIndex == otherIndex || (oneIndex > otherIndex && otherIndex != 0)) continue;

          let oneNode = this.nodes[oneIndex]
          let otherNode = this.nodes[otherIndex]

          if (otherNode.x == null || otherNode.y == null || oneNode.x == null || oneNode.y == null) {
            console.log('This should not happen')
            continue
          }

          // 1. Decide behavior
          let padding
          let style = 'rect-rect'
          let movable = {oneX:1, oneY:1, otherX:1, otherY:1}
          if(oneNode.nodeData.g == 'g100') {
            movable.oneX = 0;
            movable.oneY = 0;
            padding = this.paddings.node;
          }
          else if(otherNode.nodeData.g == 'g100') {
            movable.otherX = 0
            movable.otherY = 0
            padding = this.paddings.node;
          }
          else if(oneNode.nodeData.focused) {
            movable.oneX = 0
            movable.oneY = 0
            if(otherNode.nodeData.g == 'g0') {
              padding = this.paddings.focus_article
            }
            else {
              padding = this.paddings.node
            }
          }
          else if(otherNode.nodeData.focused) {
            movable.otherX = 0
            movable.otherY = 0
            if(oneNode.nodeData.g == 'g0') {
              padding = this.paddings.focus_article
            }
            else {
              padding = this.paddings.node
            }
          }
          else if (oneNode.nodeData.g == 'g0') {
            if(otherNode.nodeData.g == 'g0') {
              movable.oneX = 0
              movable.oneY = 0
              movable.otherX = 0
              movable.otherY = 0
              padding = this.paddings.article
            }
            else if(otherNode.nodeData.parentIndex == oneIndex) {
              // article - child collision test
              padding = this.paddings.node
              movable.oneX = 0
              movable.oneY = 0
            }
            else {
              // article - child collision test
              padding = this.paddings.node
              movable.oneX = 0
              movable.oneY = 0
            }
          }
          else {
            if(otherNode.nodeData.g == 'g0') {
              padding = this.paddings.node
              movable.otherX = 0
              movable.otherY = 0
            }
            else if(oneNode.nodeData.parentIndex != otherNode.nodeData.parentIndex) {
              padding = this.paddings.node
            }
            else {
              // child - child test
              padding = (oneNode.nodeData.clusterName == otherNode.nodeData.clusterName) ? this.paddings.node : this.paddings.cluster
            }
          }
          if (oneNode.shape == 'ellipse' && otherNode.shape == 'ellipse') {
            style = 'ellipse-ellipse'
          }

          // 2. Carry out the behavior
          if (style == 'ellipse-ellipse') {
            let ellipseOne = Shapes.ellipse(oneNode.x+oneNode.style.width/2, oneNode.y+oneNode.style.height/2,oneNode.style.width/2+padding/2, oneNode.style.height/2+padding/2)
            let ellipseTwo = Shapes.ellipse(otherNode.x+otherNode.style.width/2, otherNode.y+otherNode.style.height/2,otherNode.style.width/2+padding/2, otherNode.style.height/2+padding/2)
            let overlap = DataService.checkEllipsesOverlap(ellipseOne, ellipseTwo)
            if (!overlap) {
              continue
            }
            let directionVector = {x:0, y:0}
            if ((ellipseOne.args[0].x == ellipseTwo.args[0].x) &&(ellipseOne.args[0].y == ellipseTwo.args[0].y)) {
              directionVector = {x:1, y:0}
            }
            else {
              let centerDistance = Math.sqrt((ellipseOne.args[0].x - ellipseTwo.args[0].x)*(ellipseOne.args[0].x - ellipseTwo.args[0].x) + (ellipseOne.args[0].y - ellipseTwo.args[0].y)*(ellipseOne.args[0].y - ellipseTwo.args[0].y))
              directionVector.x = (ellipseOne.args[0].x - ellipseTwo.args[0].x) / centerDistance
              directionVector.y = (ellipseOne.args[0].y - ellipseTwo.args[0].y) / centerDistance
            }
            let step = 10
            while(overlap) {
              ellipseOne = Shapes.ellipse(ellipseOne.args[0].x + directionVector.x * step, ellipseOne.args[0].y + directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2])
              ellipseTwo = Shapes.ellipse(ellipseTwo.args[0].x - directionVector.x * step, ellipseTwo.args[0].y - directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2])
              overlap = DataService.checkEllipsesOverlap(ellipseOne, ellipseTwo)
            }
            // reverse last step
            ellipseOne = Shapes.ellipse(ellipseOne.args[0].x - directionVector.x * step, ellipseOne.args[0].y - directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2])
            ellipseTwo = Shapes.ellipse(ellipseTwo.args[0].x + directionVector.x * step, ellipseTwo.args[0].y + directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2])
            overlap = true
            // granulate step
            step = 1
            while(overlap) {
              ellipseOne = Shapes.ellipse(ellipseOne.args[0].x + directionVector.x * step, ellipseOne.args[0].y + directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2])
              ellipseTwo = Shapes.ellipse(ellipseTwo.args[0].x - directionVector.x * step, ellipseTwo.args[0].y - directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2])
              overlap = DataService.checkEllipsesOverlap(ellipseOne, ellipseTwo)
            }
            oneNode.x = ellipseOne.args[0].x - oneNode.style.width/2
            oneNode.y = ellipseOne.args[0].y - oneNode.style.height/2
            otherNode.x = ellipseTwo.args[0].x - otherNode.style.width/2
            otherNode.y = ellipseTwo.args[0].y - otherNode.style.height/2
          }
          else {
            let xDist = (oneNode.x + oneNode.style.width/2) - (otherNode.x + otherNode.style.width/2),
              yDist = (oneNode.y + oneNode.style.height/2) - (otherNode.y + otherNode.style.height/2),
              xSpacing = (otherNode.style.width + oneNode.style.width) / 2 + padding,
              ySpacing = (otherNode.style.height + oneNode.style.height) / 2 + padding,
              absXDist = Math.abs(xDist),
              absYDist = Math.abs(yDist);

            if (absXDist < xSpacing && absYDist < ySpacing) {

              let moveX = (xSpacing - absXDist) * (Math.sign(xDist) == 0 ? 1 : Math.sign(xDist)) / 2;
              let moveY = (ySpacing - absYDist) * (Math.sign(yDist) == 0 ? 1 : Math.sign(yDist)) / 2;

              if (Math.abs(moveX) > Math.abs(moveY)) {
                //want to move Y, but
                if ((movable.oneY == 0) && (movable.otherY == 0)) {
                  moveY = 0;
                }
                else {
                  moveX = 0;
                }
              } else {
                //want to move X, but
                if ((movable.oneX == 0) && (movable.otherX == 0)) {
                  moveX = 0;
                }
                else {
                  moveY = 0;
                }
              }

              // moveX = Math.min(moveX, 10)
              // moveY = Math.min(moveY, 10)

              oneNode.x += moveX * movable.oneX * alpha;
              oneNode.y += moveY * movable.oneY * alpha;
              otherNode.x -= moveX * movable.otherX * alpha;
              otherNode.y -= moveY * movable.otherY * alpha;
            }
          }
        }
      }
      articleIndex = nextArticleIndex
    }
  }

  parentOfElement(d:any) {
    return this.nodes[d.nodeData.parentIndex];
  }

  nextArticle(lastIndex) {
    let i = lastIndex + 1
    for (; i<this.nodes.length; i++) {
      if (this.nodes[i].nodeData.g == 'g0' || this.nodes[i].nodeData.g == 'g100') {
        return i
      }
    }
    return i
  }

}
