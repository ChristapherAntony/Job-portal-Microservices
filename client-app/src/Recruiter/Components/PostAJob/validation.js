import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    job_title: Yup.string()
        .required('Job title is required'),
    available_positions: Yup.number()
        .required('Number of positions is required')
        .positive('Number of positions must be positive')
        .integer('Number of positions must be an integer'),
    // skills_required: Yup.string()
    //     .required('Skills required is required'),
    // education_required: Yup.string()
    //     .required('Education required is required'),
    experience_required: Yup.string()
        .required('Experience required is required'),
    location: Yup.string()
        .required('Location is required'),
    base_salary: Yup.number()
        .required('Base salary is required')
        .positive('Base salary must be positive')
        .integer('Base salary must be an integer'),
    // employment_type: Yup.string()
    //     .required('Employment type is required'),
    deadline: Yup.date()
        .required('Employment type is required'),
    job_description: Yup.string()
        .required('Job description is required'),
});

export default validationSchema;
