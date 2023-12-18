import { Component, Input } from '@angular/core';


interface EducationType {
  mainlyFormation: FirstEducation;
  secondaryFormation: SecondaryEducation[];
}

interface FirstEducation {
  institute: string;
  instituteLogo: string;
  course: string;
  courseTotalHours: number;
  startedAt: string;
  endedAt: string;
  pathCourse: string;
}

interface SecondaryEducation {
  courseName: string;
  totalHours: number;
  coveredTopics: string[];
  plataform: string;
  courseImage: string;
  courseUrl: string;
}

@Component({
  selector: 'app-education-box',
  templateUrl: './education-box.component.html',
  styleUrls: ['./education-box.component.scss'],
})
export class EducationBoxComponent {
  @Input()
  education!: EducationType;
  isMainFormationOpen: boolean = false;

  toggleMainFormation() {
    this.isMainFormationOpen = !this.isMainFormationOpen;
  }

}
