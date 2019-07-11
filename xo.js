
// Awesome Simple function created for finding odd and even numbers...
function oddeven (number) {

    let value = number % 2;
    result = value !== 0 ? "oddnumber" : "evennumber";
    return result;
    
}

var comb = ["012","345","678","036","147","258","246","048"]

var button = ["one","two","three","four","five","six","seven","eight","nine"]



function draw() {

    
    if  (
            
            document.getElementById(button[0]).innerHTML !== "click" &&
            document.getElementById(button[1]).innerHTML !== "click" &&
            document.getElementById(button[2]).innerHTML !== "click" &&
            document.getElementById(button[3]).innerHTML !== "click" &&
            document.getElementById(button[4]).innerHTML !== "click" &&
            document.getElementById(button[5]).innerHTML !== "click" &&
            document.getElementById(button[6]).innerHTML !== "click" &&
            document.getElementById(button[7]).innerHTML !== "click" &&
            document.getElementById(button[8]).innerHTML !== "click" 
        ) 
        {
        console.log("Hi")
        document.getElementById("EndGame").style.visibility = 'visible'
        document.getElementById("EndGame").textContent = "You Both are Genious Try one more time"

        }       
 

}
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
            //if value is ODD then it will be O and and if the value is EVEN it will be X    
            if (oddeven(count.length) === "oddnumber") 
            {
                  if ("click" === document.getElementById(button[buttonnumber]).textContent)
                    {
                        document.getElementById(button[buttonnumber]).style.fontSize = "32px";
                        document.getElementById(button[buttonnumber]).textContent = "O"
                       
                        // Result combination green
                        for (n=0 ; n < comb.length ; n++) {
                                          
                            if ("O" === document.getElementById(button[comb[n][0]]).innerHTML &&
                                "O" === document.getElementById(button[comb[n][1]]).innerHTML &&
                                "O" === document.getElementById(button[comb[n][2]]).innerHTML 
                                ) 
                                {
                                document.getElementById(button[comb[n][0]]).style.backgroundColor = "darkgreen"
                                document.getElementById(button[comb[n][1]]).style.backgroundColor = "darkgreen"
                                document.getElementById(button[comb[n][2]]).style.backgroundColor = "darkgreen"

                                document.getElementById("EndGame").style.visibility = 'visible'
                                document.getElementById("EndGame").textContent = "You OutPerformer Smart Guy Won The Game"
                                        //Disable all the button after the Player wins
                                        for(i=0 ; i < 9 ; i ++) 
                                        {
                                        document.getElementById(button[i]).disabled = true
                                        }
                                }
                            
                                                                             
                        }
                        
                    }
                            
             }

            else if (oddeven(count.length) === "evennumber")
            {
               //if is used to avoid double click
              
               if ("click" === document.getElementById(button[buttonnumber]).innerHTML)
              {
                    document.getElementById(button[buttonnumber]).style.fontSize = "32px";
                    document.getElementById(button[buttonnumber]).style.color = "black";
                    document.getElementById(button[buttonnumber]).textContent = "X"
                    
                 
                //finding result combinations and marking the same as green
                // first i have stored all the possible combinations in COMB variable as an array
                //As comb.length is 8 and each data in array has 3 values i ran the below loop looks complicated but will try to simplyfy
                    for (n=0 ; n < comb.length ; n++) {
                                       
                        if ("X" === document.getElementById(button[comb[n][0]]).innerHTML &&
                           "X" === document.getElementById(button[comb[n][1]]).innerHTML &&
                           "X" === document.getElementById(button[comb[n][2]]).innerHTML 
                            ) 
                            {
                            document.getElementById(button[comb[n][0]]).style.backgroundColor = "darkgreen"
                            document.getElementById(button[comb[n][1]]).style.backgroundColor = "darkgreen"
                            document.getElementById(button[comb[n][2]]).style.backgroundColor = "darkgreen"
                            
                            document.getElementById("EndGame").style.visibility = 'visible'
                            document.getElementById("EndGame").textContent = "X-tra Smart.. You Won The Game"

                            
                            //Disable all the button after the Player wins
                            for(i=0 ; i < 9 ; i ++) {
                            document.getElementById(button[i]).disabled = true
                            }
                            }
                            
                                            
                    } // for is ending
                    //Draw Funntion will check there is a draw ornot
                    
                    draw()
                    
               }  //closing if
               
              
            }

            
    })

}




// For First X  this loop is created  and Function Click is called when the button is pressed
    for (num=0 ; num < 9 ;num++) 
    {
        clicks(num)
        
    } 



