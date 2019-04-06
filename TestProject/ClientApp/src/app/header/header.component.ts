import { Component } from '@angular/core';
import { EquipmentService } from '../equipment/equipment.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']

})
export class HeaderComponent {
    public isCollapsed = true;
    public itemCount = 0;

    constructor(private equipmentService: EquipmentService) {
        this.equipmentService.itemAdded.subscribe(() => this.itemCount++);
    }
}
