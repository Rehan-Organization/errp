import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

export abstract class BaseForm {

    protected location = inject(Location);
    protected ionRouterOutlet = inject(IonRouterOutlet);

    constructor() { }

    closeForm() {
        if (this.ionRouterOutlet && this.ionRouterOutlet.canGoBack()) {
            this.ionRouterOutlet.pop();
        } else {
            this.location.back();
        }
    }
}