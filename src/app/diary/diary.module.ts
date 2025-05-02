import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from '@app/diary/diary.component';
import { EntryItemComponent } from '@app/diary/entry-item/entry-item.component';
import { ListEntriesComponent } from '@app/diary/list-entries/list-entries.component';
import { NewItemButtonComponent } from '@app/diary/new-item-button/new-item-button.component';
import { NewEntryFormTemplateComponent } from './new-entry-form-template/new-entry-form-template.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiaryComponent,
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent,
    NewEntryFormTemplateComponent,    
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    DiaryComponent
  ]
})
export class DiaryModule { }
