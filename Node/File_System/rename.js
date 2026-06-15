//using callback function , asynchronously
const fs = require('fs');

fs.rename('message.txt', 'greeting.txt', function(err){
    if(err) console.log(err);
    else console.log("file renamed");
}); 