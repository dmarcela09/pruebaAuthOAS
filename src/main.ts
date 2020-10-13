/*import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
  
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';
  import { ImplicitAutenticationService } from './app/implicit-autentication.service';
  
  
  if (environment.production) {
   enableProdMode();
   console.log("Hola");
  }
  const autenticacion= new ImplicitAutenticationService;
  
  
  
  const isButtonLogin=false;
  
  if(!autenticacion.getAuthorizationUrl(isButtonLogin)){
    console.log("Hola2");
  
   }else{
     autenticacion.live();
     console.log("Hola3");
  
          }
  
  
  platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.error(err));
