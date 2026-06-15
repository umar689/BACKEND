//using callback function , asynchronously
const fs= require('fs');
fs.rm('lolo/c', { recursive: true },function(err){
    if(err) console.log(err);
    else console.log("folder deleted"); 
});