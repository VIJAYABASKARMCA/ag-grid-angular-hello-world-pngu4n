import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnVisibilityService {
  private columnVisibilitySubject: BehaviorSubject<{
    [columnName: string]: boolean;
  }> = new BehaviorSubject<{ [columnName: string]: boolean }>({
    name: true,
    age: true,
  });

  columnVisibility$ = this.columnVisibilitySubject.asObservable();

  toggleColumnVisibility(columnName: string): void {
    const currentVisibility = this.columnVisibilitySubject.value[columnName];
    const updatedVisibility = !currentVisibility;

    this.columnVisibilitySubject.next({
      ...this.columnVisibilitySubject.value,
      [columnName]: updatedVisibility,
    });
  }
}
