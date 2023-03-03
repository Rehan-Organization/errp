import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputCustomEvent } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-achievement-form',
  templateUrl: './achievement-form.component.html',
  styleUrls: ['./achievement-form.component.scss'],
})
export class AchievementFormComponent implements OnInit {

  // achievementForm= new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl('')
  // })
  // public message = "Warning";
  constructor() { }

  ngOnInit() {
    
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength}/${maxLength}`;
  }

  asInputCustomEvent(event: Event) {
    return event as InputCustomEvent;
  }
  
  onInputChange(inputEvent: InputCustomEvent) {
    console.log(inputEvent.detail.value);
  }

  onKeyPress(event: any) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode == 32 || event.keyCode == 46) {
        return true
    }
    else {
        return false
    }
  }


}
