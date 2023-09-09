import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCliExampleComponent } from './component-cli-example.component';

describe('ComponentCliExampleComponent', () => {
  let component: ComponentCliExampleComponent;
  let fixture: ComponentFixture<ComponentCliExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCliExampleComponent]
    });
    fixture = TestBed.createComponent(ComponentCliExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
