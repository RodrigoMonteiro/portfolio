import { Component } from '@angular/core';
import { education } from 'src/app/model/education';

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
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  myEducation: EducationType;

  constructor(){
    this.myEducation = education;
  }
}
