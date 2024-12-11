import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Starlink } from '../../details/spx-starlink-details/spx-starlink-details.component';
import { SpxStarlinkService } from '../../../../services/starlink/spx-starlink.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

type ListTypes = 'divisible3' | 'divisible5' | 'both' | 'none';

@Component({
  selector: 'spx-starlink-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
],
  templateUrl: './spx-starlink-list.component.html',
  styleUrl: './spx-starlink-list.component.scss',
})
export class SpxStarlinkListComponent implements OnInit, OnDestroy {

  public starlinkLists: Record<ListTypes, Starlink[]> = {
    divisible3: [],
    divisible5: [],
    both: [],
    none: [],
  };

  private destroy$: Subject<void> = new Subject<void>();

  public constructor (private starlinkService: SpxStarlinkService) {}

  public ngOnInit(): void {
    this.fetchStarlinkList();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fetchStarlinkList (): void {
    this.starlinkService
      .getStarlinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(starlinks => this.processStarlinks(starlinks));
  }

  private processStarlinks (starlinks: Starlink[]): void {
    for (const starlink of starlinks) {
      starlink.height_km = Math.round(starlink.height_km);

      switch (true) {
        case starlink.height_km % 3 === 0 && starlink.height_km % 5 === 0:
          this.starlinkLists.both.push(starlink);
          break;

        case starlink.height_km % 3 === 0:
          this.starlinkLists.divisible3.push(starlink);
          break;

        case starlink.height_km % 5 === 0:
          this.starlinkLists.divisible5.push(starlink);
          break;

        default:
          this.starlinkLists.none.push(starlink);
      }
    }
  }

}
