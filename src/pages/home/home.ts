import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup} from '@angular/forms';


import {TestPage} from './../../pages/test/test';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: any;
  PatternForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    
    this.nav=navCtrl;

    this.PatternForm = formBuilder.group({  
      disability: '',
      task: '',
      interest: '',
      interactionIssue: 'none'
  
    });

}


  //function for view pattern
  onSubmit(value: any): void { 
    
    console.log("forms:: !!!"+ value.disability + "*****"+value.interactionIssue);
    this.nav.push(TestPage,{
      item1: value.disability,
      item2: value.interactionIssue
      }); 
    

  }

}
