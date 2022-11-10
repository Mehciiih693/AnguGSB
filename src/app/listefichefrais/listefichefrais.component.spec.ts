import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefichefraisComponent } from './listefichefrais.component';

describe('ListefichefraisComponent', () => {
  let component: ListefichefraisComponent;
  let fixture: ComponentFixture<ListefichefraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefichefraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListefichefraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
