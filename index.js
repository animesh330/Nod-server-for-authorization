// Require http header 
var http = require('http'); 
   
// Create server 
http.createServer(function (req, res) { 
  let buffer2 = Buffer.allocUnsafe(5);
 
let buffer1 = Buffer.from('Geeks');
 
for (let i = 0; i < 5; i++) {
 
    // Adds: 'a b c d e' as 97 98 99 100 101
    // are their respective ASCII values
    buffer2[i] = i + 97;
}
  
// Node.js program to demonstrate the    
// Buffer.alloc() Method 
  
// Allocate buffer of given size 
// using buffer.alloc() method 
var buf = Buffer.alloc(6, 'a'); 
   
// Prints <Buffer 61 61 61 61 61> 
console.log(buf); 
// Node.js program to demonstrate the    
// Buffer.alloc() Method 
  
// Allocate buffer of given size 
// using buffer.alloc() method 
var buf = Buffer.alloc(6, 'a'); 
   
// Prints <Buffer 61 61 61 61 61> 
console.log(buf); 
 
// Node.js program to demonstrate the    
// Buffer.alloc() Method 
  
// Allocate buffer of given size 
// using buffer.alloc() method 
var buf = Buffer.alloc(6, 'a'); 
   
// Prints <Buffer 61 61 61 61 61> 
console.log(buf); 
  
buffer2.copy(buffer1, 2);
 
// Prints 'Geabc' as the input buffer1
// carries 'Geeks' and we provided the
// targetStart index as 2
// so elements will replace the values in
// buffer1 starting from index 2
 
console.log(buffer1.toString());
    // HTTP Status: 200 : OK 
    // Content Type: text/html 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
      
    // Send the response body as "Hello World!"   
    res.end('Hello World!'); 
  
}).listen(8080); 

// buffer.js:831
//     throw new RangeError('Index out of range');
//     ^

// RangeError: Index out of range
//     at checkOffset (buffer.js:831:11)
//     at Buffer.readIntBE (buffer.js:938:5)
//     at Object. (/home/cg/root/8545664/main.js:8:17)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.runMain (module.js:604:10)
//     at run (bootstrap_node.js:389:7)