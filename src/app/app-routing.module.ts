import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExaminationSetComponent} from './examination/examination-set/examination-set.component'
import {ExaminationTableComponent} from './examination/examination-table/examination-table.component'
import {ExaminationCalendarComponent} from './examination/examination-calendar/examination-calendar.component'

const routes: Routes = [
  {path: 'table', component: ExaminationTableComponent},
  {path: 'calendar', component: ExaminationCalendarComponent},
  {path: 'set', component: ExaminationSetComponent},
  {path: '**', redirectTo: '/set', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
