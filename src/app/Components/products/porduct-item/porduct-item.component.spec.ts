import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductItemComponent } from './porduct-item.component';

describe('PorductItemComponent', () => {
  let component: PorductItemComponent;
  let fixture: ComponentFixture<PorductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorductItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
