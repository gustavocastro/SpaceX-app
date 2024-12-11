import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SpxCrewService } from '../../../../services/crew/spx-crew.service';

export type UserId = string;

export interface User {
  id: UserId,
  name: string,
  agency: string,
  image: string,
  launches: string[],
  status: string,
  wikipedia: string,
};

@Component({
  selector: 'spx-crew-details',
  standalone: true,
  imports: [],
  templateUrl: './spx-crew-details.component.html',
  styleUrl: './spx-crew-details.component.scss',
})
export class SpxCrewDetailsComponent implements OnInit, OnDestroy {

  public user: User | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  public constructor (
    private router: Router,
    private route: ActivatedRoute,
    private crewService: SpxCrewService,
  ) { }

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fetchUserDetails (): void {
    const userId: UserId | null = this.route.snapshot.paramMap.get('id');

    if (userId === null) {
      void this.router.navigate([
        '',
      ]);

      return;
    }

    this.crewService
      .getUserById(userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.user = user);
  }

}
