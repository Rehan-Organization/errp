import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';

@Component({
    selector: 'app-view-award',
    templateUrl: './award-list.component.html',
    styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit {
    constructor(private router: Router, private awardtypeservice: AwardTypeService) {}

    awardTypeList: AwardType[] = [];

    ngOnInit() {
        this.getAllaward();
    }

    getAllaward() {
        this.awardtypeservice
            .getAwardTypeList()
            .subscribe((awardTypeList) => {
              this.awardTypeList = awardTypeList
            });
    }

    createAwards() {
        this.router.navigate(['/home/awardTypes/create']);
    }
}
