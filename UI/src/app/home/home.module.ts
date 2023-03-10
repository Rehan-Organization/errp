import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule.forRoot(), HomePageRoutingModule],
    declarations: [HomePage],
})
export class HomePageModule {}
