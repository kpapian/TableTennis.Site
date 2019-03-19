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

  constructor(private readonly equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe(
      (equipment: SpaEquipment[]) => {
        this.equipment = equipment;
      });
  }
}
