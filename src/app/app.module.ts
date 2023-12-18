import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from './theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { EducationComponent } from './views/education/education.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    SharedModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
