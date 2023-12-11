import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { SkillsComponent } from './views/skills/skills.component';
import { EducationComponent } from './views/education/education.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [

  {path:"skills", component: SkillsComponent},
  {path:"about-me", component: AboutMeComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"education",component:EducationComponent},
  {path: "**", component: AboutMeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
