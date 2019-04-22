import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  orderNumber: string;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.orderNumber = this.route.snapshot.params['orderNumber'];

    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.orderNumber = params['orderNumber'];

    //   }
    // );
  }
}
