import * as yup from 'yup';
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const basicInfoValidation = yup.object().shape({
  companyName: yup.string().required('Company Name is mandatory'),
  email: yup.string().nullable().email('Email address should be valid'),
  type: yup.object().required('Type is mandatory'),
  mobile: yup
    .string()
    .nullable()
    .matches(phoneRegExp, 'Mobile number is not valid'),
  code: yup.string().nullable(),
  website: yup.string().nullable().url('Invalid URL eg:https://www.google.com'),
  office: yup.string().nullable(),
  contact_name: yup.string().nullable(),
});

export const locationValidation = yup.object().shape({
  address: yup.object().required('Address is mandatory'),
});

export const salesPersonValidationSchema = yup.object().shape({
  name: yup.object().nullable(),
});

export const notesValidationSchema = yup.object().shape({
  message: yup.string().nullable(),
});
export const contactInfoValidationSchema = yup.object().shape({
  contact_information: yup.array().of(
    yup.object().shape({
      mobile: yup
        .string()
        .nullable()
        .matches(phoneRegExp, 'Mobile number is not valid'),
      email: yup.string().nullable().email('Email address should be valid'),
      code: yup.string().nullable(),
      office: yup.string().nullable(),
      website: yup.string().nullable().url('Website URL should be valid'),
    }),
  ),
});

export const addressValidationSchema = yup.object().shape({
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  zip: yup.string().nullable(),
  unit: yup.string().nullable(),
  state: yup.string().nullable(),
  country: yup.string().nullable(),
});
