import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnThemeComponent } from './components/btn-theme/btn-theme.component';
import { RouterModule } from '@angular/router';
import { SkillBoxComponent } from './components/skill-box/skill-box.component';





@NgModule({
  declarations: [NavbarComponent, BtnThemeComponent, SkillBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, BtnThemeComponent, SkillBoxComponent],
})
export class SharedModule {}
