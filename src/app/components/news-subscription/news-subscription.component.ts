import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Genre } from '../../models/genre.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Store } from '@ngrx/store';
import {
  getSubscriber,
  removeSubsciption,
  setSubscriberToLocalStorage,
} from '../../store/actions';
import { SubscriberData } from '../../models/subscriber.model';
import { takeUntil } from 'rxjs';
import { selectGenres, selectSubscriber } from '../../store/selectors';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';

@Component({
  selector: 'wom-news-subscription',
  standalone: true,
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    MultiSelectModule,
    CheckboxModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './news-subscription.component.html',
  styleUrl: './news-subscription.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSubscriptionComponent
  extends ClearObservable
  implements OnInit
{
  private messageService = inject(MessageService);
  private store = inject(Store);

  form!: FormGroup;
  maxDate: Date | null = null;
  emailRequiredError: string | null = null;

  selectedSubscriber$ = this.store.select(selectSubscriber);
  subscriber: SubscriberData | null = null;

  selectedGenres$ = this.store.select(selectGenres);
  genres: Genre[] | null = null;

  ngOnInit(): void {
    this.selectedSubscriber$
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.subscriber = response;
      });

    this.selectedGenres$.pipe(takeUntil(this.destroy$)).subscribe((respone) => {
      this.genres = respone;
    });

    if (!this.subscriber) this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      date: new FormControl<Date | null>(null, Validators.required),
      selectedGenres: new FormControl<Genre[]>([], Validators.required),
      agreement: new FormControl<boolean>(false, Validators.requiredTrue),
    });

    this.maxDate = new Date();
  }

  onSubmit() {
    if (this.form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'You have subscribed to our newsletter',
        key: 'br',
        life: 3000,
      });

      this.store.dispatch(
        setSubscriberToLocalStorage({ subscriber: this.form.value })
      );
      this.store.dispatch(getSubscriber());
    }
  }

  onUnsubscribe() {
    this.store.dispatch(removeSubsciption());

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'You have unsubscribed from our newsletter',
      key: 'br',
      life: 3000,
    });

    this.initForm();
    this.store.dispatch(getSubscriber());
  }
}
