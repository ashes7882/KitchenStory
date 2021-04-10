import { SuccessComponent } from './success/success.component';
import { PaymentComponent } from './payment/payment.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'items', component:ItemsComponent},
  {path:'payment', component:PaymentComponent},
  {path:'success', component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
