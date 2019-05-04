import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SpaEquipment } from './spa-equipment.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    itemAdded = new Subject<string>();
    private readonly equipmentUrl = `/api/equipment`;

    constructor(private readonly http: HttpClient) { }

    getEquipment(): Observable<SpaEquipment[]> {
        return this.http.get<SpaEquipment[]>(this.equipmentUrl)
            .pipe(
                map(equipments => {
                    equipments.forEach(equipment => equipment.quantity = 1);
                    return equipments;
                })
            );
    }
}
