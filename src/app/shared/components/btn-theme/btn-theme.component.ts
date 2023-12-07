import { light } from '../../../theme/theme';
import { ThemeService } from '../../../theme/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-theme',
  templateUrl: './btn-theme.component.html',
  styleUrls: ['./btn-theme.component.scss'],
})
export class BtnThemeComponent {
  lightMode: boolean = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setSavedTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }

  toggleTheme(): void {
    this.themeService.isDarkTheme()
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }
}
