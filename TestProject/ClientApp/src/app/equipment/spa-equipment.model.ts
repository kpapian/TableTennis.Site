export class SpaEquipment {
    id: number;
    equipmentName: string;
    price?: number;
    imageReference?: string;
    quantity?: number;

    constructor() {
        this.id = 0;
        this.equipmentName = '';
        this.price = 0;
        this.imageReference = '';
        this.quantity = 1;
    }
}
