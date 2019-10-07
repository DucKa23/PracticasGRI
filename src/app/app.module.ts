import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
 
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormLoginComponent } from './form-login/form-login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TaskComponent } from './pages/task/task.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChecksComponent } from './pages/checks/checks.component';
import { MainNavComponent } from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    SidebarComponent,
    ProfileComponent,
    TaskComponent,
    HolidaysComponent,
    StatisticsComponent,
    EmployeesComponent,
    CalendarComponent,
    ChecksComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    FontAwesomeModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
