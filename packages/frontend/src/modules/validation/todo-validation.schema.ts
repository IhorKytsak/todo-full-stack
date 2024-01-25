import * as Yup from 'yup';

import { validationMessages } from '../common/consts';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, validationMessages.SHORT)
    .max(25, validationMessages.LONG)
    .required(validationMessages.REQUIRED),
  description: Yup.string()
    .min(5, validationMessages.SHORT)
    .max(100, validationMessages.LONG)
    .required(validationMessages.REQUIRED),
  isCompleted: Yup.boolean().default(false),
  isPrivate: Yup.boolean().default(false)
});
