import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpaEquipment } from './spa-equipment.model';
import { EquipmentService } from './equipment.service';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../cart/store/cart.actions';
import { CartState } from '../cart/store/cart.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit, OnDestroy {

  equipment: SpaEquipment[] = [];
  itemAddedSubscription!: Subscription;

  constructor(private readonly equipmentService: EquipmentService,
              private readonly store: Store<CartState>) {
    this.itemAddedSubscription = this.equipmentService.itemAdded.subscribe(
      (name: string) => alert('Item ' + name + ' was added to cart.'));
  }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe(
      (equipment: SpaEquipment[]) => {
        this.equipment = equipment;
      });
  }

  onAddToCart(item: SpaEquipment) {
    this.store.dispatch(new AddItemAction(item));
    this.equipmentService.itemAdded.next(item.equipmentName);
  }

  ngOnDestroy()  {
    this.itemAddedSubscription.unsubscribe();
  }
}
