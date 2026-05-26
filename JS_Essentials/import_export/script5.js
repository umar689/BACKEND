var a=1;
var b=2;
module.exports.a=a;
module.exports.b=b;
//in this way module.exports is used multiple times in a file to export multiple values. Each value is assigned to a property of the module.exports object. This allows you to export multiple values without having to group them together in an object.