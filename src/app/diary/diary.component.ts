import { Component, inject, OnInit } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '@app/interfaces/exercise-set';
import { ExerciseSetsService } from './services/exercise-sets.service';


@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

    exerciseList!: ExerciseSetList;

    private exerciseSetsService = inject(ExerciseSetsService);

    ngOnInit(): void {
        this.exerciseSetsService
            .getInitialList()
            .subscribe((dataApi: ExerciseSetListAPI) => (this.exerciseList = dataApi.items))
    }

    newList() {
        this.exerciseSetsService
            .refreshList()
            .subscribe((dataApi: ExerciseSetListAPI) => (this.exerciseList = dataApi.items));
    }
    addExercise(newSet: ExerciseSet) {
        this.exerciseSetsService
            .addNewItem(newSet)
            .subscribe((_) => this.newList());
    }
    deleteItem(id: string | number) {
        this.exerciseSetsService.deleteItem(id).subscribe(() => {
            this.exerciseList = this.exerciseList.filter(
                (exerciseSet) => exerciseSet.id !== id
            );
        });
    }
    newRep(updateSet: ExerciseSet) {
        const id = updateSet.id ?? '';
        this.exerciseSetsService
            .updateItem(id, updateSet)
            .subscribe();
    }

}
