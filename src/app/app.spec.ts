import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { MOCK_EVENTS } from './mock-events';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the campus event list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.event-row').length).toBe(MOCK_EVENTS.length);
    expect(compiled.querySelector('.event-detail')).toBeNull();
  });

  it('should show the selected event details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelectorAll<HTMLButtonElement>('.event-row')[0].click();
    fixture.detectChanges();

    expect(compiled.querySelector('.event-detail h3')?.textContent).toContain(MOCK_EVENTS[0].title);
    expect(compiled.querySelector('.event-detail')?.textContent).toContain('120 places');
  });

  it('should show when an event capacity is not provided', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelectorAll<HTMLButtonElement>('.event-row')[2].click();
    fixture.detectChanges();

    expect(compiled.querySelector('.event-detail')?.textContent).toContain('Non communiquée');
  });
});
