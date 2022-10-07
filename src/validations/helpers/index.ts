import Joi from 'joi';

type ValidationsErrors = { [key: string]: string };

const getErrors = (obj: Joi.ValidationResult) => {
  const errors: ValidationsErrors = {};

  if (obj?.error) {
    obj.error.details.forEach(error => {
      errors[error.path[0]] = error.message;
    });
  }

  return errors;
};

const validateFields = <T extends {}>(fields: T, schemaValidation: Joi.Schema): Joi.ValidationResult => {
  const validation = schemaValidation.validate(fields);
  return validation;
};

const validateCustomFields = <T extends {}>(values: T, schemaValidation: Joi.Schema): T => {
  const validationErrors = validateFields(values, schemaValidation);

  const validatedFieldErros = getErrors(validationErrors) as T;

  return validatedFieldErros;
};

export { getErrors, validateCustomFields, validateFields };
