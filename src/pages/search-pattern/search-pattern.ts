import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';

import {ListPatternPage} from './../../pages/list-pattern/list-pattern';

/**
 * Generated class for the SearchPatternPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-pattern',
  templateUrl: 'search-pattern.html',
})
export class SearchPatternPage {

  nav: any;
  PatternForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.nav=navCtrl;
    this.PatternForm = formBuilder.group({  
      description1: '',
      description2: '',
      disability: '',
      task: '',
      interest: '',
      interactionIssue: 'none'
  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPatternPage');
  }

  onSubmit(value: any): void { 
    
    console.log("forms::"+ value.description1 + "*"+ value.description2 + "***"+ value.disability +"**"+value.interactionIssue);
    this.nav.push(ListPatternPage,{
      item1: value.disability,
      item2: value.interactionIssue
      }); 
    
  }


}
