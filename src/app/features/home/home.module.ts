import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRountingModule } from './home-routing.module';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent
  ],
  imports: [
    HomeRountingModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
