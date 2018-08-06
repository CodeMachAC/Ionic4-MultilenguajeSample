import { Component } from '@angular/core';

// Componentes externos que realizan peticiones
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private _translate: TranslateService
  ) {
  }

  /**
  * Cambia el idioma mediante el servicio de @ngx-translate.
  * @param idioma recibe idioma en formato de XX.
  */
  cambiaIdioma(idioma: string) {
    console.log(`Traduzco a: ${idioma}`);
    this._translate.use(idioma);
  }

}
