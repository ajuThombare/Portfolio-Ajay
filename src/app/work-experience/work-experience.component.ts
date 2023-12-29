import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Rockwell Automation Pvt. Ltd. Pune',
      duration: 'Dec 2021 - May 2023',
      description: [
        'To Write and developed new and well-tested code according to requirements.',
        'To complete smooth, professional deployments of application in Production environment.',
        'Keeping pace with changing requirements of clients and maintaining updated software.',
        'Contributing to sprint planning, prioritizing backlogs to meet new demands.',
        'Aligned the project with requirements and specifications to deliver above- benchmark results.',
        'To perform Database analysis and Application Module Testing whenever required.',
        'Provided mentorship to Two interns in Rockwells dedicated service platform, FTPC.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
