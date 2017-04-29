'use strict'

export function handleChange(component, field, value) {
  let obj = {};
  obj[field] = value;
  component.setState(obj);
}