import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { SuperTabsComponent } from 'ionic2-super-tabs';

import { HomePage } from '../home/home';
import {AddPatternPage } from '../add-pattern/add-pattern';
import {SearchPatternPage } from '../search-pattern/search-pattern';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  pages = [
    { pageName: SearchPatternPage, title: 'Search Design Patterns', icon: 'search', id: 'searchTab'},
    { pageName: AddPatternPage, title: 'Add New Design Patterns', icon: 'add', id: 'addTab'}
  ];
  selectedTabIndex = 0;
 
  @ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  onTabSelect(ev: any) {
      this.selectedTabIndex = ev.index;
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  
  



}
