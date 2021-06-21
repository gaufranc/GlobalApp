import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftohtmlComponent } from './pdftohtml.component';

describe('PdftohtmlComponent', () => {
  let component: PdftohtmlComponent;
  let fixture: ComponentFixture<PdftohtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdftohtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftohtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
