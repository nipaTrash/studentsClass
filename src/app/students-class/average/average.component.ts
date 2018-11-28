import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { StudentsClassService } from "../sudents-class.service";
import { Student } from "../student";
import { Average } from "../average";

@Component({
    selector: 'sc-average',
    templateUrl: './average.component.html'
})
export class AverageComponent implements OnInit, OnDestroy{

    public average: Average;

    private _subscriptions: Subscription[] = [];

    private _studentsClassService: StudentsClassService;

    constructor(studentClassService: StudentsClassService){
        this._studentsClassService = studentClassService;
    }

    ngOnInit(){
        this._setStudents();
    }

    private _setStudents(): void{
        this._subscriptions.push(
            this._studentsClassService.getStudents()
                .subscribe((students: Student[]) => {
                    this.average = this._setAverage(students);
                })
        );
    }

    private _setAverage(students: Student[]): Average{
        let grades = { A: 0, B: 0, C: 0, D: 0, F: 0}

        students.forEach((student: Student) => {
            grades[student.grade]++;
        });

        return grades;
    }

    public getGradesKeys(): string[]{
        return Object.keys(this.average);
    }

    ngOnDestroy(){
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }
}