'use strict';
module.exports = function() {
    
       var secretNumber = Math.floor((Math.random() * 1000000)+1);
       
       return function(){
        return secretNumber;
       };
};



 //This closes dakine.


/*'use strict';
module.exports = function() {
    


    var secretNumber = 0;
    var originalNumber = 0;
    var emptyArray = [];

    var secretNumberGenerator = (function(){

     if (emptyArray[0]===secretNumber){

     }else{
        secretNumber = Math.floor((Math.random() * 1000000)+1);
        emptyArray.push = secretNumber;
        return secretNumber;  
     }

    
    });

    return secretNumberGenerator;





}; //This closes dakine.
*/

/*'use strict';
module.exports = function() {
    


    var secretNumber = 0;
    var keepTrack = true;
    var originalNumber = 0;

    var secretNumberGenerator = (function(){

     //if (keepTrack){
         secretNumber = Math.floor(Math.random() * 1000000);
         originalNumber = secretNumber;
         keepTrack = false;
         return secretNumber;   
     //}
    });

    return secretNumberGenerator;
}; //This closes dakine.*/