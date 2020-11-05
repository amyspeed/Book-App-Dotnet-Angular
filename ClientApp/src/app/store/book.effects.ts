import { Actions, Effect, EffectsModule, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import {mergeMap, map} from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import * as types from './action.types';
import * as bookActions from './book.actions';

export class BookEffects {
    constructor(private service: BookService, private actions$: Actions) {}

    @Effect() loadBooks$: Observable<Action> = this.actions$.pipe(
        ofType<bookActions.loadBooksAction>(types.LOAD_BOOKS),
        mergeMap(() => 
            this.service.getAllBooks().pipe(map(books => new bookActions.loadBooksSuccessAction(books)))
        )
    )
}