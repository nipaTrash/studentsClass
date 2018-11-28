import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

import { Student } from "./student";

@Injectable()
export class StudentsClassService{

    studentsValues: Student[] = [
        {id: 1, firstname: 'Daniel', lastname: 'Howcroft', grade: 'A' },
        { id: 2, firstname: 'Robert', lastname: 'Taylor', grade: 'B' },
        { id: 3, firstname: 'Christian', lastname: 'Brown', grade: 'F' },
        { id: 4, firstname: 'Mathew', lastname: 'Smith', grade: 'C' },
        { id: 5, firstname: 'Thomas', lastname: 'Marsden', grade: 'A' },
        { id: 6, firstname: 'John', lastname: 'Mcafee', grade: 'C' },
        { id: 7, firstname: 'Rihanna', lastname: 'Fenty', grade: 'A' },
        { id: 8, firstname: 'Madonna', lastname: 'Ciccone', grade: 'B' },
        { id: 9, firstname: 'Eric', lastname: 'Filton', grade: 'C' },
        { id: 10, firstname:'Greg', lastname: 'Wallace', grade: 'D' }
    ];
    
    modifyStudents;

    students$ = Observable.create((observer) => {
        observer.next(this.studentsValues)
        this.modifyStudents = () => observer.next(this.studentsValues)
    });

    getStudents(): Observable<Student[]>{
        return this.students$;
    }

    changeStudentGrade(studentNewValues: Student): void{

        const index = this.studentsValues.findIndex(stud => studentNewValues.id == stud.id);

        this.studentsValues[index].grade = studentNewValues.grade;

        this.modifyStudents();
    }
}