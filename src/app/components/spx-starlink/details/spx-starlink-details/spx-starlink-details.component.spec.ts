import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpxStarlinkDetailsComponent } from './spx-starlink-details.component';

describe('StarlinkDetailsComponent', () => {
  let component: SpxStarlinkDetailsComponent;
  let fixture: ComponentFixture<SpxStarlinkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SpxStarlinkDetailsComponent,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpxStarlinkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
