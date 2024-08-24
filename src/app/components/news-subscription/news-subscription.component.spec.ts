import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { NewsSubscriptionComponent } from './news-subscription.component';
import { selectSubscriber } from '../../store/selectors';

describe('NewsSubscriptionComponent', () => {
  let component: NewsSubscriptionComponent;
  let fixture: ComponentFixture<NewsSubscriptionComponent>;
  let store: MockStore;
  let messageService: MessageService;

  const initialState = { subscriber: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        FloatLabelModule,
        CalendarModule,
        MultiSelectModule,
        CheckboxModule,
        ButtonModule,
        ToastModule,
        NewsSubscriptionComponent,
      ],
      providers: [MessageService, provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    messageService = TestBed.inject(MessageService);

    fixture = TestBed.createComponent(NewsSubscriptionComponent);
    component = fixture.componentInstance;

    store.overrideSelector(selectSubscriber, null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on ngOnInit', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
    expect(component.form.controls['name']).toBeDefined();
    expect(component.form.controls['email']).toBeDefined();
    expect(component.form.controls['date']).toBeDefined();
    expect(component.form.controls['selectedGenres']).toBeDefined();
    expect(component.form.controls['agreement']).toBeDefined();
    expect(component.maxDate).toBeInstanceOf(Date);
  });
});
