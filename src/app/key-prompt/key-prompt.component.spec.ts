import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPromptComponent } from './key-prompt.component';

describe('KeyPromptComponent', () => {
  let component: KeyPromptComponent;
  let fixture: ComponentFixture<KeyPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
