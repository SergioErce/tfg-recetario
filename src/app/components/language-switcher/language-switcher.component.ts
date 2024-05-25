import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  constructor(private translateService: TranslateService) { }

  switchToSpanish() {
    this.translateService.use('es');
  }

  switchToEnglish() {
    this.translateService.use('en');
  }

  switchToGerman(){
    this.translateService.use('de');
  }
  switchToFrench(){
    this.translateService.use('fr');
  }
}
