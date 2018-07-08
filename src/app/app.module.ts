import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WinnerComponent } from './winner/winner.component';
import { DriversComponent } from './drivers/drivers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes=[
  { path: 'drivers', component: DriversComponent},
  { path: 'winner', component: WinnerComponent},
  { path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    WinnerComponent,
    DriversComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  // export: [
  //   matSelect
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
