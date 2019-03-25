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
import { ClientListComponent} from './clients/client-list/client-list.component';
import { ServicesComponent } from './services/services.component';
import { RequetesComponent } from './requetes/requetes.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { PostsComponent } from './posts/posts.component';
import { EmployesComponent } from './employes/employes.component';
import { RolesComponent } from './roles/roles.component';
import { EmployeListComponent } from './employes/employe-list/employe-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { CategoriesComponent } from './categories/categories.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { DiscussionListComponent } from './discussions/discussion-list/discussion-list.component';
import { RequeteListComponent } from './requetes/requete-list/requete-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
<<<<<<< HEAD
import { ChatsComponent } from './chats/chats.component';
import { PrivilegeListComponent } from './privileges/privilege-list/privilege-list.component';
import { ProjetComponent } from './projets/projet/projet.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { SlaListComponent } from './slas/sla-list/sla-list.component';
import { EntrepriseListComponent } from './entreprises/entreprise-list/entreprise-list.component';
=======
import { ChatComponent } from './chat/chat.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ElementslaListComponent } from './elementsslas/elementsla-list/elementsla-list.component';
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e

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
    path: 'userlist',
    component: UserListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'client',
    component: ClientsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'clientListe',
    component: ClientListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'service',
    component: ServicesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'servicelist',
    component: ServiceListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'requete',
    component: RequetesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'requetelist',
    component: RequeteListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'discussion',
    component: DiscussionsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'discussionlist',
    component: DiscussionListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'post',
    component: PostsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'postlist',
    component: PostListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'employe',
    component: EmployesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'employelist',
    component: EmployeListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'role',
    component: RolesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'rolelist',
    component: RoleListComponent,
    canActivate: [AfterLoginService]
  },
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
    component: ClientListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'service',
    component: ServicesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'servicelist',
    component: ServiceListComponent,
    canActivate: [AfterLoginService]
  },
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
  },
  {
    path: 'employelist',
    component: EmployeListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'role',
    component: RolesComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'entreprise',
    component: EntrepriseListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'categorie',
    component: CategoriesComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'chat',
    component: ChatsComponent,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'privileges',
    component: PrivilegeListComponent,
    canActivate: [AfterLoginService]
  },
  {
<<<<<<< HEAD
    path: 'projets',
    component: ProjetListComponent,
    canActivate: [AfterLoginService]
  }
=======
    path: 'projetlist',
    component: ProjetListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'slalist',
    component: ElementslaListComponent,
    canActivate: [AfterLoginService]
  },
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e

  ,
  {
    path: 'slas',
    component: SlaListComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
