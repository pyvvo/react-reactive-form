/* eslint react/prop-types: 0 */
// import React, { forwardRef } from 'react';
// import memoize from 'lodash/memoize';
// import isArray from 'lodash/isArray';
// import has from 'lodash/has';
// import find from 'lodash/find';
// import pick from 'lodash/pick';
// import capitalize from 'lodash/capitalize';
// import { Form, Tooltip, Input } from 'antd';
// import QuestionIcon from './QuestionIcon';
// const FormItem = Form.Item;

// const getValue = (obj, namePath) => {
//   const arr = typeof namePath === 'string' ? namePath.split('.') : namePath;
//   let current = obj;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (has(current, arr[i])) {
//       current = current[arr[i]];
//     } else {
//       return undefined;
//     }
//   }

//   return current;
// };

// const getWrappedComponentWithForwardRef = memoize((Comp) =>
//   forwardRef((props, ref) => (
//     <span ref={ref}>
//       <Comp {...props} />
//     </span>
//   ))
// );

// function FormBuilderField(props) {
//   const { field, meta, form } = props;

//   const label = field.tooltip ? (
//     <span>
//       {field.label}
//       <Tooltip title={field.tooltip}>
//         {' '}
//         <QuestionIcon />
//       </Tooltip>
//     </span>
//   ) : (
//     field.label
//   );

//   let formItemLayout =
//     field.formItemLayout ||
//     (field.label ? getValue(meta, 'formItemLayout') || [8, 16] : null);
//   if (isArray(formItemLayout) && formItemLayout.length >= 2) {
//     formItemLayout = {
//       labelCol: { span: formItemLayout[0] },
//       wrapperCol: { span: formItemLayout[1] }
//     };
//   }
//   const isFieldViewMode = meta.viewMode || field.viewMode || field.readOnly;
//   const formItemProps = {
//     key: field.key,
//     colon: meta.colon,
//     ...(meta.formItemLayout !== null ? formItemLayout : {}),
//     label,
//     ...pick(field, [
//       'help',
//       'extra',
//       'labelCol',
//       'wrapperCol',
//       'colon',
//       'htmlFor',
//       'noStyle',
//       'validateStatus',
//       'hasFeedback'
//     ]),

//     ...field.formItemProps,
//     className: `${
//       meta.viewMode
//         ? // eslint-disable-next-line no-useless-concat
//           'ant-form-item-view-mode' + 'ant-form-item-view-mode-v4'
//         : ''
//     } ${
//       field.className || (field.formItemProps && field.formItemProps.className)
//     }`
//   };

//   if (field.key || field.name) {
//     formItemProps.name = field.name || field.key.split('.');
//   }
//   Object.assign(formItemProps, {
//     noStyle: field.noFormItem || field.noStyle,
//     ...pick(field, ['shouldUpdate', 'dependencies'])
//   });

//   if (field.label && typeof field.label === 'string') {
//     formItemProps['data-label'] = field.label; // help e2e test
//   }
//   if (field.colSpan && formItemProps.labelCol && !field.formItemLayout) {
//     const labelCol = Math.round(formItemProps.labelCol.span / field.colSpan);
//     Object.assign(formItemProps, {
//       labelCol: { span: labelCol },
//       wrapperCol: { span: 24 - labelCol }
//     });
//   }

//   if (field.render) {
//     return field.render.call(this, {
//       formItemProps,
//       field,
//       form,
//       ...pick(props, ['disabled', 'viewMode', 'initialValues'])
//     });
//   }

//   let initialValue;
//   const initialValues = meta.initialValues || {};
//   if (has(field, 'initialValue')) {
//     initialValue = field.initialValue;
//   } else if (field.getInitialValue) {
//     initialValue = field.getInitialValue(field, initialValues, form);
//   } else {
//     initialValue = getValue(initialValues, field.name || field.key);
//   }

//   // Handle field props
//   const rules = [...(field.rules || [])];
//   if (field.required) {
//     rules.unshift({
//       required: true,
//       message: field.message || field.requiredMessage || undefined
//     });
//   }
//   const fieldProps = {
//     initialValue,
//     preserve: meta.preserve,
//     ...pick(field, [
//       'getValueFromEvent',
//       'getValueProps',
//       'normalize',
//       'trigger',
//       'preserve',
//       'valuePropName',
//       'validateTrigger',
//       'validateFirst'
//     ]),
//     rules,
//     ...field.fieldProps
//   };

//   Object.assign(formItemProps, fieldProps);

//   // Handle widget props
//   const wp = field.widgetProps || {};
//   const widgetProps = {
//     ...pick(field, ['placeholder', 'type', 'className', 'class', 'onChange']),
//     disabled: field.disabled || meta.disabled || props.disabled,
//     ...wp
//   };

//   let FieldWidget = field.widget || Input;

//   if (field.forwardRef) {
//     FieldWidget = getWrappedComponentWithForwardRef(FieldWidget);
//   }
//   const valueProps = {};
//   const ele = (
//     <FieldWidget {...widgetProps} {...valueProps}>
//       {field.children || null}
//     </FieldWidget>
//   );

//   // antd v4 always has form item
//   return <FormItem {...formItemProps}>{ele}</FormItem>;
// }

// export default FormBuilderField;
export {};
