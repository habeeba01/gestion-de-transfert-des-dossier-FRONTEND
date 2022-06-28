import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user/user';
import { ProfileService } from 'app/services/profile/profile.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any;
  public user : User;
 
  constructor(private profile : ProfileService) { }



    ngOnInit() {
      

        this.profile.profile().subscribe(data=>{
          this.user = data;

       //  this.user.roles.find(r=>r.libelle=="ADMIN")
        
        switch(data.roles[0].libelle){
          case 'ADMIN':
            this.menuItems = [
              { path: 'user',          title: 'الملف الشخصي',      icon:'nc-single-02',  class: '' },
              { path: '/listeusers',         title: 'قائمة المستخدمين',             icon:'nc-bullet-list-67',    class: '' },
              { path: '/archive',         title: 'الأرشيف',             icon:' nc-icon nc-single-copy-04',    class: '' },
              { path: '/logout',       title: 'تسجيل خروج',    icon:'nc-user-run',  class: 'active-pro' }
            ];
            break;

          case 'SUPERUSER':
            this.menuItems = [
              { path: 'user',          title: 'الملف الشخصي',      icon:'nc-single-02',  class: '' },
              { path: '/addDossier',          title: 'إضافة ملف',              icon:'nc-simple-add',      class: '' },
              { path: '/transfert',    title: 'إحالة ملفات',        icon:'nc-caps-small', class: '' },

           //   { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
              { path: '/listDossier',         title: 'قائمة الملفات',        icon:'nc-tile-56',    class: '' },
              { path: '/dashboard',     title: 'الإحصائيات',         icon:'nc-sound-wave',       class: '' },

            //  { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
              { path: '/logout',       title: 'تسجيل خروج',    icon:'nc-user-run',  class: 'active-pro' },
            ];
            break;
            case 'USER':
              this.menuItems = [
                { path: 'user',          title: 'الملف الشخصي',      icon:'nc-single-02',  class: '' },
                { path: '/addDossier',          title: 'إضافة ملف',              icon:'nc-simple-add',      class: '' },
                { path: '/transfert',    title: 'إحالة ملفات',        icon:'nc-caps-small', class: '' },

             //   { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
                { path: '/listDossier',         title: 'قائمة الملفات',        icon:'nc-tile-56',    class: '' },
                { path: '/dashboard',     title: 'الإحصائيات',         icon:'nc-sound-wave',       class: '' },

              //  { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
                { path: '/logout',       title: 'تسجيل خروج',    icon:'nc-user-run',  class: 'active-pro' },
              ];
              break;
         
        }
       
  
         
          localStorage.setItem("user", JSON.stringify(this.user))
        },err=>{
          alert(err);
        })



        //this.menuItems = ROUTES.filter(menuItem => menuItem);

    }
}
