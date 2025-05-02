import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { DiaryModule } from '@app/diary/diary.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    DiaryModule
  ]
})
export class HomeModule { }
