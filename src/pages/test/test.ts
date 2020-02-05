import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { ViewPatternPage } from './../../pages/view-pattern/view-pattern';
/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  nav: any;
  userCharacteristic: any;
  designInteraction: any;
  listDP: any;
  situation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.nav=navCtrl;
    this.userCharacteristic = navParams.get('item1');
    this.designInteraction = navParams.get('item2');
    console.log ("this.userCharacteristic "+this.userCharacteristic ); 
    this.listDP =[] ;

    if((this.userCharacteristic =='lowVision') && (this.designInteraction  =='fontSize')){

      console.log("if 1");

     // console.log(JSON.parse(data.body));
     this.listDP.push({
      
          "DPName": 'FontSizeLargeDP',
        
      },{
      
        "DPName": 'FontSizeMediumDP',
           
      },
      );
   
     console.log(this.listDP);


    }
    if(this.userCharacteristic =='motorDisability'){

      console.log("if 2");
      this.listDP.push({
      
        "DPName": 'AudioInputDP',
      
    },{
    
       "DPName": 'GalleryDP',
         
    },
    );
 
   console.log(this.listDP);

    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

    console.log("this.userCharacteristic"+this.userCharacteristic);
    console.log("this.designInteraction"+this.designInteraction);

 

  }


  SelectPattern(pattern){

    console.log('Select pattern button'+pattern);
    this.nav.push(ViewPatternPage ,{
      pattern: pattern   
      }); 

  }

}
