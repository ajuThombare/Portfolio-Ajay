import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pageResponsive]'
})
export class ResponsiveDirective implements OnInit{
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
  }
  ngOnInit(): void {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) => {
        for (let breakpoint of Object.keys(result.breakpoints))
          if (result.breakpoints[breakpoint]) {
            console.log(breakpoint);
            if (breakpoint === Breakpoints.HandsetPortrait)
              this.element.nativeElement.classList.remove('pc');

            if (breakpoint === Breakpoints.WebLandscape)
              this.element.nativeElement.classList.add('pc');
          }
      },
    });
  }
}
