import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesPropiedadesComponent } from './botones-propiedades.component';

describe('BotonesPropiedadesComponent', () => {
  let component: BotonesPropiedadesComponent;
  let fixture: ComponentFixture<BotonesPropiedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesPropiedadesComponent]
    });
    fixture = TestBed.createComponent(BotonesPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
