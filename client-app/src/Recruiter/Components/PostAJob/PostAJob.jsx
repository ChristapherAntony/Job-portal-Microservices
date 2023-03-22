import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { quickExperienceUpdate } from '../../../utils/Constants';
import Swal from 'sweetalert2';
import axios from 'axios';
import validationSchema from './validation';




function PostAJob() {
  const [currentStatus, setCurrentStatus] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  const formik = useFormik({
    initialValues: {
      job_title: '',
      company_name: '',
      skills_required: '',
      education_required: '',
      experience_required: '',
      base_salary: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      values.current_status = currentStatus;
      console.log(values);

      axios.post(quickExperienceUpdate(id), values).then(res => {
        Swal.fire({
          position: 'top-end',
          text: 'Success',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch((err) => {
        console.log(err.response.data.errors[0].msg);
        setError(err.response.data.errors[0].msg); // Set the error state
        setTimeout(() => {
          setError(null);
        }, 8000);
      })

    },
  });

  const nextHandle = () => {
    navigate('/candidate/signin')
  }


  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Post a job
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
          <div>
            <label className="text-gray-700 text-sm" htmlFor="job_title">
              Job Title
            </label>
            <input
              id="job_title"
              type="text"
              name="job_title"
              placeholder='Eg. Web Developer, Acountant'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.job_title}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.job_title && formik.errors.job_title ? (
              <div className="text-red-500 text-sm">{formik.errors.job_title}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="username">
              Number of posts
            </label>
            <input
              id="company_name"
              type='number'
              name="company_name"
              placeholder='Enter number of posts'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_name}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.company_name && formik.errors.company_name ? (
              <div className="text-red-500 text-sm">{formik.errors.company_name}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="skills_required">
              Skills required
            </label>
            <input
              id="skills_required"
              type="text"
              name="skills_required"
              placeholder='Skills'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.skills_required}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.skills_required && formik.errors.skills_required ? (
              <div className="text-red-500 text-sm">{formik.errors.skills_required}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="education_required">
              Education Required
            </label>
            <input
              id="education_required"
              type="text"
              name="education_required"
              placeholder='Education '
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education_required}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.education_required && formik.errors.education_required ? (
              <div className="text-red-500 text-sm">{formik.errors.education_required}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="experience_required">
              Experience
            </label>
            <input
              id="experience_required"
              type="text"
              name="experience_required"
              placeholder='Experience'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.experience_required}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.experience_required && formik.errors.experience_required ? (
              <div className="text-red-500 text-sm">{formik.errors.experience_required}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="username">
              Number of posts
            </label>
            <input
              id="company_name"
              name="company_name"
              placeholder='Enter number of posts'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_name}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.company_name && formik.errors.company_name ? (
              <div className="text-red-500 text-sm">{formik.errors.company_name}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="base_salary">
              Base salary
            </label>
            <input
              id="base_salary"
              type="text"
              name="base_salary"
              placeholder='Salary'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.base_salary}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.base_salary && formik.errors.base_salary ? (
              <div className="text-red-500 text-sm">{formik.errors.base_salary}</div>
            ) : null}
          </div>
          <div>
            <label className="text-gray-700 text-sm" htmlFor="employment_type">
              Job type
            </label>
            <input
              id="employment_type"
              name="employment_type"
              placeholder='Type of employment'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.employment_type}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
            {formik.touched.employment_type && formik.errors.employment_type ? (
              <div className="text-red-500 text-sm">{formik.errors.employment_type}</div>
            ) : null}
          </div>
        </div>
        <div className=' col-span-2 p-5'>
          <label for="Description" className="block text-sm text-gray-500">Job Description</label>
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.job_description} name='job_description' placeholder="Add you job and responsibilities" className="block  mt-2 w-full placeholder-gray-400/70rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "></textarea>

          <p className="mt-3 text-xs text-gray-400"> </p>
          {formik.touched.job_description && formik.errors.job_description ? (
            <div className="text-red-500 text-sm">{formik.errors.job_description}</div>
          ) : null}
        </div>


        <div className="flex justify-end mt-6">
          <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Add
          </button>
        </div>
      </form>
      <button onClick={nextHandle} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>

    </section>
  )
}

export default PostAJob