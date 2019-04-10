import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoachesComponent } from './coaches/coaches.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './utils/safe-html.pipe';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ItemComponent } from './order/item/item.component';
import { CartItemComponent } from './cart/cart.item/cart.item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanDeactivateGuardService } from './checkout/can-deactivate.guard.service';
import { MessageBoxYesNoComponent } from './message-box-yes-no/message-box-yes-no.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CoachesComponent,
    EquipmentComponent,
    ContactsComponent,
    SafeHtmlPipe,
    CartComponent,
    OrderComponent,
    ItemComponent,
    CartItemComponent,
    CheckoutComponent,
    MessageBoxYesNoComponent,
    ErrorPageComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot(appRouts),
    HttpClientModule,
  ],
  entryComponents: [MessageBoxYesNoComponent], /// why do we need to add this here?
  /// in case of dynamically loaded component and in order for a ComponentFactory to be generated,
  // the component must also be added to the module’s entryComponent
  providers: [CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
