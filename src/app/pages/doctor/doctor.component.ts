import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';

@Component({
  selector: 'app-doctor',
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
  ],
  templateUrl: './doctor.component.html',
  styles: ``
})
export class DoctorComponent {

}
