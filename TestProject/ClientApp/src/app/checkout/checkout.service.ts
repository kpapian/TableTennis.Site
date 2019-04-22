import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpaOrder } from './spa-order.model';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    private readonly orderUrl = () => `/api/checkout/order`;

    constructor(private readonly http: HttpClient) { }

    createOrder(orderData: SpaOrder): Observable<string> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<string>(this.orderUrl(), JSON.stringify(orderData),
            { headers });
    }
}
