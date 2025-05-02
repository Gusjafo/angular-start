import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { DiaryComponent } from '@app/diary/diary.component';
import { EntryItemComponent } from '@app/diary/entry-item/entry-item.component';
import { ListEntriesComponent } from '@app/diary/list-entries/list-entries.component';
import { NewItemButtonComponent } from '@app/diary/new-item-button/new-item-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    DiaryComponent,
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
