var parseString = require('xml2js').parseString;


exports.test = function() {
   // var xmlData =  `<?xml version=1.0?>
   // <Company root=\"1.3.6.1.4.1.19376.1.5.3.1.1.1\"><Employee><FirstName>Tanmay</FirstName><LastName>Patil</LastName><ContactNo>1234567890</ContactNo><Email>tanmaypatil@xyz.com</Email><Address><City>Bangalore</City><State>Karnataka</State><Zip>560212</Zip></Address></Employee></Company>`;
    
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;

    parseString(xmlData, function (err, result) {
    console.dir(result);
    });
}

//exports.test = test;







