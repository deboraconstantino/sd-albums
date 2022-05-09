import { AlbumComponent } from './album/album.component';
import { AuthGuard } from './../../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'album/:id', component: AlbumComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRountingModule { }
