import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    user_name: Yup.string()
        .required('Full name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phone_number: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number format')
        .required('Phone number is required'),
    current_position: Yup.string()
        .required('Current position is required'),
    profile_image: Yup.mixed().required('Profile image is required'),
    company_name: Yup.string().required('Company name is required'),
    // company_logo: Yup.mixed()
    //     .test('fileSize', 'File size is too large', value => {
    //         if (!value) return true; // Handle empty file
    //         return value.size <= 2000000; // 2MB file size limit
    //     })
    //     .test('fileType', 'Unsupported file type', value => {
    //         if (!value) return true; // Handle empty file
    //         return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    //     }),
    company_logo: Yup.mixed().required('Profile image is required'),
    company_website: Yup.string()
        .url('Invalid URL format')
        .required('Company website is required'),
    company_email: Yup.string()
        .email('Invalid email format')
        .required('Company email is required'),
    company_location: Yup.string().required('Company location is required'),
    company_state: Yup.string().required('Company state is required'),
    company_country: Yup.string().required('Company country is required'),
    company_description: Yup.string().required('Company description is required'),
});

export default validationSchema;