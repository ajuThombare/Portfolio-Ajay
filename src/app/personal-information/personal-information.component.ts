import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Ajay Prakash Thombare'],
    ['DOB', '01/09/1999'],
    ['Work Exp', '1.5 Years'],
    ['Education', "Bechelor's of Engineering (B.E. - Computer 4Years) (2021)"],
    ['Hobbies','Fussball Cycling'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1.5 years of experience in software industry.',
    'I have been an integral part of REIN Software Solutions Pune since my commencement in December 2021.',
    'Immediately upon joining as a Software Engineer, began actively contributing to significant projects for Rockwell Automation Pvt. Ltd. Pune. Throughout my journey, I played a pivotal role in various project-related responsibilities, showcasing my proficiency and commitment to delivering successful outcomes.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
