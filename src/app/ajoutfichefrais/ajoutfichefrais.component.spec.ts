import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfichefraisComponent } from './ajoutfichefrais.component';

describe('AjoutfichefraisComponent', () => {
  let component: AjoutfichefraisComponent;
  let fixture: ComponentFixture<AjoutfichefraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfichefraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutfichefraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
