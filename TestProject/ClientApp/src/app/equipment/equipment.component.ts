import { Component, OnInit } from '@angular/core';
import { SpaEquipment } from './spa-equipment.model';
import { EquipmentService } from './equipment.service';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../cart/store/cart.actions';
import { CartState } from '../cart/store/cart-reducer';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipment: SpaEquipment[] = [];

  constructor(private readonly equipmentService: EquipmentService,
              private readonly store: Store<CartState>) {
    this.equipmentService.itemAdded.subscribe(
      (name: string) => alert('Item ' + name + ' was added to cart.'));
  }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe(
      (equipment: SpaEquipment[]) => {
        this.equipment = equipment;
      });
  }

  onAddToCart(item: SpaEquipment) {
    // logit to add the same item< quantity ++
    this.store.select('cartItems')
      .subscribe((cartItems) => {
        cartItems.items.find(x => x.id === item.id);
        // this.cartItemsCount = cartItems.items.length;
        // this.cartList = cartItems.items;
      });
    this.store.dispatch(new AddItemAction(item));
    this.equipmentService.itemAdded.next(item.equipmentName);
  }

  // foo() {
  //   this.equipmentService.itemAdded.subscribe(
  //     (name: string) => alert('Item ' + name + ' was added to cart.'));
  // }
}
