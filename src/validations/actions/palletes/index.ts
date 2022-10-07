import { CreatePalleteDto } from '../../../dtos';
import { validateCustomFields } from '../../helpers';
import { createPalleteSchema } from '../../schemas';

const validateCreatePallete = (data: CreatePalleteDto) => validateCustomFields(data, createPalleteSchema);

export { validateCreatePallete };
