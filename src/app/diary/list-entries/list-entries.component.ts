import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ExerciseSetList, ExerciseSet } from '@app/interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
    selector: 'app-list-entries',
    templateUrl: './list-entries.component.html',
    styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit{
    @Input() exerciseList!: ExerciseSetList;
    @Output() newRepEvent = new EventEmitter<ExerciseSet>();
    @Output() deleteEvent = new EventEmitter<string | number>();

    private readonly exerciseSetsService = inject(ExerciseSetsService);

    ngOnInit(): void {
        // this.exerciseList = this.exerciseSetsService.getInitialList()
    }


    itemTrackBy(index: number, item: ExerciseSet) {
        return item.id;
    }
}
