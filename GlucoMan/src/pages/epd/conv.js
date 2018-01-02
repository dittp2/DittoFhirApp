var parseString = require('xml2js').parseString;


exports.convXMLToJson = function() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;

    parseString(xmlData, function (err, result) {
    console.dir(result);
    var stringifiedResult = JSON.stringify(result);
    //document.write(stringifiedResult);
    document.getElementById('output').innerHTML = stringifiedResult;
    //document.write(result)
    //document.getElementById('output').nodeValue = result;
    //document.getElementById('output').innerHTML = result;
    
    });
}








