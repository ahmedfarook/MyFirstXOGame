
// Awesome Simple function created for finding odd and even numbers...
function oddeven (number) {

    let value = number % 2;
    result = value !== 0 ? "oddnumber" : "evennumber";
    return result;
    
}


var button = ["one","two","three","four","five","six","seven","eight","nine"]

/*Creating a funtion as not to repeat each time for every button
  ButtonNumber will be the input number whic
*/
function clicks(buttonnumber) {
    document.getElementById(button[buttonnumber]).addEventListener('click' , function (){
        
            var count = []
            //loop created to check the values in button and if no x and o found the value of count will be 0
            //if out of nine button , 1 button has a value of X or O then Count will be 1 the odd and even function will start
            for (num1 = 0; num1 < 9 ; num1++ ) 
            {
                if ("X" === document.getElementById(button[num1]).innerHTML || 
                    "O" === document.getElementById(button[num1]).innerHTML )
                   {count.push(document.getElementById(button[num1]).innerHTML)}    
            }
              
            console.log(count.length)
    
            if (oddeven(count.length) === "oddnumber") {
            
                {
                    if ("click" === document.getElementById(button[buttonnumber]).textContent)
                    {document.getElementById(button[buttonnumber]).textContent = "O"}
                }
    
             }
    
            else {document.getElementById(button[buttonnumber]).textContent = "X"}
    })

}

// For First X  this loop is created  and Function Click is called when the button is pressed
    for (num=0 ; num < 9 ;num++) 
    {
        clicks(num)
    } 

   