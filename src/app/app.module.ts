import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonComponent } from './button.component';
import { GridComponent } from './grid.component';
import { ColumnVisibilityService } from './column-visibility.service';

@NgModule({
  imports: [BrowserModule, AgGridModule],
  declarations: [AppComponent, ButtonComponent, GridComponent],
  providers: [ColumnVisibilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
