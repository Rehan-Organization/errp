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
    constructor(private router: Router, private awardTypeservice: AwardTypeService,private alertController: AlertController) {}

    awardTypeList: AwardType[] = [];

    ngOnInit() {
        this.getAllaward();
    }

    getAllaward() {
        this.awardTypeservice
            .getAwardTypeList()
            .subscribe((awardTypeList) => {
              this.awardTypeList = awardTypeList
            });
    }

    createAward() {
        this.router.navigate(['/home/awardTypes/create']);
    }

    deactivateAward(award :AwardType) {

        this.alertController.create({
            header: 'Confirm Alert',
            message: 'Are you sure? you want to deactivate award?',
            buttons: [
              {
                text: 'Confirm',
                handler: () => {
                this.awardTypeservice.deactivateAwardType(award.id,award).subscribe();
                }
              },
              {
                text: 'Cancel',
              }
            ]
          }).then(res => {
            res.present();
          });
      
    }
}
