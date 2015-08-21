var swig  = require('swig');
var template = swig.compileFile('./template.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});

console.log(output);