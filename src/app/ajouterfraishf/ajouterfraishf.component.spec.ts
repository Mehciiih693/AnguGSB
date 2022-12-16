import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfraishfComponent } from './ajouterfraishf.component';

describe('AjouterfraishfComponent', () => {
  let component: AjouterfraishfComponent;
  let fixture: ComponentFixture<AjouterfraishfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfraishfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterfraishfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
