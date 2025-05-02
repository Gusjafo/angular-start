import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '@app/interfaces/exercise-set';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExerciseSetsService {

    private httpClient = inject(HttpClient);
    private url = 'http://localhost:3000/diary';

    getInitialList(): Observable<ExerciseSetListAPI> {
        return this.httpClient.get<ExerciseSetListAPI>(this.url);
    }

    refreshList(): Observable<ExerciseSetListAPI> {
        return this.httpClient.get<ExerciseSetListAPI>(this.url);
    }

    addNewItem(item: ExerciseSet): Observable<ExerciseSet> {
        return this.httpClient.post<ExerciseSet>(this.url, item);
    }
    updateItem(id: string | number, item: ExerciseSet): Observable<ExerciseSet> {
        return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
    }

    deleteItem(id: string | number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.url}/${id}`);
    }
}
