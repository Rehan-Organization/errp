import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit {

  constructor(private router:Router) { }

  choosenOption = "My Awards"
  ngOnInit() {}

  raiseAward(){
    this.router.navigate(['/home/myAwards/raiseAward'])
  }

}
