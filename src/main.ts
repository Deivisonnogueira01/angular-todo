import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  
}


//app.enableCors();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*insert
  formulario para cadastrar a tarefa
  no bd 

  cdn / angular material

   to do / done / 

   3

  */