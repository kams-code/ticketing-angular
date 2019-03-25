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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './services/service/service.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { RequetesComponent } from './requetes/requetes.component';
import { RequeteListComponent } from './requetes/requete-list/requete-list.component';
import { RequeteService } from './requetes/shared/requete.service';
import { RequeteComponent } from './requetes/requete/requete.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionComponent } from './discussions/discussion/discussion.component';
import { DiscussionListComponent } from './discussions/discussion-list/discussion-list.component';
import { DiscussionService } from './discussions/shared/discussion.service';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './posts/shared/post.service';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { EmployesComponent } from './employes/employes.component';
import { EmployeComponent } from './employes/employe/employe.component';
import { EmployeListComponent } from './employes/employe-list/employe-list.component';
import { RoleService } from './roles/shared/role.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EntrepriseComponent } from './entreprises/entreprise/entreprise.component';
import { EntrepriseListComponent } from './entreprises/entreprise-list/entreprise-list.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CategorieComponent } from './categories/categorie/categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { EntrepriseService } from './entreprises/shared/entreprise.service';
import { CategorieService } from './categories/shared/categorie.service';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatListComponent } from './chats/chat-list/chat-list.component';
import { ChatComponent } from './chats/chat/chat.component';
import { PrivilegeListComponent } from './privileges/privilege-list/privilege-list.component';
import { PrivilegeService } from './privileges/shared/privilege.service';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ProjetComponent } from './projets/projet/projet.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetService } from './projets/shared/projet.service';
import { SlaComponent } from './slas/sla/sla.component';
import { SlaListComponent } from './slas/sla-list/sla-list.component';
import { SlasComponent } from './slas/slas.component';
import { SlaService } from './slas/shared/sla.service';
import { FileSelectDirective } from 'ng2-file-upload';






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
    ServicesComponent,
    ServiceComponent,
    ServiceListComponent,
    RequetesComponent,
    RequeteComponent,
    RequeteListComponent,
    DiscussionsComponent,
    DiscussionComponent,
    DiscussionListComponent,
    PostsComponent,
    PostComponent,
    PostListComponent,
    RolesComponent,
    RoleComponent,
    RoleListComponent,
    EmployesComponent,
    EmployeComponent,
    EmployeListComponent,
    ToolbarComponent,
    SidebarComponent,
    EntreprisesComponent,
    EntrepriseComponent,
    EntrepriseListComponent,
    CategorieListComponent,
    CategorieComponent,
    CategoriesComponent,
    ChatsComponent,
    ChatListComponent,
    ChatComponent,
    PrivilegeListComponent,
    ProjetListComponent,
    ProjetComponent,
    ProjetsComponent,
    SlaComponent,
    SlaListComponent,
    SlasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  exports: [
    FileSelectDirective,
    FileDropDirective
 ],
  providers: [SlaService,ProjetService,PrivilegeService, CategorieService,EntrepriseService,RoleService, PostService, DiscussionService, RequeteService,
     ClientService, UserService, JarwisService, ToastrService, TokenService,
     AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
