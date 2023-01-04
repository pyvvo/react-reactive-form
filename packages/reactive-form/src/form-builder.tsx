/* eslint-disable max-len */
import { ElementType, FunctionComponent } from 'react';
import { IReactiveField } from './reactive-fields/types';
// import PropTypes from 'prop-types';
// import isArray from 'lodash/isArray';
// import castArray from 'lodash/castArray';
// import find from 'lodash/find';
// import has from 'lodash/has';
// import { Col, Row, Form } from 'antd';
// import FormBuilderField from './FormBuilderField';

type FieldMapType<
  TField extends Record<string, any>,
  TValues extends Record<string, any> = Record<string, any>
> = Record<
  string,
  // (params: IReactiveField<any>) => JSX.Element
  ElementType<IReactiveField<TField, TValues>>
>;

const fieldMap: FieldMapType<any> = {};

// function getField(field: string | ElementType<IReactiveField<any>>) {
function getField<
  TField extends Record<string, any>,
  TValues extends Record<string, any>
>(field: string) {
  // if (!field) return null;
  // if (typeof field === 'string') {
  if (!fieldMap[field]) {
    throw new Error(
      `Field '${field}' not found, did you defined it by FormBuilder.defineComponent?`
    );
  }
  const component = fieldMap[field] as ElementType<
    IReactiveField<TField, TValues>
  >;
  return component;
  // }
  // return field;
}

interface IDefineComponent {
  name: string;
  component: FunctionComponent<IReactiveField<any>>;
}

const defineWidget = (params: IDefineComponent) => {
  const { name, component: ReactiveField } = params;

  if (fieldMap[name]) throw new Error(`Field "${name}" already defined.`);
  fieldMap[name] = ReactiveField;
};

export default {
  fieldMap,
  defineWidget,
  getField
};

// function normalizeMeta(meta) {
//   let fields = isArray(meta) ? meta : meta.fields || meta.elements;
//   if (!fields) fields = [meta];
//   fields = fields.map((field) => {
//     const widget = getWidget(field.widget);
//     const viewWidget = getWidget(field.viewWidget);
//     const dynamic = field.dynamic !== false;
//     // Find metaConvertor
//     const item = find(
//       Object.values(widgetMap),
//       (entry) =>
//         (entry.widget === widget || entry.widget === viewWidget) &&
//         entry.metaConvertor
//     );
//     if (item) {
//       const newField = item.metaConvertor(field);
//       if (!newField) {
//         throw new Error(
//           `metaConvertor of '${String(field.widget)}' must return a field`
//         );
//       }
//       return { ...newField, viewWidget, widget, dynamic };
//     }
//     return { ...field, widget, viewWidget, dynamic };
//   });
//   if (isArray(meta) || (!meta.fields && !meta.elements)) {
//     return { fields };
//   }
//   return {
//     ...meta,
//     fields
//   };
// }

// function FormBuilderInner(props) {
//   const { meta, initialValues, disabled = false, form = null } = props;
//   if (!meta) return null;

//   const newMeta = normalizeMeta(meta);
//   newMeta.initialValues = newMeta.initialValues || initialValues;
//   const { fields, columns = 1, gutter = 10 } = newMeta;
//   const elements = fields.map((field) => (
//     <FormBuilderField
//       key={field.key}
//       field={field}
//       disabled={disabled}
//       meta={newMeta}
//       form={form}
//     />
//   ));
//   if (columns === 1) {
//     return elements;
//   }

//   const rows = [];
//   // for each column , how many grid cols
//   const spanUnit = 24 / columns;
//   // eslint-disable-next-line
//   for (let i = 0; i < elements.length; ) {
//     const cols = [];
//     for (
//       let j = 0;
//       (j < columns || j === 0) && // total col span is less than columns
//       i < elements.length && // element exist
//       (!['left', 'both'].includes(fields[i].clear) || j === 0); // field doesn't need to start a new row

//     ) {
//       const fieldSpan = fields[i].colSpan || 1;
//       cols.push(
//         <Col key={j} span={Math.min(24, spanUnit * fieldSpan)}>
//           {elements[i]}
//         </Col>
//       );
//       j += fieldSpan;
//       if (['both', 'right'].includes(fields[i].clear)) {
//         i += 1;
//         break;
//       }
//       i += 1;
//     }
//     rows.push(
//       <Row key={i} gutter={gutter}>
//         {cols}
//       </Row>
//     );
//   }
//   return rows;
// }
