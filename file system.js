var fs = require('fs');
fs.writeFile('myFirstFile.txt','Hello World',(err) =>{
    if (err) throw err;
    console.log('file created successfully')
})