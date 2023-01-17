import {
  FormBuilder,
  ReactiveAutocomplete,
  ReactiveCheckbox,
  ReactiveMultiSelect,
  ReactiveNumberField,
  ReactivePasswordField,
  ReactiveRadio,
  ReactiveRange,
  ReactiveSelect,
  ReactiveSwitch,
  ReactiveTextField
} from '@hm/ui';

FormBuilder.defineWidget({ name: 'text', component: ReactiveTextField });
FormBuilder.defineWidget({ name: 'number', component: ReactiveNumberField });
FormBuilder.defineWidget({
  name: 'password',
  component: ReactivePasswordField
});
FormBuilder.defineWidget({ name: 'checkbox', component: ReactiveCheckbox });
FormBuilder.defineWidget({ name: 'switch', component: ReactiveSwitch });

FormBuilder.defineWidget({
  name: 'autocomplete',
  component: ReactiveAutocomplete
});
FormBuilder.defineWidget({
  name: 'multi-select',
  component: ReactiveMultiSelect
});
FormBuilder.defineWidget({ name: 'radio', component: ReactiveRadio });
FormBuilder.defineWidget({ name: 'range', component: ReactiveRange });
FormBuilder.defineWidget({ name: 'select', component: ReactiveSelect });
