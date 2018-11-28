import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { StudentsClassService } from "../sudents-class.service";

import { Student } from "../student";

@Component({
    selector: 'sc-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy{
    
    public students: Student[] = [];
    public topStudents: Student[] = [];
    public studentSelected: Student;
    
    private numOfTopStudents: number = 3;

    private _subscriptions: Subscription[] = [];

    private _studentsClassService: StudentsClassService;

    constructor(studentsClassService: StudentsClassService){
        this._studentsClassService = studentsClassService;
    }

    ngOnInit(){
        this._setStudents();  
    }

    public _setStudents(): void{
        this._subscriptions.push(
            this._studentsClassService.getStudents()
                .subscribe((students: Student[]) => {
                    this.students = students;
                    this._setTopStudents();
                })
        );
    }

    private _setTopStudents(): void{

        const studentsSorted = this.students.slice(0);

        studentsSorted.sort((a, b) => {
            var x = a.grade.toLowerCase();
            var y = b.grade.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });

        this.topStudents = studentsSorted.slice(0, this.numOfTopStudents);
    }

    public selectStudent(student: Student): void{
        this.studentSelected = student;
    }

    ngOnDestroy(){
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }
}