import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPatternPage } from './add-pattern';

@NgModule({
  declarations: [
    AddPatternPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPatternPage),
  ],
})
export class AddPatternPageModule {}
