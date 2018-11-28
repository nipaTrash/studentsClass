import { Component, Input } from "@angular/core";
import { Student } from "../student";

@Component({
    selector: 'sc-student-card',
    templateUrl: './student-card.component.html'
})
export class StudentCardComponent{

    @Input() student: Student;
    
}