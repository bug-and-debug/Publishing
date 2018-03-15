import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import { Point2D, Intersection, Shapes } from 'kld-intersections';

export class DataService {
  public static formats = {
    backend: {
      date: 'YYYY-MM-DD',
      startdate: 'YYYY-MM-DD 00:00:00',
      enddate: 'YYYY-MM-DD 23:59:59',
      datetime: 'YYYY-MM-DD HH:mm:ss'
    }
  };
  public static COLORS: any = {
    g0: ['#ffffff'],
    g1: [ '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'],
    g2: [ '#eceff1', '#cfd8dc', '#607d8b', '#546e7a'],
    g3: [ '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835'],
    g4: [ '#d1c4e9', '#b39ddb', '#7e57c2', '#673ab7'],
    g5: [ '#fafafa', '#f5f5f5', '#eeeeee' ],  //comment
    g6: [ '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'],
    g7: [ '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33' ],
    g11: ['#ff5722'],
    g12: [ '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    g13: [ '#efebe9', '#d7ccc8', '#bcaaa4'],
    g21: [ '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1' ], //user
    g22: [ '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00' ],  //location
    // states
    S1: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'],
    S2: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373'],
    S3: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E'],
    // others
    g100: ['#ffffff']
  };

  public static SHAPES: any = {
    g0: 'article',
    g1: 'ellipse',
    g2: 'rect',
    g3: 'ellipse',
    g4: 'rect',
    g5: 'rect',  //comment
    g6: 'rect',
    g7: 'ellipse',
    g11: 'rect',
    g12: 'ellipse',
    g13: 'ellipse',
    g21: 'ellipse', //user
    g22: 'ellipse',  //location,
    g100: 'SHAPE_RECT'    // ARTICLE VIEW - ARTICLE RECT
  };

  public static NODE_COUNTS: any = {
    DEFAULT:  {  g1: 5,  g2: 5, g3: 5, g4: 5, g5: 20, g6: 0, g7: 0, g11: 5, g12: 5, g13: 5, g21: 5, g22: 5 },
    FOCUS:    {  g1: 10,  g2: 10, g3: 10, g4: 10, g10: 20, g6: 0, g7: 0, g11: 1, g12: 10, g13: 10, g21: 10, g22: 10 },
    ARTICLE:  {  g1: 15,  g2: 15, g3: 15, g4: 15, g15: 100, g6: 0, g7: 0, g11: 1, g12: 15, g13: 15, g21: 15, g22: 15 }
  };

  public static SIZES: any = {
    g0: { font: 14, width: 400, height: 150},
    g1: { font: { min: 10, max: 24} },
    g2: { font: { min: 10, max: 18} },
    g3: { font: { min: 10, max: 24} },
    g4: { font: { min: 10, max: 18} },
    g5: { font: { min: 10, max: 14} },  //comment
    g6: { font: { min: 10, max: 18} },
    g7: { font: { min: 10, max: 24} },
    g11: { font: { min: 24, max: 24} },
    g12: { font: { min: 10, max: 24} },
    g13: { font: { min: 10, max: 24} },
    g21: { font: { min: 10, max: 24} }, //user
    g22: { font: { min: 10, max: 24} },  //location
    g100: { width: 900, height: 600 }
  };

  public static regionDiameter = 200

  public static getColor(g, weight = 0) {
    if(this.COLORS[g].length == 1) return this.COLORS[g][0];
    let index = Math.floor(DataService.random() * this.COLORS[g].length);
    return this.COLORS[g][index];
  }

  public static random() {
    return Math.random();
  }

  public static polygon(article:any, group:any) {
    // returns polyline, because polygon
    // g21 (user), g22(location) -- will be put in the same bucket of g13
    // --- constants ---
    let farArmLength = this.regionDiameter * 3

    let upperLineAngle = 50 * Math.PI / 180 // degrees
    let sideLineAngle = 15 * Math.PI / 180 // degrees

    let toplineOffset = 44;
    let sidelineOffset = 45;
    let permitOffset = 10;

    let points = []
    if ( (group == "g11") || (group == "g6") ) {
      let leftPoint = new Point2D(article.x + toplineOffset - permitOffset, article.y + permitOffset)
      let rightPoint = new Point2D(article.x + article.style.width - toplineOffset + permitOffset, article.y + permitOffset)
      let leftFarPoint = new Point2D(leftPoint.x - Math.cos(upperLineAngle) * farArmLength - permitOffset,
                                 leftPoint.y - Math.sin(upperLineAngle) * farArmLength)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(upperLineAngle) * farArmLength + permitOffset, 
                                  leftPoint.y - Math.sin(upperLineAngle) * farArmLength)
      points = [leftFarPoint, leftPoint, rightPoint, rightFarPoint, leftFarPoint]
    }
    else if (group == "g5") {
      let leftPoint = new Point2D(article.x + toplineOffset - permitOffset, article.y + article.style.height - permitOffset)
      let rightPoint = new Point2D(article.x + article.style.width - toplineOffset + permitOffset, article.y + article.style.height - permitOffset)
      let leftFarPoint = new Point2D(leftPoint.x - Math.cos(upperLineAngle) * farArmLength - permitOffset, 
                                 leftPoint.y + Math.sin(upperLineAngle) * farArmLength)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(upperLineAngle) * farArmLength + permitOffset, 
                                  rightPoint.y + Math.sin(upperLineAngle) * farArmLength)
      points = [leftFarPoint, leftPoint, rightPoint, rightFarPoint, leftFarPoint]
    }
    else if (group == "g4") {
      let topPoint = new Point2D(article.x + permitOffset, article.y + sidelineOffset - permitOffset)
      let bottomPoint = new Point2D(article.x + permitOffset, article.y + article.style.height - sidelineOffset + permitOffset)
      let topFarPoint = new Point2D(topPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                topPoint.y - Math.sin(sideLineAngle) * farArmLength - permitOffset)
      let bottomFarPoint = new Point2D(bottomPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                bottomPoint.y + Math.sin(sideLineAngle) * farArmLength + permitOffset)
      points = [topPoint, bottomPoint, bottomFarPoint, topFarPoint, topPoint]
    }
    else if (group == "g2") {
      let topPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + sidelineOffset - permitOffset)
      let bottomPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + article.style.height - sidelineOffset + permitOffset)
      let topFarPoint = new Point2D(topPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                topPoint.y - Math.sin(sideLineAngle) * farArmLength - permitOffset)
      let bottomFarPoint = new Point2D(bottomPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                bottomPoint.y + Math.sin(sideLineAngle) * farArmLength + permitOffset)
      points = [topPoint, bottomPoint, bottomFarPoint, topFarPoint, topPoint]
    }
    else if (group == "g1") {
      let topPoint = new Point2D(article.x + toplineOffset + permitOffset, article.y - permitOffset)
      let topFarPoint = new Point2D(topPoint.x - Math.cos(upperLineAngle) * farArmLength + permitOffset, 
                                topPoint.y - Math.sin(upperLineAngle) * farArmLength)
      let leftPoint = new Point2D(article.x + permitOffset, article.y + sidelineOffset + permitOffset)
      let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                 leftPoint.y - Math.sin(sideLineAngle) * farArmLength + permitOffset)
      let cornerPoint = new Point2D(article.x + permitOffset, article.y + permitOffset)
      points = [topPoint, leftPoint,leftFarPoint,topFarPoint,topPoint]
    }
    else if ((group == "g12")) {
      let topPoint = new Point2D(article.x + article.style.width - toplineOffset - permitOffset, article.y + permitOffset)
      let topFarPoint = new Point2D(topPoint.x + Math.cos(upperLineAngle) * farArmLength - permitOffset, 
                                topPoint.y - Math.sin(upperLineAngle) * farArmLength)
      let rightPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + sidelineOffset + permitOffset)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                  rightPoint.y - Math.sin(sideLineAngle) * farArmLength + permitOffset)
      let cornerPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + permitOffset)
      points = [topPoint,rightPoint,rightFarPoint,topFarPoint,topPoint]
    }
    else if ((group == "g13") || (group=="g21") || (group=="g22")) {
      let rightPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + article.style.height - sidelineOffset - permitOffset)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                  rightPoint.y + Math.sin(sideLineAngle) * farArmLength - permitOffset)
      let bottomPoint = new Point2D(article.x + article.style.width - toplineOffset - permitOffset, article.y + article.style.height - permitOffset)
      let bottomFarPoint = new Point2D(bottomPoint.x + Math.cos(upperLineAngle) * farArmLength - permitOffset, 
                                   bottomPoint.y + Math.sin(upperLineAngle) * farArmLength)
      let cornerPoint = new Point2D(article.x + article.style.width - permitOffset, article.y + article.style.height - permitOffset)
      points = [rightPoint, bottomPoint, bottomFarPoint, rightFarPoint, rightPoint]
    }
    else if ((group == "g3") || (group == "g7")) {
      let leftPoint = new Point2D(article.x + permitOffset, article.y + article.style.height - sidelineOffset - permitOffset)
      let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                   leftPoint.y + Math.sin(sideLineAngle) * farArmLength - permitOffset)
      let rightPoint = new Point2D(article.x + toplineOffset + permitOffset, article.y + article.style.height - permitOffset)
      let rightFarPoint = new Point2D(rightPoint.x - Math.cos(upperLineAngle) * farArmLength + permitOffset, 
                                  rightPoint.y + Math.sin(upperLineAngle) * farArmLength)
      let cornerPoint = new Point2D(article.x + permitOffset, article.y + article.style.height - permitOffset)
      points = [leftPoint, rightPoint, rightFarPoint, leftFarPoint, leftPoint]
    }
    else if (group == "S1") {
      let leftPoint = new Point2D(article.x + article.style.width/2, article.y)
      let leftFarPoint = new Point2D(article.x + article.style.width/2, article.y - farArmLength)
      let rightPoint = new Point2D(article.x, article.y + article.style.height)
      let rightFarPoint = new Point2D(rightPoint.x - Math.cos(sideLineAngle) * farArmLength, 
                                  rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
      let cornerPoint = new Point2D(rightFarPoint.x, leftFarPoint.y)
      points = [leftPoint, rightPoint, rightFarPoint, cornerPoint, leftFarPoint]
    }
    else if (group == "S2") {
      let leftPoint = new Point2D(article.x + article.style.width/2, article.y)
      let leftFarPoint = new Point2D(article.x + article.style.width/2, article.y - farArmLength)
      let rightPoint = new Point2D(article.x + article.style.width, article.y + article.style.height)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength, 
                                  rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
      let cornerPoint = new Point2D(rightFarPoint.x, leftFarPoint.y)
      points = [leftPoint, rightPoint, rightFarPoint, cornerPoint, leftFarPoint]
    }
    else if (group == "S3") {
      let leftPoint = new Point2D(article.x, article.y + article.style.height)
      let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * farArmLength, 
                                  leftPoint.y + Math.sin(sideLineAngle) * farArmLength)
      let rightPoint = new Point2D(article.x + article.style.width, article.y + article.style.height)
      let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength, 
                                  rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
      points = [leftPoint, leftFarPoint, rightFarPoint, rightPoint]
    }
    return Shapes.polyline(this.convertPointsToNums(points))
  }
  public static enterPosition(article:any, group:any, index: any) { // {point, widthMultiplier, heightMultiplier}
    let farArmLength = this.regionDiameter * 1.5

    let upperLineAngle = 50 * Math.PI / 180 // degrees
    let sideLineAngle = 15 * Math.PI / 180 // degrees

    let toplineOffset = 44;
    let sidelineOffset = 45;

    let points = []
    let widthMultiplier
    let heightMultiplier

    if(article.nodeData.g == 'g0') {
      if ( (group == "g11") || (group == "g6") ) {
        let len = farArmLength / (group == "g11" ? 2 : 1)
        let leftPoint = new Point2D(article.x + toplineOffset, article.y)
        let rightPoint = new Point2D(article.x + article.style.width - toplineOffset, article.y)
        let leftFarPoint = new Point2D(leftPoint.x - Math.cos(upperLineAngle) * len, 
                                   leftPoint.y - Math.sin(upperLineAngle) * len)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(upperLineAngle) * len, 
                                    leftPoint.y - Math.sin(upperLineAngle) * len)
        points = [rightFarPoint, leftFarPoint]
        widthMultiplier = -0.5
        heightMultiplier = 0
      }
      else if (group == "g5") {
        let leftPoint = new Point2D(article.x + toplineOffset, article.y + article.style.height)
        let rightPoint = new Point2D(article.x + article.style.width - toplineOffset, article.y + article.style.height)
        let leftFarPoint = new Point2D(leftPoint.x - Math.cos(upperLineAngle) * farArmLength, 
                                   leftPoint.y + Math.sin(upperLineAngle) * farArmLength)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(upperLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(upperLineAngle) * farArmLength)
        points = [rightFarPoint, leftFarPoint]
        widthMultiplier = -0.5
        heightMultiplier = -1
      }
      else if (group == "g4") {
        let topPoint = new Point2D(article.x, article.y + sidelineOffset)
        let bottomPoint = new Point2D(article.x, article.y + article.style.height - sidelineOffset)
        let topFarPoint = new Point2D(topPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                  topPoint.y - Math.sin(sideLineAngle) * farArmLength)
        let bottomFarPoint = new Point2D(bottomPoint.x - Math.cos(sideLineAngle) * farArmLength,
                                  bottomPoint.y + Math.sin(sideLineAngle) * farArmLength)
        points = [bottomFarPoint, topFarPoint]
        widthMultiplier = -0.8
        heightMultiplier = -0.5
      }
      else if (group == "g2") {
        let topPoint = new Point2D(article.x + article.style.width, article.y + sidelineOffset)
        let bottomPoint = new Point2D(article.x + article.style.width, article.y + article.style.height - sidelineOffset)
        let topFarPoint = new Point2D(topPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                  topPoint.y - Math.sin(sideLineAngle) * farArmLength)
        let bottomFarPoint = new Point2D(bottomPoint.x + Math.cos(sideLineAngle) * farArmLength,
                                  bottomPoint.y + Math.sin(sideLineAngle) * farArmLength)
        points = [bottomFarPoint, topFarPoint]
        widthMultiplier = -0.2
        heightMultiplier = -0.5
      }
      else if (group == "g1") {
        let len = farArmLength / (index % 2 ? 2 : 1)
        let topPoint = new Point2D(article.x + toplineOffset, article.y)
        let topFarPoint = new Point2D(topPoint.x - Math.cos(upperLineAngle) * len, 
                                  topPoint.y - Math.sin(upperLineAngle) * len)
        let leftPoint = new Point2D(article.x, article.y + sidelineOffset)
        let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * len,
                                   leftPoint.y - Math.sin(sideLineAngle) * len)
        let cornerPoint = new Point2D(article.x, article.y)
        points = [leftFarPoint,topFarPoint]
        widthMultiplier = 0
        heightMultiplier = 0
      }
      else if ((group == "g12")) {
        let len = farArmLength / (index % 2 ? 2 : 1)
        let topPoint = new Point2D(article.x + article.style.width - toplineOffset, article.y)
        let topFarPoint = new Point2D(topPoint.x + Math.cos(upperLineAngle) * len, 
                                  topPoint.y - Math.sin(upperLineAngle) * len)
        let rightPoint = new Point2D(article.x + article.style.width, article.y + sidelineOffset)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * len,
                                    rightPoint.y - Math.sin(sideLineAngle) * len)
        let cornerPoint = new Point2D(article.x + article.style.width, article.y)
        points = [rightFarPoint,topFarPoint]
        widthMultiplier = -0.5
        heightMultiplier = -0.5
      }
      else if ((group == "g13") || (group=="g21") || (group=="g22")) {
        let len = farArmLength / (group == "g13" ? 2 : 1)
        let rightPoint = new Point2D(article.x + article.style.width, article.y + article.style.height - sidelineOffset)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * len,
                                    rightPoint.y + Math.sin(sideLineAngle) * len)
        let bottomPoint = new Point2D(article.x + article.style.width - toplineOffset, article.y + article.style.height)
        let bottomFarPoint = new Point2D(bottomPoint.x + Math.cos(upperLineAngle) * len, 
                                     bottomPoint.y + Math.sin(upperLineAngle) * len)
        let cornerPoint = new Point2D(article.x + article.style.width, article.y + article.style.height)
        points = [bottomFarPoint, rightFarPoint]
        widthMultiplier = -1
        heightMultiplier = -1
      }
      else if ((group == "g3") || (group == "g7")) {
        let len = farArmLength / (group == "g3" ? 2 : 1)
        let leftPoint = new Point2D(article.x, article.y + article.style.height - sidelineOffset)
        let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * len,
                                     leftPoint.y + Math.sin(sideLineAngle) * len)
        let rightPoint = new Point2D(article.x + toplineOffset, article.y + article.style.height)
        let rightFarPoint = new Point2D(rightPoint.x - Math.cos(upperLineAngle) * len, 
                                    rightPoint.y + Math.sin(upperLineAngle) * len)
        points = [rightFarPoint, leftFarPoint]
        widthMultiplier = 0
        heightMultiplier = -1
      }
      else if (group == "S1") {
        let articlePoint = new Point2D(article.x, article.y)
        let leftPoint = new Point2D(article.x + article.style.width/2, article.y)
        let leftFarPoint = new Point2D(article.x + article.style.width/2, article.y - farArmLength)
        let leftFarPoint1 = new Point2D(article.x + article.style.width/4, article.y - farArmLength)
        let rightPoint = new Point2D(article.x, article.y + article.style.height)
        let rightFarPoint = new Point2D(rightPoint.x - Math.cos(sideLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
        let rightFarPoint1 = new Point2D(rightPoint.x - Math.cos(sideLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(sideLineAngle) * farArmLength / 4)
        let cornerPoint = new Point2D(rightFarPoint.x, leftFarPoint.y)
        let startPoints = [leftFarPoint1, cornerPoint, rightFarPoint1];
        let multiplier = [ [-0.3, 1], [0.5, 0.5], [1, -0.5]];
        points = [startPoints[index % startPoints.length]]
        widthMultiplier = multiplier[index % startPoints.length][0];
        heightMultiplier = multiplier[index % startPoints.length][1]; 
      }
      else if (group == "S2") {
        let articlePoint = new Point2D(article.x + article.width, article.y)
        let leftPoint = new Point2D(article.x + article.style.width/2, article.y)
        let leftFarPoint = new Point2D(article.x + article.style.width/2, article.y - farArmLength)
        let leftFarPoint1 = new Point2D(article.x + article.style.width*3/4, article.y - farArmLength)
        let rightPoint = new Point2D(article.x + article.style.width, article.y + article.style.height)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
        let rightFarPoint1 = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(sideLineAngle) * farArmLength / 4)
        let cornerPoint = new Point2D(rightFarPoint.x, leftFarPoint.y)
        let startPoints = [leftFarPoint1, cornerPoint, rightFarPoint1];
        let multiplier = [ [0.3, 1], [-0.5, 0.5], [-1, -0.5]];
        points = [startPoints[index % startPoints.length]]
        widthMultiplier = multiplier[index % startPoints.length][0];
        heightMultiplier = multiplier[index % startPoints.length][1]; 
      }
      else if (group == "S3") {
        let leftPoint = new Point2D(article.x, article.y + article.style.height)
        let leftFarPoint = new Point2D(leftPoint.x - Math.cos(sideLineAngle) * farArmLength, 
                                    leftPoint.y + Math.sin(sideLineAngle) * farArmLength)
        let rightPoint = new Point2D(article.x + article.style.width, article.y + article.style.height)
        let rightFarPoint = new Point2D(rightPoint.x + Math.cos(sideLineAngle) * farArmLength, 
                                    rightPoint.y + Math.sin(sideLineAngle) * farArmLength)
        points = [leftFarPoint, rightFarPoint]
        widthMultiplier = 0;
        heightMultiplier = -1;
      }
    }
    else if(article.nodeData.g == 'g100') {
      let groupOrder = ['g11', 'g1', 'g2', 'g3', 'g4', 'g7', 'g6', 'g12', 'g13', 'g21', 'g22'];
      if(group == 'g5') {
        let startsPoints = [ new Point2D(article.x + article.style.width / 4, article.y + article.style.height + farArmLength / 2),
                        new Point2D(article.x + article.style.width / 2, article.y + article.style.height + farArmLength / 2)]
        points = [startsPoints[index % startsPoints.length]]
        widthMultiplier = 0.3;
        heightMultiplier = -1;
      }
      else {
        points = [new Point2D(article.x + article.style.width + farArmLength  / (groupOrder.indexOf(group) % 2 ? 1 : 2), article.y + article.style.height * 1.5 / (Math.ceil(groupOrder.length/2)) * (Math.floor(groupOrder.indexOf(group)/2)+1))]
        widthMultiplier = -1;
        heightMultiplier = 0;
      }
    }
    return {point:this.averagePoint(points), widthMultiplier, heightMultiplier}
  }
  public static pullPoint(article:any, group:any, index:any) {
    let point;
    if(article.nodeData.g == 'g0') {
      if ( (group == "g11") || (group == "g6") ) {
        point = new Point2D(article.x + article.style.width * (1+index)/(article.nodeData.clustersPopulation[group]+1), article.y)
      }
      else if (group == "g5") {
        point = new Point2D(article.x + article.style.width/2, article.y + article.style.height)
      }
      else if (group == "g4") {
        point = new Point2D(article.x, article.y + article.style.height / 2)
      }
      else if (group == "g2") {
        point = new Point2D(article.x + article.style.width, article.y + article.style.height / 2)
      }
      else if (group == "g1") {
        point = new Point2D(article.x, article.y)
      }
      else if ((group == "g12")) {
        point = new Point2D(article.x + article.style.width, article.y)
      }
      else if ((group == "g13") || (group=="g21") || (group=="g22")) {
        point = new Point2D(article.x + article.style.width, article.y + article.style.height)
      }
      else if ((group == "g3") || (group == "g7")) {
        point = new Point2D(article.x, article.y + article.style.height)
      }
      else if(group == "S1") {
        let points = [
          new Point2D(article.x + article.style.width / 4, article.y),
          // new Point2D(article.x, article.y),
          new Point2D(article.x, article.y + article.style.height / 2)
        ];
        point = points[index % points.length]
      }
      else if(group == "S2") {
        let points = [
          new Point2D(article.x + article.style.width * 3 / 4, article.y),
          // new Point2D(article.x + article.style.width, article.y),
          new Point2D(article.x + article.style.width, article.y + article.style.height / 2)
        ];
        point = points[index % points.length]
      }
      else if(group == "S3") {
        let points = [
          new Point2D(article.x, article.y + article.style.height),
          new Point2D(article.x + article.style.width / 2, article.y + article.style.height),
          new Point2D(article.x + article.style.width, article.y + article.style.height) 
        ];
        point = points[index % points.length]
      }
    }
    else if(article.nodeData.g == 'g100') {
      let groupOrder = ['g11', 'g1', 'g2', 'g3', 'g4', 'g7', 'g6', 'g12', 'g13', 'g21', 'g22'];
      if(group == 'g5') {
        let startsPoints = [ new Point2D(article.x + article.style.width / 4, article.y + article.style.height),
                        new Point2D(article.x + article.style.width / 2, article.y + article.style.height)]
        point = startsPoints[index % startsPoints.length]
      }
      else {
        point =   new Point2D(article.x + article.style.width, article.y + article.style.height * 1.5 / (Math.ceil(groupOrder.length/2)) * (Math.floor(groupOrder.indexOf(group)/2)+1))
      }
    }
    return point;
  }
  public static convertPointsToNums(points) {
    let coords = []
    for (var i = 0; i < points.length; i++) {
      coords.push(points[i].x, points[i].y)
    }  
    return coords
  }
  public static checkPointInPolygon(point, polygon) {
    // This function returns true if the point is inside the polygon, otherwise returns false.
    let points = polygon.args[0]
    let lineCount = 0
    let signSum = 0
    for (let i=0; i<points.length-1; i++) {
      let currPoint = points[i]
      let nextPoint = points[(i+1) % points.length]
      if (currPoint.x == nextPoint.x && currPoint.y == nextPoint.y) {
        continue
      }
      else {
        lineCount++
        let vectorA = {x: nextPoint.x - currPoint.x, y: nextPoint.y - currPoint.y}
        let vectorB = {x: point.x - currPoint.x, y: point.y - currPoint.y}
        let product = vectorA.x * vectorB.y - vectorB.x * vectorA.y
        signSum += Math.sign(product)
      }
    }
    if (Math.abs(signSum) == lineCount) {
      return true
    }
    else {
      return false
    }
  }
  public static checkEllipsesOverlap(ellipseOne, ellipseTwo) {
    // returns true if the two ellipse-surfaces overlap
    let intersection = Intersection.intersect(ellipseOne,ellipseTwo)
    if (intersection.status == 'Intersection') {
      return true
    }
    else {
      let rectangleOne = Shapes.rectangle(ellipseOne.args[0].x - ellipseOne.args[1], ellipseOne.args[0].y - ellipseOne.args[2], 2*ellipseOne.args[1], 2*ellipseOne.args[2])
      let rectangleTwo = Shapes.rectangle(ellipseTwo.args[0].x - ellipseTwo.args[1], ellipseTwo.args[0].y - ellipseTwo.args[2], 2*ellipseTwo.args[1], 2*ellipseTwo.args[2])
      if (this.checkPointInRectangle(ellipseOne.args[0], rectangleTwo) || this.checkPointInRectangle(ellipseTwo.args[0], rectangleOne)) {
        return true
      }
      return false
    }
  }
  public static checkPointInRectangle(point,rectangle) {
    if (rectangle.name != "Rectangle") {
      throw Error("DataService.checkPointInRectangle:ParameterNotRectangle")
    }
    if (Math.sign(rectangle.args[0].x - point.x) == Math.sign(rectangle.args[1].x - point.x)) {
      return false
    }
    if (Math.sign(rectangle.args[0].y - point.y) == Math.sign(rectangle.args[1].y - point.y)) {
      return false
    }
    return true
  }
  public static averagePoint(points) {
    let xSum = 0, ySum = 0
    for(let i=0; i<points.length; i++) {
      xSum += points[i].x
      ySum += points[i].y
    }
    return new Point2D(xSum/points.length, ySum/points.length)
  }
  public static distance(pointOne, pointTwo) {
    let xSquare = (pointOne.x - pointTwo.x) * (pointOne.x - pointTwo.x)
    let ySquare = (pointOne.y - pointTwo.y) * (pointOne.y - pointTwo.y)
    return Math.sqrt(xSquare + ySquare)
  }
  public static putInside(node, polygon) {
    //returns {x:xOffset, y:yOffset} to put node into polygon
    let x = node.x, y = node.y, width = node.style.width, height = node.style.height
    let nodeShape = Shapes.rectangle(x, y, width, height)
    let intersection = Intersection.intersect(nodeShape, polygon)
    if (intersection.status == 'Intersection') {
      let nodeCenter = new Point2D(node.x + node.style.width/2, node.y + node.style.height/2)
      let polygonPoints
      if (polygon.name == "Polygon") {
        polygonPoints = polygon.args[0]
      }
      else /*if (polygon.name == "Polyline)*/{
        polygonPoints = polygon.args[0].slice(0,-1)
      }
      let polygonCenter = this.averagePoint(polygonPoints)
      let distance = Math.sqrt((polygonCenter.x - nodeCenter.x)*(polygonCenter.x - nodeCenter.x) + (polygonCenter.y - nodeCenter.y)*(polygonCenter.y - nodeCenter.y))
      let directionVector = {x: (polygonCenter.x - nodeCenter.x)/distance, y:(polygonCenter.y - nodeCenter.y)/distance}
      let isInside = false
      let step = 10
      while(!isInside) {
        x += step * directionVector.x
        y += step * directionVector.y
        let rect = Shapes.rectangle(x, y, width, height)
        let inter = Intersection.intersect(rect, polygon)
        isInside = !(inter.status == 'Intersection')
      }
      x -= step * directionVector.x
      y -= step * directionVector.y
      step = 1
      while(!isInside) {
        x += step * directionVector.x
        y += step * directionVector.y
        let rect = Shapes.rectangle(x, y, width, height)
        let inter = Intersection.intersect(rect, polygon)
        isInside = !(inter.status == 'Intersection')
      }
      return {x: x - node.x, y: y - node.y}
    }
    else {
      console.log('This should not happen')
      return null
    }
  }

  public static copyToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    let result = false;
    try {
      result = document.execCommand('copy');
    } catch (err) {
      result = false;
    }
    document.body.removeChild(textArea);
    return result;
  }

  public static groupDataSet: any = {};
}

