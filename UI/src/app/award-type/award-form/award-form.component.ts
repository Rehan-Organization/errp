import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { parse } from 'path';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';

@Component({
  selector: 'app-create-award',
  templateUrl: './award-form.component.html',
  styleUrls: ['./award-form.component.scss'],
})
export class AwardFormComponent implements OnInit {

  
  awardType : AwardType = {}

  constructor(private router: Router, private awardtypeservice: AwardTypeService, private route: ActivatedRoute) { 
    
  }



  createAward()
  {   
       
      const today= new Date();
      this.awardType.createdDate = today;
      this.awardType.lastUpdatedDate = today;
      console.log(this.awardType)
      this.awardtypeservice.saveAwardType(this.awardType).subscribe(data => {console.log(data)}) 
      this.router.navigate(['/home/awardTypes'])
  }


  ngOnInit() 
  {

    // this.awardTypeList = (this.route.snapshot.paramMap.get('awardtype')!)
    
  }

}
