import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './users/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientService } from './clients/shared/client.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployesComponent } from './employes/employes.component';
import { EmployeComponent } from './employes/employe/employe.component';
import { EmployeListComponent } from './employes/employe-list/employe-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    ToolbarComponent,
    SidebarComponent,
    EmployesComponent,
    EmployeComponent,
    EmployeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [ClientService, UserService,JarwisService,ToastrService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
