'use strict';
module.exports = function() {
    


    var storedNum = 0;
    var keepNum = storedNum;

    var secretNumberGenerator = (function(){
     storedNum = Math.random() * 1000000;
     return storedNum;
    });

    return secretNumberGenerator;





}; //This closes dakine.