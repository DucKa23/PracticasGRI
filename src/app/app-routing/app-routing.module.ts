import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { CalendarComponent } from '../pages/calendar/calendar.component';
import { ChecksComponent } from '../pages/checks/checks.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { EmployeesComponent } from '../pages/employees/employees.component';
import { TaskComponent } from '../pages/task/task.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { HolidaysComponent } from '../pages/holidays/holidays.component';




const routes: Routes = [
  {path: '',   redirectTo: '/profile', pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent},
  {path: 'checks', component: ChecksComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'task', component: TaskComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'holidays', component: HolidaysComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
