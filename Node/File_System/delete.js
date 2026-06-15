//using callback function , asynchronously
const fs=require('fs');
fs.unlink('message.txt', function(err){
    if(err) console.log(err);
    else console.log("file deleted");       
});