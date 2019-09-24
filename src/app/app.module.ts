import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ExaminationSetComponent } from './examination/examination-set/examination-set.component';
import { ExaminationTableComponent } from './examination/examination-table/examination-table.component';
import { ExaminationCalendarComponent } from './examination/examination-calendar/examination-calendar.component';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ExaminationEditorComponent } from './examination/examination-editor/examination-editor.component';
import { ExaminationFormComponent } from './examination/examination-form/examination-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExaminationSetComponent,
    ExaminationTableComponent,
    ExaminationCalendarComponent,
    ExaminationEditorComponent,
    ExaminationFormComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    RxReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
