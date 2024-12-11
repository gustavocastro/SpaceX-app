import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CrewState } from '../../state/crew/crew.state';
import { User } from '../spx-crew/details/spx-crew-details/spx-crew-details.component';
import { selectActiveUser } from '../../state/crew/crew.selectors';
import { Subject, takeUntil } from 'rxjs';
import { setActiveUser } from '../../state/crew/crew.actions';

@Component({
  selector: 'spx-topbar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './spx-topbar.component.html',
  styleUrl: './spx-topbar.component.scss',
})
export class SpxTopbarComponent implements OnDestroy {

  public currentUser: User | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  public constructor (
    private store: Store<CrewState>,
    private router: Router,
  ) {
    this.store
      .select(selectActiveUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe(activeUser => this.currentUser = activeUser);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public signOut (): void {
    this.store.dispatch(setActiveUser({ activeUser: null }));

    this.router.navigate([
      '',
    ]);
  }

}
