import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    job_title: Yup.string().required('Job title is required'),
    company_name: Yup.string().required('Number of posts is required'),
    skills_required: Yup.string().required('Skills required is required'),
    education_required: Yup.string().required('Education is required'),
    experience_required: Yup.string().required('Experience is required'),
    base_salary: Yup.number().required('Base salary is required'),
});

export default validationSchema;
