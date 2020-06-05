import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-ent-ui-card',
  template: `
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <p>
      Enterprise UI Components by Janynne Gomes
    </p>
  `,
  styles: []
})
export class NgxCardComponent implements OnInit {

  @Input() title?: string
  @Input() description?:string

  constructor() { }

  ngOnInit() {
  }

}
