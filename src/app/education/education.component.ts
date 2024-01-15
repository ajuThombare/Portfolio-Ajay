import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Punyashlok Ahilyadevi Holkar University, Solapur",
      course: "Bechelor's of Engineering (B.E. - Computer 4Years)",
      duration: '2018-2021',
      score: '73%',
    },
    {
      institute: 'Dr. Balkrushna Jewant Date Prashala, Natepute',
      course: 'H.S.C. 12th',
      duration: '2016-2017',
      score: '61%',
    },
    {
      institute: 'Dr. Balkrushna Jewant Date Prashala, Natepute',
      course: 'S.S.C. 10th ',
      duration: '2014-2015',
      score: '76%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
