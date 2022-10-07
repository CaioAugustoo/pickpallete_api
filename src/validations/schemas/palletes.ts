import joi from 'joi';
import { HEX_COLOR_REGEX } from '../regexes';

const baseSchema = joi.string().required().regex(HEX_COLOR_REGEX).messages({
  'string.empty': 'Campo não pode estar vazio',
  'string.required': 'Campo é obrigatório.',
});

const createPalleteSchema = joi.object({
  color1: baseSchema,
  color2: baseSchema,
  color3: baseSchema,
  color4: baseSchema,
});

export { createPalleteSchema };
