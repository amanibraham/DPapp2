import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPatternPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-pattern',
  templateUrl: 'view-pattern.html',
})
export class ViewPatternPage {
  nav: any;
  pattern: any;
  DP: any[];

  patternInfo: string = "description";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav=navCtrl;
    this.pattern = navParams.get('pattern');
    this.DP =[] ;
    console.log("pattern"+this.pattern) ;

    if(this.pattern=='FontSizeLargeDP'){
      this.DP.push({

        "DPName": 'FontSizeLargeDP',   
        "Category": 'CustomizationDP',     
        "PatternGroup": 'FontSizeDP',     
        "Problem": 'User with LowVisionSevere need large FontSize',
        "Condition": 'User has LowVisionSevere ',
        "Solution": 'set large font size',
      
    }
    );
    }
    else  if(this.pattern=='FontSizeMediumDP'){
      this.DP.push({

        "DPName": 'FontSizeMediumDP',   
        "Category": 'CustomizationDP',
        "PatternGroup": 'FontSizeDP',
        "Problem": 'User with LowVisionMedium need medium FontSize',
        "Condition": 'User has Medium LowVision ',
        "Solution": 'set medium font size',
      
    }
    );
    }

    else  if(this.pattern=='AudioInputDP'){
      this.DP.push({

        "DPName": 'AudioInputDP',   
        "Category": 'InteractionDP',
        "PatternGroup": 'AudioInputDP',
        "Problem": 'User can not use interface element',
        "Condition": 'User has motorics disability or user has cognitive disability ',
        "Solution": 'Replace interface element with audio input',
      
    }
    );
    }


    else  if(this.pattern=='GalleryDP'){
      this.DP.push({

        "DPName": 'GalleryDP',   
        "Category": 'InteractionDP',
        "PatternGroup": 'GalleryDP',
        "Problem": 'User can not use interface element',
        "Condition": 'User has motorics disability or user has cognitive disability ',
        "Solution": 'Replace interface element with images',
      
    }
    );
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPatternPage');
  }

}
