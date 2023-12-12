import { Component, Input } from '@angular/core';

interface singleSkillData {
  name: string;
  icon: string;
}

interface SkillType {
  title: string;
  skills: singleSkillData[];
}

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss'],
})
export class SkillBoxComponent{

@Input()
skill: SkillType={
  title: '',
  skills: []
}




}
