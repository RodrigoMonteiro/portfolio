import { Component } from '@angular/core';
import {
  influencerHubProject,
  pokeListProject,
  rickMortyProject,
  quizProject,
} from 'src/app/model/projects';

interface Project {
  name: string;
  image: string;
  usedTechs: string[];
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  pokeListProject: Project;
  influencerHubProject: Project;
  rickMortyProject: Project;
  quizProject: Project;

  constructor() {
    this.pokeListProject = pokeListProject;
    this.influencerHubProject = influencerHubProject;
    this.rickMortyProject = rickMortyProject;
    this.quizProject = quizProject;
  }
}
