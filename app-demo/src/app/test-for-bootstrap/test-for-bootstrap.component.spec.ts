import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForBootstrapComponent } from './test-for-bootstrap.component';

describe('TestForBootstrapComponent', () => {
  let component: TestForBootstrapComponent;
  let fixture: ComponentFixture<TestForBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestForBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
