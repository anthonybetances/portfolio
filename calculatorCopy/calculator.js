//add click listener
 document.getElementById('add').onclick=addTwoNums
//sub click listener
 document.getElementById('sub').onclick=subTwoNums
//multi click listener
 document.getElementById('multi').onclick=multiTwoNums
//divid click listener
 document.getElementById('divide').onclick=divideTwoNums




//function add
 function addTwoNums(){
 //get value from first input
 let val01= parseFloat(document.getElementById("leftInput").value)
 // get value from second input
 let val02 = parseFloat(document.getElementById("rightInput").value)
 //add values
  let sum = val01 + val02
 //update the dom with sum
  document.getElementById('result').innerHTML = sum
  document.getElementById('sass').innerHTML = "You're Welcome."
 }

 //function subtract
  function subTwoNums(){
  //get value from first input
   let val01= parseFloat(document.getElementById("leftInput").value)
  // get value from second input
   let val02 = parseFloat(document.getElementById("rightInput").value)
  //subtract values
   let sum = val01 - val02
  //update the dom with sum
   document.getElementById('result').innerHTML = sum
   document.getElementById('sass').innerHTML = "You're Welcome."
  }

  //function multiply
   function multiTwoNums(){
   //get value from first input
    let val01= parseFloat(document.getElementById("leftInput").value)
   // get value from second input
    let val02 = parseFloat(document.getElementById("rightInput").value)
   //subtract values
    let sum = val01 * val02
   //update the dom with sum
    document.getElementById('result').innerHTML = sum
    document.getElementById('sass').innerHTML = "You're Welcome."
   }

   //function divide
    function divideTwoNums(){
    //get value from first input
     let val01= parseFloat(document.getElementById("leftInput").value)
    // get value from second input
     let val02 = parseFloat(document.getElementById("rightInput").value)
    //subtract values
     let sum = val01 / val02
    //update the dom with sum
     document.getElementById('result').innerHTML = sum
     document.getElementById('sass').innerHTML = "You're Welcome."
    }
