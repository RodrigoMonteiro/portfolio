import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  isLightTheme: boolean = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeChanges.subscribe((isLightTheme) => {
      this.isLightTheme = isLightTheme;
    });
    this.isLightTheme = this.themeService.isLightTheme();
  }
}
