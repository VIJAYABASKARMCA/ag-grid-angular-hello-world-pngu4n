import { Component } from '@angular/core';
import { ColumnVisibilityService } from './column-visibility.service';

@Component({
  selector: 'app-buttons',
  template: `
    <button (click)="toggleColumnVisibility('name')">Toggle Name Column</button>
    <button (click)="toggleColumnVisibility('age')">Toggle Age Column</button>
  `,
})
export class ButtonComponent {
  constructor(private columnVisibilityService: ColumnVisibilityService) {}

  toggleColumnVisibility(columnName: string): void {
    this.columnVisibilityService.toggleColumnVisibility(columnName);
  }
}
