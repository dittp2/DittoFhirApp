var parseString = require('xml2js').parseString;


//Get junior.xml file and converts it into json
//turns json object into a string and prints it out in the 'output' div container
exports.convXMLToJson = function() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;

    parseString(xmlData, function (err, result) {
    //console.dir(result);
    var stringifiedResult = JSON.stringify(result, null, "\t");
    var stringifiedResult = JSON.stringify(stringifiedResult, null, 1);
    //document.write(stringifiedResult);
    document.getElementById('output').innerHTML = stringifiedResult;
    console.dir(xmlData);
    //document.write(result)
    //document.getElementById('output').nodeValue = result;
    //document.getElementById('output').innerHTML = result;
    
    });
}








