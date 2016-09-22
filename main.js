var i = 0;
var j = 0;
var n = 5;
var line = 0;
var spaceResult = "";
var starResult = "";
var space = " ";
var star = "*";
line = getLine(n);
drawPyramid(line);
function drawPyramid(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i; j++) {
            spaceResult = spaceResult + space;
        }
        for (j = 0; j < 2 * i + 1; j++) {
            starResult = starResult + star;
        }
        console.log(spaceResult + starResult);
        spaceResult = "";
        starResult = "";
    }
}
function getLine(line) {
    return line;
}
