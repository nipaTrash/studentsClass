import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { StudentsClassRoutingModule } from "./students-class-routing.module";

import { StudentsClassComponent } from "./students-class.component";
import { HomeComponent } from "./home/home.component";
import { AverageComponent } from "./average/average.component";
import { StudentCardComponent } from "./student/student-card.component";
import { StudentRecordComponent } from "./student/student-record.component";

import { StudentsClassService } from "./sudents-class.service";

@NgModule({
    imports: [ 
        BrowserModule ,
        CommonModule,
        StudentsClassRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [ 
        StudentsClassComponent,
        HomeComponent,
        AverageComponent,
        StudentCardComponent,
        StudentRecordComponent
    ],
    providers: [ StudentsClassService ],
    exports: [ StudentsClassComponent ]
})
export class StudentsClassModule {

}