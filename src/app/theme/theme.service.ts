import { Injectable } from '@angular/core';
import { Theme, light, dark } from './theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];
  private themeSubject = new BehaviorSubject<boolean>(true);
  themeChanges = this.themeSubject.asObservable();

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isLightTheme(): boolean {
    return this.active.name === light.name;
  }
  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    localStorage.setItem('theme', dark.name);
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    localStorage.setItem('theme', light.name);
    this.setActiveTheme(light);
  }

  setSavedTheme(): void {
    const activeTheme =
      localStorage.getItem('theme') === dark.name ? dark : light;
    this.setActiveTheme(activeTheme);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    this.themeSubject.next(this.isLightTheme());

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
