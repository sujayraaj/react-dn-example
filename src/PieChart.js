import React, {Component} from 'react';
/*
class PieChart extends Component {
  render(){
    var pieArray =[ {color:'red',value:10,opacity:0.5},{color:'yellow',value:30,opacity:0.5},{color:'green',value:45,opacity:0.5},{color:'blue',value:5,opacity:0.5},{color:'purple',value:10,opacity:0.5}];
    var theta = 0, width=400, height=300,radius=100;
    var currentPos = [(width / 2 + (radius * (Math.sin(theta)))),
        (height / 2 - (radius * (Math.cos(theta))))
    ];
    toRender = pieArray.map(function(val,ind){
      theta += (val['value'] / 100) * 2 * Math.PI;
      var nextPos = [(width / 2 + (radius * (Math.sin(theta)))),
          (height / 2 - (radius * (Math.cos(theta))))
      ];
      var bigCurve = val['value'] > 180 ? 1 : 0;

      var mypath = <path d='M' {+width/ 2} {+height / 2} 'L' {currentPos[0]} {currentPos[1]} 'A' {radius} {radius} '0' {bigCurve} '1' {nextPos[0]} {nextPos[1]} 'L' {width / 2} {height / 2}  fill={val.color}  fill-opacity={val.opacity}/>;
      currentPos = nextPos;
      return mypath;

    });

    return (<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">


          </svg>
  )
  }
}

export default PieChart;
/*
"M' + (+width / 2) + ' ' + (+height / 2) + ' ' + 'L ' + currentPos[0] + ' ' + currentPos[1] + ' ' + 'A ' + radius + ' ' + radius + ' 0 ' + bigCurve + ' 1 ' + nextPos[0] + ' ' + nextPos[1] + ' ' + 'L ' + (width / 2) + ' ' + (height / 2) + ' " fill="' + pieArray[x]['color'] + '" fill-opacity="' + pieArray[x]['op'] + '" />'

/*
function createPie(svg, width, height, radius, pieArray) {
    var pathObj = {};
    var theta = 0;
    var currentPos = [(width / 2 + (radius * (Math.sin(theta)))),
        (height / 2 - (radius * (Math.cos(theta))))
    ];

    for (x in pieArray) {
        theta += (pieArray[x]['value'] / 360) * 2 * Math.PI;

        var nextPos = [(width / 2 + (radius * (Math.sin(theta)))),
            (height / 2 - (radius * (Math.cos(theta))))
        ];
        var bigCurve = pieArray[x]['value'] > 180 ? 1 : 0;
<path d=`M${+width/ 2} ${+height / 2} L ${currentPos[0]} ${currentPos[1]} A ${radius} ${radius} 0 ${bigCurve} 1 ${nextPos[0]} ${nextPos[1]} L ${width / 2} ${height / 2}`  fill=`${pieArray[x]['color']}`  fill-opacity=`${pieArray[x]['op']}`/>;
        currentPos = nextPos;
    }
}
createPie(svg, 400, 300, 100, pieArray);
*/
