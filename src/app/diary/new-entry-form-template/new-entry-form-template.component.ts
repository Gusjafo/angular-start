import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseSet } from '@app/interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
  selector: 'app-new-entry-form-template',
  templateUrl: './new-entry-form-template.component.html',
  styleUrls: ['./new-entry-form-template.component.css']
})
export class NewEntryFormTemplateComponent {
    private exerciseSetsService = inject(ExerciseSetsService);
    private router = inject(Router);
  
    entry: ExerciseSet = { date: new Date(), exercise: '', reps: 0, sets: 0 };
  
    newEntry() {
      const newEntry = { ...this.entry };
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe((entry) => this.router.navigate(['/home']));
    }
}
