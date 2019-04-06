import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    templateUrl: './item.component.html',
    selector: 'app-item'
})
export class ItemComponent implements OnInit {
    // @Input()
    // public index: number;

    @Output() totalChanged: EventEmitter<number> = new EventEmitter<number>();
    total: number;
    price = 0;
    count = 0;

    // @Input()
    // public shouldBeHidden: boolean;
    // @Output()
    // public quantityChanged: EventEmitter<number> = new EventEmitter<number>();

    // public itemName: string;

    public ngOnInit(): void {
        // this.itemName = `item_${this.index}`;
    }

    // public onQuantityChanged(event: KeyboardEvent): void {
    // this.quantityChanged.emit((event.target as HTMLInputElement).valueAsNumber);
    // }

    onTotalChanged(): void {
        this.total = this.price * this.count;
        this.totalChanged.emit(this.total);
    }
}
