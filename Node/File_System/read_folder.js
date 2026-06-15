//using callback function , asynchronously
const fs= require('fs');
fs.readdir('lolo', { withFileTypes: true },function(err, files){
    if(err) console.log(err);
    else console.log(files);
});