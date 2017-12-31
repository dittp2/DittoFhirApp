var parseString = require('xml2js').parseString;


exports.test = function() {
   
    var xml = "<root>Hello xml2js!</root>"
    parseString(xml, function (err, result) {
        console.dir(result);
    });
}

//exports.test = test;

