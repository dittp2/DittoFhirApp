//used imports
//------------
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import * as convXMLToJson from '../epd/conv.js';

//unused imports
//--------------
//import { Injectable } from '@angular/core';
//import { xml2js } from 'xml2js';
//import { Http } from '@angular/http';
//import { toJson } from 'xml2json';
//import * as xml2js from "xml2js";

declare var cordova: any;


//declare var require: any;
//var converter = require('xml2js');


/**
 * epd page for home page
 * @param  {'page-epd'}  {selector   [description]
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
    //document.write(xmlData);
    console.dir(xmlData);
    document.getElementById('output').innerHTML = xmlData;
    this.xmlDatapass = xmlData;

  }
  
  convXMLToJson(){
    var result = convXMLToJson.convXMLToJson();
    return result; 
 }

sendToFhirConverter(){
  
}

}

/*
Funktioniert
readXML() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'assets/data/junior.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.write(xmlData);
}

//Funktioniert nicht wegen xml2js!
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

*/