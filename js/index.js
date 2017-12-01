
var keys = document.querySelectorAll('#calculator span');
var ops = ['+','-','x','÷'];
var added = false;
for (var i = 0; i < keys.length;i++){
 keys[i].onclick = function(e){
   var display = document.querySelector('.screen');
   var inputVal = display.innerHTML;
   var btnVal = this.innerHTML;   
  
   
   if (btnVal == 'C'){
     display.innerHTML = '';added = false;
   }
   else if(btnVal =='='){   
     
     var equation = inputVal;     
     var lastChar = equation[equation.length - 1];
     
     
     if (ops.indexOf(lastChar) == -1 || lastChar == '.'){
         equation = equation.replace(/x/g,'*').replace(/÷/g,'/');
        if (lastChar == '.'){
          equation = equation.replace(/.$/g,'');          
        }
       
       if(equation){
         display.innerHTML = eval(equation);
         added = true;
         
       }   
      
     }
     
   } else if(ops.indexOf(btnVal) > -1){       
     
      lastChar = inputVal[inputVal.length - 1];
     //console.log(inputVal);
     if (ops.indexOf(lastChar) == -1 && inputVal !== '' && lastChar !=='.'){ 
      if(added == true){display.innerHTML= '';added = false;} else {display.innerHTML += btnVal;}      
             
     } else if (inputVal == '' && btnVal == '-'){
       
       display.innerHTML += btnVal;
     }   
      
   
   } else if(btnVal =='.'){
      lastChar = inputVal[inputVal.length - 1];
      if (ops.indexOf(lastChar) == -1 && lastChar !== '.' && inputVal.indexOf('.') == -1){
        if(added || inputVal == ''){
          display.innerHTML = '0' + btnVal; added = false;
            } else {display.innerHTML += btnVal;}      
                     
     
     } 
     
  } else {
     if(added == true){display.innerHTML = ''; added = false;}
       
       display.innerHTML += btnVal;       
      
   // added
  }
      
   e.preventDefault();
 }
}