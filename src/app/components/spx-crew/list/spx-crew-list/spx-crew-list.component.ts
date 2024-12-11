import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpxCrewService } from '../../../../services/crew/spx-crew.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../details/spx-crew-details/spx-crew-details.component';
import { Store } from '@ngrx/store';
import { CrewState } from '../../../../state/crew/crew.state';
import { setActiveUser } from '../../../../state/crew/crew.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'spx-crew-list',
  standalone: true,
  imports: [],
  templateUrl: './spx-crew-list.component.html',
  styleUrl: './spx-crew-list.component.scss',
})
export class SpxCrewListComponent implements OnInit, OnDestroy {

  public users: User[] = [];

  private destroy$: Subject<void> = new Subject<void>();

  public constructor (
    private crewService: SpxCrewService,
    private store: Store<CrewState>,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.fetchCrewList();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectUser (user: User): void {
    this.store.dispatch(setActiveUser({ activeUser: user }));

    this.router.navigate([
      '/crew',
      user.id,
    ]);
  }

  private fetchCrewList (): void {
    this.crewService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => this.users = users);
  }

}
