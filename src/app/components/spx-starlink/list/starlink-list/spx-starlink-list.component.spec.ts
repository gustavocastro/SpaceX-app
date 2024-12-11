import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpxStarlinkListComponent } from './spx-starlink-list.component';

describe('StarlinkListComponent', () => {
  let component: SpxStarlinkListComponent;
  let fixture: ComponentFixture<SpxStarlinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SpxStarlinkListComponent,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpxStarlinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
