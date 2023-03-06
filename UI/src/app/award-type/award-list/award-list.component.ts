import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-view-award',
    templateUrl: './award-list.component.html',
    styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit {
    constructor(
        private router: Router,
        private awardTypeService: AwardTypeService,
        private alertController: AlertController
    ) {}

    awardTypeList: AwardType[] = [];
    
    ngOnInit() {
        this.getAllaward();
    }

    getAllaward() {
        this.awardTypeService.getAwardTypeList().subscribe((awardTypeList) => {
            this.awardTypeList = awardTypeList.reverse();
        });
        
    }

    createAward() {
        this.router.navigate(['/home/awardTypes/create']);
    }

    updateAward(award: AwardType) {
        this.alertController
            .create({
                header: 'Are you sure?',
                message: 'deactivate this award?',
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: () => {
                            award.awardStatus = 0;
                            this.awardTypeService.updateAwardType(award.id, award).subscribe();
                        },
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }
}
