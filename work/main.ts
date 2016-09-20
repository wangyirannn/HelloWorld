 var i : number = 0;
 var j : number = 0;
 var n : number = 5;
 var line : number = 0;
 
 var spaceResult = "";
 var starResult = "";
 var space = " ";
 var star = "*";


 line = getLine(n);
 drawPyramid(line);



 function drawPyramid(n : number) : void{
     for(i = 0 ; i < n; i++){
         for(j = 0; j < n - i; j++){
             spaceResult = spaceResult + space;
         }
         for(j = 0; j < 2 * i + 1; j++){
             starResult = starResult + star;
         }
         console.log(spaceResult + starResult);
         spaceResult = ""
         starResult = ""
     }
 }


//确实是函数决定金字塔多少行...但不是从键盘输入的...并不会从键盘上输入....
 function getLine(line : number) : number{
     return line;
 }
