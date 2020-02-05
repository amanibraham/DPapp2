import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPatternPage } from './search-pattern';

@NgModule({
  declarations: [
    SearchPatternPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPatternPage),
  ],
})
export class SearchPatternPageModule {}
