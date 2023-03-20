import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Full name is required'),
    profile_image: Yup.mixed().required('Profile image is required'),
    about: Yup.string().required('About is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(
            /^[0-9]*$/,
            'Phone number can only contain numbers'
        ),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
    curriculum_vitae: Yup.mixed().required('Curriculum vitae is required'),
    key_skills: Yup.mixed().required('Curriculum vitae is required'),
    bio: Yup.string().required('Bio is required'),
})

export default validationSchema;