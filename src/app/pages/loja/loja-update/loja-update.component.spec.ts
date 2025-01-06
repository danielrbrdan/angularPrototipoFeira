import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaUpdateComponent } from './loja-update.component';

describe('LojaUpdateComponent', () => {
  let component: LojaUpdateComponent;
  let fixture: ComponentFixture<LojaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojaUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
