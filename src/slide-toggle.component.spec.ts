import { TestBed, async } from '@angular/core/testing';
import { SlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SlideToggleComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the slide toggle', async(() => {
    const fixture = TestBed.createComponent(SlideToggleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
