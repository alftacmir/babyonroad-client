import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueletoComponent } from './esqueleto.component';

describe('EsqueletoComponent', () => {
  let component: EsqueletoComponent;
  let fixture: ComponentFixture<EsqueletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsqueletoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsqueletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
