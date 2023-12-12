import { Component } from '@angular/core';
import {
  frontendSkills,
  backendSkills,
  languagesSkills,
  generalSkills,
} from '../../model/skills';


interface singleSkillData {
  name: string;
  icon: string;
}

interface SkillType {
  title: string;
  skills: singleSkillData[];
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  {
  frontEndSkills: SkillType;
  backEndSkills: SkillType;
  languagesSkills: SkillType;
  generalSkills: SkillType;


  constructor(){
    this.frontEndSkills = frontendSkills;
    this.backEndSkills = backendSkills;
    this.languagesSkills = languagesSkills;
    this.generalSkills = generalSkills;
  }


}
