import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichefraishfComponent } from './fichefraishf.component';

describe('FichefraishfComponent', () => {
  let component: FichefraishfComponent;
  let fixture: ComponentFixture<FichefraishfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichefraishfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichefraishfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
