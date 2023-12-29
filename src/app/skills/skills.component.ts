import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'TypeScript',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'BootStrap',
      level: 'Intermidiate',
      rating: 70,
    }, 
    {
      name: 'Core Java',
      level: 'Intermidiate',
      rating: 70,
    }, 
    {
      name: 'JAVA 8 ',
      level: 'Expert',
      rating: 80,
    },
   
    {
      name: 'DSA with Java',
      level: 'Intermidiate',
      rating: 70,
    }, 
    {
      name: 'Jsp and Servlets',
      level: 'Intermidiate',
      rating: 70,
    },

    {
      name: 'Spring Core',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring MVC',
      level: 'Intermidiate',
      rating: 70,
    },

    {
      name: 'Spring Security',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring Boot',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring Data JPA',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring RESTful Web Services',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Hibernate ORM',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Java Persistence APIs',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'REST API',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Java JDBC',
      level: 'Intermidiate',
      rating: 70,
    },   
    {
      name: 'My-Sql',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Microsoft-Sql',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'JUint',
      level: 'Intermidiate',
      rating: 70,
    },   
  ];
  constructor() {}

  ngOnInit(): void {}
}
