import { Component, Input } from '@angular/core';

interface Project {
  name: string;
  image: string;
  usedTechs: string[];
  description: string;
}

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss']
})
export class ProjectBoxComponent {

  @Input()
  project : Project = {
    name: '',
  image: '',
  usedTechs: [],
  description: '',
  }



}
