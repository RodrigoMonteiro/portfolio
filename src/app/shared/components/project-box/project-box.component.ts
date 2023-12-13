import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  name: string;
  image: string;
  usedTechs: string[];
  urlProject: string;
  description: string;
}

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent {
  @Input()
  project: Project = {
    name: '',
    image: '',
    usedTechs: [],
    urlProject: '',
    description: '',
  };
  constructor(private router: Router) {}

  redirectToProject() {
    if (this.project.urlProject) {
      window.open(this.project.urlProject, '_blank');
    }
  }
}
