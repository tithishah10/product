import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  { path: 'product', loadChildren: () => import('./components/product/product/product.module').then(m => m.ProductModule), canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
