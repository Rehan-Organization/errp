import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-award',
  templateUrl: './view-award.component.html',
  styleUrls: ['./view-award.component.scss'],
})
export class ViewAwardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  createAwards(){
    this.router.navigate(['/home/awardTypes/create'])
  }

}
