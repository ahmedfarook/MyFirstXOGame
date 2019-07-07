

function oddeven (number) {

    let value = number % 2;
    result = value !== 0 ? "oddnumber" : "evennumber";
    return result;
    
}

//document.getElementById(button[1]).textContent = "X"
//console.log(oddeven(7))


/*  let click = 100
 for ( var number =1  ; number <= click ; number++)

 {

    if ()


 }  */

//var doc = document.getElementById

/* var clickall= []

for (var num=0 ; num < 9 ;num++) {

    clickall.push(document.getElementById(button[num]).innerHTML)
} */

//Button 2
/* document.getElementById(button[1]).addEventListener('click' , function() {

    document.getElementById(button[1]).textContent = "X"

} ) */

//button Array (Actully this are IDs of Button defined in HTML)
var button = ["one","two","three","four","five","six","seven","eight","nine"]

/*Creating a funtion as not to repeat each time for every button
  ButtonNumber will be the input number whic
*/
function clicks(buttonnumber) {
    document.getElementById(button[buttonnumber]).addEventListener('click' , function (){
       
    if ("click" === document.getElementById(button[0]).innerHTML &&
        "click" === document.getElementById(button[1]).innerHTML &&
        "click" === document.getElementById(button[2]).innerHTML &&
        "click" === document.getElementById(button[3]).innerHTML &&
        "click" === document.getElementById(button[4]).innerHTML &&
        "click" === document.getElementById(button[5]).innerHTML &&
        "click" === document.getElementById(button[6]).innerHTML &&
        "click" === document.getElementById(button[7]).innerHTML &&
        "click" === document.getElementById(button[8]).innerHTML   
       ) 
     {document.getElementById(button[buttonnumber]).textContent = "X"}

    })

}

// For First X  this loop is created
 for (num=0 ; num < 9 ;num++) {
 clicks(num)
 console.log
} 
    //for any button
    document.getElementById("two").addEventListener('click', function() {

        var count = []
       for (num1 = 0; num1 < 9 ; num1++ ) {
        
        if ("X" === document.getElementById(button[num1]).innerHTML || 
            "O" === document.getElementById(button[num1]).innerHTML )
            {
               
                 count.push(document.getElementById(button[num1]).innerHTML)
            }
        

        }
        console.log(count.length)

         if (oddeven(count.length) === "oddnumber") {
        
            {document.getElementById("two").textContent = "O"}

         }



    })