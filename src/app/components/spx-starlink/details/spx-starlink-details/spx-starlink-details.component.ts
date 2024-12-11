import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpxStarlinkService } from '../../../../services/starlink/spx-starlink.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

export type StarlinkId = string;
export type StarlinkLaunchId = string;

export interface Starlink {
  id: StarlinkId,
  height_km: number,
  launch: string,
  spaceTrack: {
    CREATION_DATE: string,
    COUNTRY_CODE: string,
  },
};

export interface StarlinkLaunch {
  id: StarlinkLaunchId,
  name: string,
  details: string,
  date_local: string,
  success: boolean,
  links: {
    flickr: {
      original: string[],
    },
  },
};

@Component({
  selector: 'spx-starlink-details',
  standalone: true,
  imports: [],
  templateUrl: './spx-starlink-details.component.html',
  styleUrl: './spx-starlink-details.component.scss',
})
export class SpxStarlinkDetailsComponent implements OnInit, OnDestroy {

  public launch: StarlinkLaunch | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  public constructor (
    private router: Router,
    private route: ActivatedRoute,
    private starlinkService: SpxStarlinkService,
  ) {}

  public ngOnInit(): void {
    this.getStarlinkLaunches();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getStarlinkLaunches (): void {
    const launchId: StarlinkLaunchId | null = this.route.snapshot.paramMap.get('launchId');

    if (launchId === null) {
      void this.router.navigate([
        '/starlink',
      ]);

      return;
    }

    this.starlinkService
      .getStarlinkLaunches(launchId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(launch => this.launch = launch);
  }

}
