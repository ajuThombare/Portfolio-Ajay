import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})

export class BanerComponent implements OnInit{

constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
