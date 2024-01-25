import * as yup from 'yup';

import { validationMessages } from '../common/consts';

export const userFormSchema = yup.object({
  email: yup.string().email().required(validationMessages.REQUIRED),
  password: yup
    .string()
    .min(5, validationMessages.SHORT)
    .max(30, validationMessages.LONG)
    .required(validationMessages.REQUIRED)
});

export const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .min(5, validationMessages.SHORT)
    .max(30, validationMessages.LONG)
    .required(validationMessages.REQUIRED),
  newPassword: yup
    .string()
    .min(5, validationMessages.SHORT)
    .max(30, validationMessages.LONG)
    .required(validationMessages.REQUIRED)
});

export const recoverPasswordSchema = yup.object({
  email: yup.string().email().required(validationMessages.REQUIRED)
});

export const recoverConfirmationPasswordSchema = yup.object({
  password: yup
    .string()
    .min(5, validationMessages.SHORT)
    .max(30, validationMessages.LONG)
    .required(validationMessages.REQUIRED)
});
