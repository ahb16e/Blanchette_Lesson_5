
function calculateCurrency(){
        /***********************************************************************************************  
        *   Purpose of the calculateCurrency method:  
        *   This method is executed when the 'Calculate' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the exchange rate for the selected country
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/


        /*******************************************************************************
         * Task 2:  DECLARE VARIABLES: 
         * 
         *          A few variables have been declared for you already:  exchangeRate,
         *          usdAmount, and country.  You will need to declare addional variables.
         *          Please use the existing variables as you complete the assignment.         
         *          
         *          You will neeed to declare variables for EACH country and assign each
         *          to that country's exchange rate. Also, declare other variables
         *          as needed!
         * 
         *          **Please review and use the existing variables!!**
         * 
         * HINT:    var AUD = 1.40885;  //declares Australian Dollar and assigns it to 
         *                              //that country's exchange rate.
         * 
         *                       INSERT YOUR CODE BELOW!
        *******************************************************************************/
        
         //This variable stores the result of the calculation
         var exchangeRate;
         
        //This variable stores the value retrieved from the textfield.
        var usdAmount = document.getElementById("usdAmount").value;
        
        
        //This variable stores the country the user selects from the dropdown menu.
        var country = document.getElementById("country").value;
        //["Australian Dollar (AUD)","Aruban Florin (AWG)", "Euro (EUR), British Pound (GBP)", "Canadian Dollar (CAD)","Chinese Yuan Renminbi (CNH)", "Danish Krone (DKK)", "Dominicar R. Peso (DOP)", "Hong Kong Dollar (HKD)", "Indian Rupee (INR)", "Israeli New Shekel (ILS)", "Japanese Yen (JPY)", "Mexican Peso (MXN)", "Russian Rouble (RUB)", "Saudi Riyal (SAR)"];        
        //This variable set the selected country name for printing purposes.
        var countryName;
        
        
        
        //-----
                         
        //-----
        //Complete this section to declare a variable and initialize the variable
        //to the exchange rate for each country
        //USE THE TABLE PROVIDED FOR VALUES!!!
        var AUD = 1.40885; //exchange rate for Austrialian Dollar
        var AWG = 1.78511;
        var EUR = .87878;
        var GBP = .77396;
        var CAD = 1.31101;
        var CNH = 6.94235;
        var DKK = 6.55547;
        var DOP = 49.5755;
        var HKD = 7.83772;
        var INR = 73.2146;
        var ILS = 3.70769;
        var JPY = 112.78;
        var MXN = 20.1973;
        var RUB = 65.6822;
        var SAR = 3.74972;
       
        
        /*******************************************************************************************
         * Task 3:  Calculate the exchange rate for each country using a selection statement.
         *          You are allowed to use either an if/else-if statement or a switch statement.
         *          In order to calculate the exchange rate, multiply the USD dollars by the 
         *          currency rate for that country (see example below).  
         * 
         *          Also, set the country name in each branch/case in the selection statement.
         * 
         * Hint 1: 
         *          Assume the user wants to convert 150.00 USD to Euros.  How is this calculated?
         * 
         *          Math statement:  150.00 USD  *   0.87007 (exchange rate for Euro)  =  130.510 
         * 
         *          JavaScript statement:  exchangeRate = usdAmount * EURO;
         * 
         * Hint 2:
         *          To set the country name, set the variable countryName to the abbreviation for
         *          that country.  This needs to be done in each braching statement.
         * 
         *          Ex.  countryName = "AUD";
         * 
         * 
         *                               INSERT YOUR CODE BELOW!
        *********************************************************************************************/
         
         //Calculate the exchange rate and set the country prefix using a selection statement
         
         // This will perform the conversion
         if (country=="0") {
             exchangeRate = usdAmount * AUD;
             countryName = "AUD";
             //return conversionAmount;
         } else if (country=="1"){
             exchangeRate = AWG * usdAmount;
             countryName= "AWG";
             //return conversionAmount;
         } else if (country=="2") {
             exchangeRate = EUR * usdAmount;
             countryName = "EUR";
             //return conversionAmount;
         } else if (country=="3") {
             exchangeRate = GBP;
             exchangeRate= GBP * usdAmount;
             countryName = "GBP";
             //return conversionAmount;
         } else if (country=="4") {
             exchangeRate = CAD * usdAmount;
             countryName = "CAD";
             //return conversionAmount;
         } else if (country=="5") {
             exchangeRate = CNH * usdAmount;
             countryName = "CNH";
             //return conversionAmount;
         } else if (country=="6") {
             exchangeRate = DKK * usdAmount;
             countryName = "DKK";
             //return conversionAmount;
         } else if (country=="7") {
             exchangeRate = DOP * usdAmount;
             countryName = "DOP";
             //return conversionAmount;
         } else if (country=="8") {
             exchangeRate = HKD * usdAmount;
             countryName = "HKP";
             //return conversionAmount;
         } else if (country=="9") {
             exchangeRate = HKD * usdAmount;
             countryName = "INR";
             //return conversionAmount;
         } else if (country=="10") {
             exchangeRate = ILS * usdAmount;
             countryName = "ILS";
             //return conversionAmount;
         } else if (country=="11") {
             exchangeRate = JPY * usdAmount;
             countryName = "JPY";
             //return conversionAmount;
         } else if (country=="12") {
             exchangeRate- MXN * usdAmount;
             countryName = "MXN";
             //return conversionAmount;
         } else if (country=="13") {
             exchangeRate= RUB * usdAmount;
             countryName ="RUB";
             //return conversionAmount;
         } else if (country=="14") {
             exchangeRate = SAR * usdAmount;
             countryName = "SAR";
             //return conversionAmount;
         }

          
        /**********************************************************************************************
         * Task 4:  PRINT THE CURRENCY EXCHANGE RATE INFORMATION TO THE HTML DOCUMENT: 
         * 
         *          Use the document.getElementById() to select the placeholder where
         *          the currency exchange rate will be displayed.  The id for the placeholder
         *          is:  "currencyExchangeInfo".  Use the innerHTML property to write
         *          to the placeholder located in the index.html file.  Lastly,
         *          assign this statement to the USD amount and the country's exchange rate.
         * 
         * HINT:    document.getElementById("currencyExchangeInfo").innerHTML = FINISH THIS STATEMENT!
         * 
         *                                INSERT YOUR CODE BELOW!
        ***********************************************************************************************/  
        document.getElementById('currencyExchangeInfo').innerHTML = "Selling" + usdAmount + "USD" + " Buys ====>" + exchangeRate + countryName;






      
}//end of calculateCurrency function  


             
function clearButton () {
        /***********************************************************************************************  
        *   Purpose of the clearButton() method:  
        *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
        *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
        *          the specified id and overwrite the existing values with the empty string ("") or a set value.  
        *          This clears out the results.
        ***********************************************************************************************/

        /*************************************************************************************************************
        * Task 5:  Add the additional code needed to remove the calculation results displayed on the HTML page AND
        *          removes the text from the textfield.
        * 
        *          Use the code below and the code from Lesson 4 Assignment for guidance on how to complete this section.  
        * 
        * Explanation of Code:  
        *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
        *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
        *          the specified id and overwrite the existing values with the empty string ("") or a set value.  
        *          This clears out the results.
        * 
        * HINT:    document.getElementById("currencyExchangeInfo").innerHTML = FINISH THIS STATEMENT!
        *          document.getElementById("usdAmount").value = FINISH THIS STATEMENT!
        * 
        *                                INSERT YOUR CODE BELOW!
        *************************************************************************************************************/            
                
        //This code resets the dropdown menu to "Australian Dollar (AUD)".
        document.getElementById("country").reset= "0";
        
        
        
        //Remove the text from the textfield
         document.getElementById("currencyExchangeInfo").innerHTML="";
        
        
        //Remove the currency exchange information from the document where the id is: "currencyExchangeInfo"
         document.getElementById("usdAmount").value="";

}//end of clearButton function
