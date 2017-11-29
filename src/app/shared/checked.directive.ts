import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    let li = this.el.nativeElement;
    this.render.setStyle(
      li,
      'list-style-image',
      'url(/assets/img/checked.png)'
    );
    this.render.setStyle(li, 'background', 'aquamarine');
  }
}
