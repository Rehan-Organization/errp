import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-award',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  createAwards(){
    this.router.navigate(['/home/awardTypes/create'])
  }

}
