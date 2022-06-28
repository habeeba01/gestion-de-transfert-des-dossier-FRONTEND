import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './auth/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { LogoutComponent } from './auth/logout/logout.component';
;
import { ArchiveComponent } from './pages/archive/archive.component';
import { ListeusersComponent } from './pages/listeusers/listeusers.component';
import { NewuserComponent } from "./pages/newuser/newuser.component";

import { ListByIdComponent } from './pages/list-by-id/list-by-id.component';
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { AddDossierComponent } from './pages/add-dossier/add-dossier.component';
import { ListDossierComponent } from './pages/list-dossier/list-dossier.component';
import { ListDossierByIdComponent } from './pages/list-dossier-by-id/list-dossier-by-id.component';
import { UpdateDossierComponent } from './pages/update-dossier/update-dossier.component';
import { TransfertComponent } from './pages/transfert/transfert.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogoutComponent,
    ArchiveComponent,
    ListeusersComponent,
    NewuserComponent,
    ListByIdComponent,
    ResetPasswordComponent,
    AddDossierComponent,
    ListDossierComponent,
    ListDossierByIdComponent,
    UpdateDossierComponent,
    TransfertComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
