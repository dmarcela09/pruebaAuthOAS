/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
//import { AnalyticsService } from '../analytics.service';
// import { AutenticationService } from '../autentication.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
//import { NotificacionesService } from '../notificaciones.service';
import { ImplicitAutenticationService } from '../implicit-autentication.service';


@Component({
 selector: 'ngx-header',
 styleUrls: ['./header.component.scss'],
 templateUrl: './header.component.html',
})
export class HeaderComponent {

 @Input() position = 'normal';
 itemClick: Subscription;
 liveTokenValue: boolean = false;
 user: any;
 title: any;
 username = '';
 userMenu = [{ title: 'ver todas', icon: 'fa fa-list' }];
 public noNotify: any = '0';
 private autenticacion= new ImplicitAutenticationService;

 constructor(private sidebarService: NbSidebarService,
   private menuService: NbMenuService,
   //private analyticsService: AnalyticsService,
   private router: Router,
   //public notificacionService: NotificacionesService,
   public translate: TranslateService) {
   this.translate = translate;
   this.itemClick = this.menuService.onItemClick()
     .subscribe((event) => {
       this.onContecxtItemSelection(event.item.title);
     });

   /*this.notificacionService.arrayMessages$
     .subscribe((notification: any) => {
       const temp = notification.map((notify: any) => {
         return { title: notify.Content.Message, icon: 'fa fa-commenting-o' }
       });
       this.userMenu = [...temp.slice(0, 7), ...[{ title: 'ver todas', icon: 'fa fa-list' }]];
     });*/
   this.liveToken();
 }

 useLanguage(language: string) {
   this.translate.use(language);
 }

 liveToken() {
   if (this.autenticacion.live()) {
     this.liveTokenValue = this.autenticacion.live();
     this.username = (this.autenticacion.getPayload()).sub;
   }
   return this.autenticacion.live();
 }

 onContecxtItemSelection(title) {
   if (title === 'ver todas') {
     this.router.navigate(['/pages/notificacion/listado']);
   }
 }



 logout() {
   this.autenticacion.logout();
 }

 toggleSidebar(): boolean {
   this.sidebarService.toggle(true, 'menu-sidebar');
   return false;
 }

 toggleSettings(): boolean {
   this.sidebarService.toggle(false, 'settings-sidebar');
   return false;
 }

 goToHome() {
   this.menuService.navigateHome();
 }

 /*startSearch() {
   this.analyticsService.trackEvent('startSearch');
 }*/
}
