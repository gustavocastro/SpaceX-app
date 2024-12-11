import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpxCrewListComponent } from './spx-crew-list.component';

describe('SpxCrewListComponent', () => {
  let component: SpxCrewListComponent;
  let fixture: ComponentFixture<SpxCrewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpxCrewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpxCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
