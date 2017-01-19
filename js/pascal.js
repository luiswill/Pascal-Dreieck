/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

 function printPascal(lineId, targetId){
    var numOfLine = document.getElementById(lineId).value;
    var pascal = computePascalTriangel(numOfLine);
    var lineToAdd = "";
    for (var i = numOfLine - 1; i >= 0; i--){
        var lineToAdd = "&#160;".repeat((numOfLine - i) * 1.5);
        for (var j = 0; j <= i; j++){
            lineToAdd += pascal[i][j] + "&#160;";
        }
        document.getElementById(targetId).innerHTML = "</br>" + lineToAdd + document.getElementById(targetId).innerHTML;
    }
}
 */

/**
 * @param {string} lineId 
 * @param {string} targetId
 * */
function printPascal(lineId){
	
	document.getElementById("pascal3").append(lineId.toString());
	
	
};

/**

for (var i = lineId.length - 1; i >= 0; i--) {
		p += lineId[i].toString();	
	}
	document.getElementById("pascal3").append(p);


 * @param {integer} numOfLine 
 * @returns {array} a 2-Dimension Array, represents a Pascal Triangle.
 * */
function pascal(numLines){
  var numLines = document.getElementById("lines").value;
  var triangle = [
    [1]
  ],
  tier;

  for (var j = 0; j < numLines-1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
      
    }
    printPascal(triangle[j])
    tier.push(1);
    triangle.push(tier);

    
  }

  return triangle;
}









