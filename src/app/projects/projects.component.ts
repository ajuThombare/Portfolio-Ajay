import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'JBM Electric Vehicles | MES Implementation (Rockwell Automation Pune).',
      technologies: 'Java, MS SQL, HTML, CSS, TortoiseSVN, Eclipse IDE, JBoss.',
      description: []
      // description: [
      //   'Worked on Development of User Interfaces.',
      //   'Performed integration in OEM devices and Database.',
      //   'Done Module Testing in Development and Testing Environment.',
      //   'Done Test Cases Resolution.',
      //   'Done Production Deployment.',
      //   'Providing Updates in Sprint meetings.',
      //   'Conducting meetings with Clients and Knowledge sharing and CR discussions.'
      // ],
    },
    {
      title: 'VE Commercial Vehicles | MES Implementation (REIN Solutions Pune)',
      technologies: ' Java, MS SQL, JSP, HTML, CSS, Eclipse IDE, JBoss',
      description: []
      // description: [
      //   'Developed associate Management/Deployment UI which can be accessible on Mobile devices',
      //   'Worked on Optimization of JSP reports',
      //   'Conducted client meetings for Application Feedbacks.',
      //   'Done Testing and Issue Resolution for Various Project modules.',
      //   'Done Deployment of application on Production Environment.',
      //   'Providing Updates in Daily Internal Meetings and weekly Client Meetings.',
      // ],
    },
    {
      title: 'E - Classroom',
      technologies: ' Java, Spring Boot, Spring Data JPA, Angular v16 (HTML, CSS, Typescript), REST API',
      description: [
        'Features: User Authentication, Real-Time updates, Managing | Attendance, Users, Notes, Exams.',
        'Role: As a Group leader responsible for design, implementation, Unit testing, and deployment.'
      ],
    },
    {
      title: 'E-CommerceAndroid Applicationwith Web Based AdminPanel',
      technologies: ' Java, Laravel Framework, Android Development, HTML, Razer-Pay gateway',
      description: [
        'Features: Product Catalog, Cart and Checkouts, User authentication, Order Management and Tracking, Payment.',
        'Role: To fulfill project Requirements, Write and Publish Research Paper, Resolve application Issue and Deployments.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
