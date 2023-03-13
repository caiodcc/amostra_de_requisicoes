import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpComponent } from './jsonp.component';

describe('JsonpComponent', () => {
  let component: JsonpComponent;
  let fixture: ComponentFixture<JsonpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
