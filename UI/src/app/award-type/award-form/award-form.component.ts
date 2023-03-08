import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-create-award',
    templateUrl: './award-form.component.html',
    styleUrls: ['./award-form.component.scss'],
})
export class AwardFormComponent implements OnInit {
    awardTypeList: AwardType[] = [];
    awardType: AwardType = {};
    errorMessage: string = '';
    flag : boolean = false;
    
    constructor(
        private router: Router,
        private awardTypeService: AwardTypeService,
        private route: ActivatedRoute,
        private alertController: AlertController
    ) {
        if(this.router.url=="/home/awardTypes/create"){
            this.flag=true;
        }
        else if(this.router.url=="/home/awardTypes/edit/award.id"){
            this.flag=false;
        }
    }


    numericOnly(event: { key: string }): boolean {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }

    createAward() {
        const today = new Date();
        this.awardType.createdDate = today;
        this.awardType.lastUpdatedDate = today;
        console.log(today);
 
        if (!this.awardType.awardName?.trim()) {
            this.showAlert('Award name cannot be empty!');
        } else if (this.awardType.awardPoints == null) {
            this.showAlert('Award points cannot be empty!');
        } else if (!this.awardType.description?.trim()) {
            this.showAlert('Award description cannot be empty!');
        } else {
            this.alertController
                .create({
                    header: 'Are you sure?',
                    message: 'create new award?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: () => {
                                this.awardTypeService.saveAwardType(this.awardType).subscribe(
                                    (data) => {
                                        (this.awardType = data),
                                            this.router.navigate(['/home/awardTypes']);
                                    },
                                    (err) => {
                                        (this.errorMessage = err.message),
                                            this.showAlert(this.errorMessage);
                                    }
                                );
                            },
                        },
                    ],
                })
                .then((res) => {
                    res.present();
                });
        }
    }

    showAlert(message: string) {
        this.alertController
            .create({
                header: 'Alert',
                message: message,
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }

    updateAward() {
        const today = new Date();
        this.awardType.lastUpdatedDate = today;
       
       

        if (!this.awardType.awardName?.trim()) {
            this.showAlert('Award name cannot be empty!');
        } else if (this.awardType.awardPoints == null) {
            this.showAlert('Award points cannot be empty!');
        } else if (!this.awardType.description?.trim()) {
            this.showAlert('Award description cannot be empty!');
        } else {
            this.alertController
                .create({
                    header: 'Are you sure?',
                    message: 'update award?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: () => {
                                this.awardTypeService
                                    .updateAwardType(this.awardType.awardId, this.awardType)
                                    .subscribe(
                                        (data) => {
                                            (this.awardType = data),
                                                this.router.navigate(['/home/awardTypes']);
                                        },
                                        (err) => {
                                            (this.errorMessage = err.message),
                                                this.showAlert(this.errorMessage);
                                        }
                                    );
                            },
                        },
                    ],
                })
                .then((res) => {
                    res.present();
                });
        }
    }

    ngOnInit() {
        const isIdPresent = this.route.snapshot.paramMap.has('awardId');
        if (isIdPresent) {
            const awardId = this.route.snapshot.paramMap.get('id');
            this.awardTypeService.getAwardType(awardId).subscribe((data) => {
                this.awardType = data;
            });
        }
    }

   
}
