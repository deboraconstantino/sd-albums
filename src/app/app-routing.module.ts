import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
