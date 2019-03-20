import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientListeComponent} from './clients/client-list/clo'
import { ServicesComponent } from './services/services.component';
import { RequetesComponent } from './requetes/requetes.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { PostsComponent } from './posts/posts.component';
import { EmployesComponent } from './employes/employes.component';
import { RolesComponent } from './roles/roles.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'client',
    component: ClientsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'clientListe',
    component: ClientListeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'service',
    component: ServicesComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'requete',
    component: RequetesComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'discussion',
    component: DiscussionsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'post',
    component: PostsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'employe',
    component: EmployesComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'role',
    component: RolesComponent,
    canActivate: [AfterLoginService]
  }
  ,

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
