import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet } from '@app/interfaces/exercise-set';

@Component({
    selector: 'app-entry-item',
    templateUrl: './entry-item.component.html',
    styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent {

    @Input('exercise-set') exerciseSet!: ExerciseSet;
    @Output() newRepEvent = new EventEmitter<ExerciseSet>();
    @Output() deleteEvent = new EventEmitter<string | number>();
    
    newRep() {
        const reps = ++this.exerciseSet.reps;
        const newItem: ExerciseSet = {
            ...this.exerciseSet,
            reps,
        };
        this.newRepEvent.emit(newItem);
    }


}
