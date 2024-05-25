import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tfg';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(["es", "en", "de", "fr"]);
    const lang = this.translate.getBrowserLang();
    if (lang !== "es" && lang !== "en") {
      this.translate.setDefaultLang("es");
    } else {
      this.translate.use(lang);
    }
  }
}
