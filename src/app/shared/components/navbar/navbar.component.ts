import { ThemeService } from 'src/app/theme/theme.service';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLightTheme: boolean = true;

  constructor(
    private themeService : ThemeService,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.onRouteChange());
  }

  ngOnInit(): void {
    this.themeService.themeChanges.subscribe((isLightTheme) => {
      this.isLightTheme = isLightTheme;
    });
    this.isLightTheme = this.themeService.isLightTheme();
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      this.renderer.setProperty(element, 'scrollTop', 0);
      element.scrollIntoView({ behavior: 'smooth' });

      this.router.navigate([], { fragment: sectionId, replaceUrl: true });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.onRouteChange();
  }

  private onRouteChange() {
    const sections = ['about-me', 'skills', 'projects', 'education'];
    const scrollPosition = window.scrollY;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);

      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.clientHeight;

        if (
          scrollPosition >= elementOffset &&
          scrollPosition < elementOffset + elementHeight
        ) {
          this.router.navigate([], { fragment: sectionId, replaceUrl: true });
          break;
        }
      }
    }
  }
}
