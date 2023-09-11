import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasPlantComponent } from './form-bas-plant.component';

describe('FormBasPlantComponent', () => {
  let component: FormBasPlantComponent;
  let fixture: ComponentFixture<FormBasPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBasPlantComponent]
    });
    fixture = TestBed.createComponent(FormBasPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
