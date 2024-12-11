import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpxCrewDetailsComponent } from './spx-crew-details.component';

describe('SpxCrewDetailsComponent', () => {
  let component: SpxCrewDetailsComponent;
  let fixture: ComponentFixture<SpxCrewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpxCrewDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpxCrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
