import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    test_title: Yup.string()
        .required('Test name is required'),
    time_per_question: Yup.string()
        .required('Time alloted per question is required'),
    pass_percentage: Yup.string()
        .required('Pass Percentage is required'),

    description: Yup.string().required('Company description is required'),
});

export default validationSchema;