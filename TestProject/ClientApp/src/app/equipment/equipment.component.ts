import { Component, OnInit } from '@angular/core';
import { SpaEquipment } from './spa-equipment.model';
import { EquipmentService } from './equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipment: SpaEquipment[] = [];

  constructor(private readonly equipmentService: EquipmentService) {
    this.equipmentService.itemAdded.subscribe(
      (name: string) => alert('Item ' + name + ' was added to cart.'));
  }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe(
      (equipment: SpaEquipment[]) => {
        this.equipment = equipment;
      });
  }

  onAddToCart(item: any) {
    this.equipmentService.itemAdded.emit(item.equipmentName);
  }

  // foo() {
  //   this.equipmentService.itemAdded.subscribe(
  //     (name: string) => alert('Item ' + name + ' was added to cart.'));
  // }
}
