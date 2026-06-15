//using callback function , asynchronously
const fs=require('fs');
fs.appendFile('message.txt', "\nwelcome to node js", function(err){
    if(err) console.log(err);
    else console.log("file updated");
});