import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule, LoginComponent } from './shared';
import { LayoutsModule, FooterComponent, HeaderComponent} from './layouts';
import { AccountModule, RegisterComponent } from './account';
// import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes:Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
     path: '',
     component: LoginComponent
   }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    LayoutsModule,
    AccountModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],

  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
