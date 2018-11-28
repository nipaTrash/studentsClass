import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { StudentsClassService } from "../sudents-class.service";

import { Student } from "../student";

@Component({
    selector: 'sc-student-record',
    templateUrl: './student-record.component.html'
})
export class StudentRecordComponent implements OnInit {
    
    @Input() set student (student:Student){
        this.studentRecord = student;
        this._setGradeForm();
    }

    public studentRecord: Student;
    
    gradeOptions: string[] = [ 'A', 'B', 'C', 'D', 'F'];

    public gradeForm: FormGroup;

    private _studentsClassService: StudentsClassService;

    constructor(public fb: FormBuilder, studentClassService: StudentsClassService){
        this._studentsClassService = studentClassService;
    }

    ngOnInit(){
        this._setGradeForm();
    }

    private _setGradeForm(): void{
        this.gradeForm = this.fb.group({
            grade: [this.studentRecord.grade]
        });

        this.gradeForm.valueChanges
            .subscribe(res => {
                this.studentRecord.grade = res.grade;
                this._studentsClassService.changeStudentGrade(this.studentRecord);
            })
    }
}