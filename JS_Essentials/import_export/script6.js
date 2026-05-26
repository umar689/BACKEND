var data=require('./script5.js');

console.log(data);

//In this way, module.exports is used multiple times in a file to export multiple values. Each value is assigned to a property of the module.exports object. This allows you to export multiple values without having to group them together in an object. When you require the file, you can access each exported value using its corresponding property name.