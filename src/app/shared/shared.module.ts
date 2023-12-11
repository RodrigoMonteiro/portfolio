import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnThemeComponent } from './components/btn-theme/btn-theme.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [NavbarComponent, BtnThemeComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, BtnThemeComponent],
})
export class SharedModule {}
