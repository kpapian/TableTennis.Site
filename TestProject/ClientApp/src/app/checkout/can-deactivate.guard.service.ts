import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxYesNoComponent } from '../message-box-yes-no/message-box-yes-no.component';


export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

    constructor(private readonly modalService: NgbModal) { }

    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!component.canDeactivate()) {
            return true;
        }
        const messageBoxResult = new Subject<boolean>();
        const modalRef = this.modalService.open(MessageBoxYesNoComponent);
        modalRef.componentInstance.title = 'Are you sure?';
        modalRef.componentInstance.message = 'Are you sure you want to leave without placing order?';
        modalRef.componentInstance.yesButtonText = 'Yes';
        modalRef.componentInstance.noButtonText = 'Cancel';
        modalRef.componentInstance.messageBoxResult = messageBoxResult;
        return messageBoxResult.asObservable();
    }
}
