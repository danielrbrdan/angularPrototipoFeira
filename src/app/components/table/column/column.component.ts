import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() field: string = '';
  @Input() header: string = '';
  @Input() width: string = '';
  @Input() color: string = '';

  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
