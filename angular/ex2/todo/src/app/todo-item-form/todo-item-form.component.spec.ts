import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemFormComponent } from './todo-item-form.component';

describe('TodoItemFormComponent', () => {
  let component: TodoItemFormComponent;
  let fixture: ComponentFixture<TodoItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
