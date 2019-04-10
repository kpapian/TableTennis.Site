import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-box-yes-no',
  templateUrl: './message-box-yes-no.component.html',
  styleUrls: ['./message-box-yes-no.component.scss']
})
export class MessageBoxYesNoComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() yesButtonText: string;
  @Input() noButtonText: string;
  messageBoxResult?: Subject<boolean> = undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeMessageBox(result: boolean) {
    if (result) {
      this.activeModal.close(result);
    } else {
      this.activeModal.dismiss();
    }
    if (this.messageBoxResult) {
      this.messageBoxResult.next(result);
      this.messageBoxResult.complete();
      this.messageBoxResult = undefined;
    }
  }
}
