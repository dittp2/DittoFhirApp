//used imports
//------------
import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import * as convXMLToJson from '../epd/conv.js';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

//unused imports
//--------------
//import { Injectable } from '@angular/core';
//import { xml2js } from 'xml2js';
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


  constructor(public navCtrl: NavController, public http: Http, public storage: Storage) {
    this.http = http;
    this.navCtrl = navCtrl;

    //xml2js: xml2js;
  }


  /**
   * toggle the visibility of the langauges german an english
   * @param  {string} langShow the language to set visible
   * @param  {string} langHide the language to hide
   * @param  {Storage} 
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

  //Converts xml to json
  convXMLToJson() {
    var result = convXMLToJson.convXMLToJson();
    return result;
  }

  sendToFhirConverter(xmlData) {
    var url = "http://localhost:8080/Measurement";
    this.http.post(url, xmlData)
      .subscribe(xmlData => {
        this.xmlDatapass.responseText = xmlData["_body"];
        console.log(xmlData);
      }, error => {
        console.log("oops");
      });
  }
}

/*

openMIDATAImport() {
    let actionSheet = this.actionSheetCtrl.create({});
    actionSheet.setTitle('MIDATA Import');
    actionSheet.addButton({
      text: 'Alle',
      icon: 'filing',
      handler: () => {
        // if storage is ready to use
        this.storage.ready().then(() => {
          // get all chronic medis
          this.storage.get('chronicMedis').then((val) => {
            if (val)
              this.medis1 = val;
          });
          this.storage.get('selfMedis').then((val) => {
            if (val)
              this.medis2 = val;
          });
          this.storage.get('insulin').then((val) => {
            if (val)
              this.medis3 = val;
          });
          this.storage.get('intolerances').then((val) => {
            if (val)
              this.medis4 = val;
            this.saveMIDATAMedications();
          });
          this.storage.get('glucoseValues').then((val) => {
            if (val)
              this.glucose = val;
          });
          this.storage.get('bpValues').then((val) => {
            if (val)
              this.bp = val;
          });
          this.storage.get('pulseValues').then((val) => {
            if (val)
              this.pulse = val;
          });
          this.storage.get('weightValues').then((val) => {
            if (val)
              this.weight = val;
            this.saveMIDATAObservations({});
          });
        });
      }
    });
    actionSheet.addButton({
      text: 'Medikamente',
      icon: 'medkit',
      handler: () => {
        // if storage is ready to use
        this.storage.ready().then(() => {
          // get all chronic medis
          this.storage.get('chronicMedis').then((val) => {
            if (val)
              this.medis1 = val;
          });
          this.storage.get('selfMedis').then((val) => {
            if (val)
              this.medis2 = val;
          });
          this.storage.get('insulin').then((val) => {
            if (val)
              this.medis3 = val;
          });
          this.storage.get('intolerances').then((val) => {
            if (val)
              this.medis4 = val;
            this.saveMIDATAMedications();
          });
        });
      }
    });


  }


//Funktioniert
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