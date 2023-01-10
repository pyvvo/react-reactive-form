import {
  FormBuilder,
  ReactiveCheckbox,
  ReactiveSwitch,
  ReactiveTextField
} from '@hm-ui/reactive-form';

FormBuilder.defineWidget({ name: 'text', component: ReactiveTextField });
FormBuilder.defineWidget({ name: 'checkbox', component: ReactiveCheckbox });
FormBuilder.defineWidget({ name: 'switch', component: ReactiveSwitch });
