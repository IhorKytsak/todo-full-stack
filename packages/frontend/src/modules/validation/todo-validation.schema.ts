import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Too short').max(25, 'Too long').required('Title is required'),
  description: Yup.string()
    .min(5, 'Too short')
    .max(100, 'Too long')
    .required('Description is required'),
  isCompleted: Yup.boolean().default(false),
  isPrivate: Yup.boolean().default(false)
});
