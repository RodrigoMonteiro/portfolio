import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnThemeComponent } from './components/btn-theme/btn-theme.component';
import { RouterModule } from '@angular/router';
import { SkillBoxComponent } from './components/skill-box/skill-box.component';
import { ProjectBoxComponent } from './components/project-box/project-box.component';
import { EducationBoxComponent } from './components/education-box/education-box.component';
import { MaterialModule } from './material/material/material.module';
import { NgxTypedJsModule } from 'ngx-typed-js';






@NgModule({
  declarations: [
    NavbarComponent,
    BtnThemeComponent,
    SkillBoxComponent,
    ProjectBoxComponent,
    EducationBoxComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, NgxTypedJsModule],
  exports: [
    NavbarComponent,
    BtnThemeComponent,
    SkillBoxComponent,
    ProjectBoxComponent,
    EducationBoxComponent,
  ],
})
export class SharedModule {}
