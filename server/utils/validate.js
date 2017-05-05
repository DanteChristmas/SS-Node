//Base Validations
export function isNotUndefined(item){
  return typeof item !== 'undefined';
}

export function isNotNull(item){
  return item !== null;
}

export function isNotEmptyString(item){
  return item !== '';
}

export function isSet(item){
  return isNotUndefined(item) &&
          isNotNull(item) &&
          isNotEmptyString(item);
}

//Array and Object Validation
export function hasLength(item){
  return isSet(item) &&
          isSet(item.length);
}

export function hasProperty(item, property){
  return isSet(item) &&
          isSet(property) &&
          item.hasOwnProperty(property);
}

//Type Validation
export function isString(item){
  return typeof item === 'string';
}

export function isNumber(item){
  return typeof item === 'number';
}

export function isBoolean(item){
  return typeof item === 'boolean';
}

export function isObject(item){
  return isNotNull(item) &&
          typeof item === 'object';
}
