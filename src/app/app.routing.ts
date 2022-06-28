import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddDossierComponent } from './pages/add-dossier/add-dossier.component';

import { ArchiveComponent } from './pages/archive/archive.component';
;
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ListByIdComponent } from './pages/list-by-id/list-by-id.component';
import { ListDossierByIdComponent } from './pages/list-dossier-by-id/list-dossier-by-id.component';
import { ListDossierComponent } from './pages/list-dossier/list-dossier.component';
import { ListeusersComponent } from './pages/listeusers/listeusers.component';

import { NewuserComponent } from './pages/newuser/newuser.component';

import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

import { TransfertComponent } from './pages/transfert/transfert.component';
import { UpdateDossierComponent } from './pages/update-dossier/update-dossier.component';


import { UserComponent } from './pages/user/user.component';

export const AppRoutes: Routes = [

  { path: '', component: LoginComponent  },
  {path:'resetPassword',component:ResetPasswordComponent},
  {
    path: '', component : AdminLayoutComponent ,
    children:
      [
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'user',           component: UserComponent },
  
    
        { path: 'newuser',        component: NewuserComponent },
      { path: 'listeusers',        component: ListeusersComponent },
      {path:'archive',component:ArchiveComponent},
      {path:'listById',component:ListByIdComponent},
      {path:'listDossier',component:ListDossierComponent},
      {path:'listDossierById',component:ListDossierByIdComponent},
      {path:'addDossier',component:AddDossierComponent},
      {path:`updateDossier`,component:UpdateDossierComponent},
      {path:'transfert',component:TransfertComponent}
     
    //     { path: 'budgets', children:[
    //       { path: '',        component: ListComponent },
    //       { path: 'newbudget',        component: NewComponent },
    //       { path: 'division',        component: DivisionComponent },
    //     ] },

      ]
  },
  { path: 'logout', component: LogoutComponent}
  /*** its need to be always in the last A Mon cheff hassane */
  // { path: '**',component   : WrongRouteComponent},

]

