import { Component } from '@angular/core';
//import { Injectable } from '@angular/core';

import { xml2js } from 'xml2js';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import * as test from '../epd/conv.js';
//import { toJson } from 'xml2json';
//import * as xml2js from "xml2js";

declare var cordova: any;


//declare var require: any;


//var converter = require('xml2js');


/**
 * emergenca page for home page
 * @param  {'page-espd'}  {selector   [description]
 * @param  {'epd.html'}} templateUrl [description]
 */

@Component({
  selector: 'page-epd',
  templateUrl: 'epd.html'
})




export class EpdPage {

  /**
   *
   */
  public xmlItems: any;
  public xmlDatapass;








  constructor(public nacCtrl: NavController) {
    //http: Http;
    //xml2js: xml2js;
  }


  /**
   * toggle the visibility of the langauges german an english
   * @param  {string} langShow the language to set visible
   * @param  {string} langHide the language to hide
   */

  changeLanguage(langShow: string, langHide: string) {
    document.getElementById(langShow).style.display = 'block';
    document.getElementById(langHide).style.display = 'none';
  }


  readXML() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.write(xmlData);
    this.xmlDatapass = xmlData;
  }
  

  convertXML() {  
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    xml2js.parseString(xmlData, function (result) {
    document.write(result);
    console.log(result);
    });
  }

 test(){
   test.test();
 }
}

/*
  //read local xml file and Write in document
  readXML() {
    var xml = new XMLHttpRequest();
    var xml2js = new xml2js();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseXML;
    var xmlData = xmlData.toS
    var jsonData = toJson(xmlData);
    document.write(jsonData);

    //var jsonData = converter(xmlData);
    //var beautifiedJson = JSON.stringify(jsonData, undefined, 4);
    //document.getElementById('jsonData').innerHTML = beautifiedJson;
  }


  myjson(){
    var req = this.http.get("my_link_for_xml");
    return req.map((res:Response) => {
    let c = res.text();
    let myJson = xml2js.xml_str2json(c);
    return myJson;
    });
    }

}




/*
converter(data: string): Object {

  let res;
  xml2js.parseString(data, { explicitArray: false});
  
  }

changeFile(){
  document.write(this.converter('assets/data/junior.xml'));
}


  //convert various xml into json 
  convertXMLToJson() {
    //return Promise.resolve(['This', 'That']);
    var xml = "<root>Hello xml2js!</root>"
    xml2js.parseString(xml);
    alert("parsing war erfolgreich!");
  }





Funktioniert
readXML() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.write(xmlData);
  }

      document.write("<table border='1'>");
    var x = xmlData.getElementsByTagName("")
    var i = 0;
    for (i = 0;i < x.length;i++)
    {
      document.write("<tr><td>");
      document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
      document.write("</tr>");
      document.write("</table>");
    }



  Do(target: string) {
    switch (target) {
      case 'XML':
        break;
      case 'JSON':
        break;
    }
  }


var Connect = new XMLHttpRequest();
Connect.open("GET", "assets/data/junior.xml", false);
Connect.setRequestHeader("Content-Type", "text/xml")
Connect.send(null);

var TheDocument = Connect.responseXML;
var Patient = TheDocument.childNodes[0];
for(var i = 0; i < Patient.children.length; i++)
{
  var Patient = Patient.children[i];
}





  public getRandomUser() {
    return this
      .http
      .get('https://randomuser.me/api/?format=xml', { responseType: "text" })      
      // use the pipe method
      .pipe(
        // ... to apply oprtators to obervables
        map((res: string) => this.transformProvider.convertToJson(res))
      )
      .subscribe((res: Object) => {
        // do whatever you wanna do with your data
        console.dir(res);
      });
  }


  GetXML() {
    this.http.get('assets/data/junior.xml').subscribe(data => {
        this.posts = JSON.stringify(data);
        console.log(typeof(this.posts));
        xml2js.parseString(this.posts, function (err, result) {
            console.log(result);
        });
    }, error => {
        console.log(JSON.stringify(error.json()));
    });
}



ionViewWillEnter()
{
   this.loadXML();
}

loadXML()
   {
      this.http.get('/assets/data/junior.xml')
      .map(res => res.text())
      .subscribe((data)=>
      {
         this.parseXML(data)
         .then((data)=>
         {
            this.xmlItems = data;
         });
      });
   }

   parseXML(data)
   {
      return new Promise(resolve =>
      {
         var k,
             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result)
         {
            var obj = result.comics;
            for(k in obj.publication)
            {
               var item = obj.publication[k];
               arr.push({
                  id           : item.id[0],
                  title        : item.title[0],
                  publisher : item.publisher[0],
                  genre        : item.genre[0]
               });
            }

            resolve(arr);
         });
      });
   }
   */


