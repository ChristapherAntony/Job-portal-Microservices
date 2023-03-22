
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import validationSchema from './validation';
import { quickProfileUpdate, quickProfileUpdateRecruiter } from '../../../utils/Constants';

function QuickProfile() {
    const navigate = useNavigate();
    //for storing the file of profile image and logo
    const [image, setImage] = useState(null);
    const [logo, setLogo] = useState(null);
    //image for rendering in the image box
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/dprxebwil/image/upload/v1679341215/Recruiter/recruiter-images.jpeg.jpg');
    const [logoUrl, setLogoUrl] = useState('https://res.cloudinary.com/dprxebwil/image/upload/v1679465490/cropped-logo-dummy_hrxo7q.png');

    const [error, setError] = useState("")
    const { id } = useParams();



    const handleFileChangeImg = (event) => {
        const selectedFile = event.target.files[0];
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        setImage(selectedFile)
    };
    const handleFileChangeLogo = (event) => {
        const selectedFile = event.target.files[0];
        setLogoUrl(URL.createObjectURL(event.target.files[0]));
        setLogo(selectedFile)
    };



    const formik = useFormik({
        initialValues: {
            user_name: 'John Doe',
            email: 'johndoe@gmail.com',
            phone_number: '8547486704',
            current_position: 'Software Developer',
            profile_image: null,
            company_name: 'Acme Corporation',
            company_logo: null,
            company_website: 'https://www.acme.com',
            company_email: 'info@acme.com',
            company_location: '123 Main St',
            company_state: 'CA',
            company_country: 'USA',
            company_description: 'Acme Corporation is a leading provider of widgets and gadgets.',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('user_name', values.user_name);
            formData.append('email', values.email);
            formData.append('phone_number', values.phone_number);
            formData.append('current_position', values.current_position);
            formData.append('profile_image', image); //file from the state
            formData.append('company_name', values.company_name);
            formData.append('company_logo', logo); //file from teh state
            formData.append('company_website', values.company_website);
            formData.append('company_email', values.company_email);
            formData.append('company_location', values.company_location);
            formData.append('company_state', values.company_state);
            formData.append('company_country', values.company_country);
            formData.append('company_description', values.company_description);

            axios.post(quickProfileUpdateRecruiter(id), formData)
                .then((res) => {
                    console.log(res);
                    navigate(`/recruiter/signin`);
                })
                .catch((err) => {
                    console.log(err.response.data.errors[0].msg);
                    setError(err.response.data.errors[0].msg); // Set the error state
                    setTimeout(() => {
                        setError(null);
                    }, 8000);
                });
        },
    });




    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-md m-10">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
                Quickly Review and update your profile
            </h2>
            <form onSubmit={formik.handleSubmit}>


                <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                    <div>
                        <label className="text-gray-700 text-sm" htmlFor="username">
                            Full name
                        </label>
                        <input
                            id="username"
                            name="user_name"
                            type="text"
                            value={formik.values.user_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.user_name && formik.errors.user_name
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.user_name && formik.errors.user_name ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.user_name}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex items-center gap-x-2">
                        <img
                            className="object-cover w-16 h-16 rounded-lg"
                            src={imageUrl}
                            alt=""
                        />
                        <div>
                            <label className="block text-sm  text-gray-700">Profile Image</label>

                            <input
                                name='profile_image'
                                type="file"
                                accept="image/*"
                                value={formik.values.profile_image}
                                onChange={(event) => {
                                    event.persist(); // Add this line to persist the event object
                                    formik.handleChange(event);
                                    handleFileChangeImg(event);
                                }}

                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched.profile_image && formik.errors.profile_image
                                        ? 'validation-false'
                                        : 'validation-true'
                                }
                            />
                            {formik.touched.profile_image && formik.errors.profile_image ? (
                                <p className="mt-1 text-xs font-medium text-red-500">
                                    {formik.errors.profile_image}
                                </p>
                            ) : null}
                        </div>

                    </div>
                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="emailAddress"
                        >
                            Email Address
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.email && formik.errors.email
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.email}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label className="text-gray-700 text-sm" >
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="number"
                            name='phone_number'
                            value={formik.values.phone_number}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.phone_number && formik.errors.phone_number
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.phone_number && formik.errors.phone_number ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.phone_number}
                            </p>
                        ) : null}
                    </div>


                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="Designation"
                        >
                            Current Designation
                        </label>
                        <input
                            id="current_position"
                            type="text"
                            name='current_position'
                            value={formik.values.current_position}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.current_position && formik.errors.current_position
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.current_position && formik.errors.current_position ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.current_position}
                            </p>
                        ) : null}
                    </div>


                </div>
                {/* company details */}
                <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5">
                    <div>
                        <label className="text-gray-700 text-sm" htmlFor="username">
                            Company / Organization Name
                        </label>
                        <input
                            id="company_name"
                            name="company_name"
                            type="text"
                            value={formik.values.company_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_name && formik.errors.company_name
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_name && formik.errors.company_name ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_name}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex items-center gap-x-2">
                        <img
                            className="object-cover w-16 h-16 rounded-lg"
                            src={logoUrl}
                            alt=""
                        />
                        <div>
                            <label className="block text-sm  text-gray-700">Company / Organization Logo </label>

                            <input
                                name='company_logo'
                                type="file"
                                accept="image/*"
                                value={formik.values.company_logo}
                                onChange={(event) => {
                                    event.persist(); // Add this line to persist the event object
                                    formik.handleChange(event);
                                    handleFileChangeLogo(event);
                                }}

                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched.company_logo && formik.errors.company_logo
                                        ? 'validation-false'
                                        : 'validation-true'
                                }
                            />
                            {formik.touched.company_logo && formik.errors.company_logo ? (
                                <p className="mt-1 text-xs font-medium text-red-500">
                                    {formik.errors.company_logo}
                                </p>
                            ) : null}
                        </div>

                    </div>
                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="emailAddress"
                        >
                            Company / Organization Website
                        </label>
                        <input
                            id="company_website"
                            type="text"
                            name='company_website'
                            value={formik.values.company_website}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_website && formik.errors.company_website
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_website && formik.errors.company_website ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_website}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label className="text-gray-700 text-sm" >
                            Email Address
                        </label>
                        <input
                            id="company_email"
                            type="email"
                            name='company_email'
                            value={formik.values.company_email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_email && formik.errors.company_email
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_email && formik.errors.company_email ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_email}
                            </p>
                        ) : null}
                    </div>


                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="Designation"
                        >
                            Location
                        </label>
                        <input
                            id="company_location"
                            type="text"
                            name='company_location'
                            value={formik.values.company_location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_location && formik.errors.company_location
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_location && formik.errors.company_location ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_location}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="Designation"
                        >
                            State
                        </label>
                        <input
                            id="company_state"
                            type="text"
                            name='company_state'
                            value={formik.values.company_state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_state && formik.errors.company_state
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_state && formik.errors.company_state ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_state}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="Designation"
                        >
                            Country
                        </label>
                        <input
                            id="company_country"
                            type="text"
                            name='company_country'
                            value={formik.values.company_country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.company_country && formik.errors.company_country
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.company_country && formik.errors.company_country ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.company_country}
                            </p>
                        ) : null}
                    </div>


                </div>
                <div className=' col-span-2 p-5'>
                    <label className="block text-sm text-gray-500">Company description </label>

                    <textarea
                        name='company_description' placeholder="Add a description about your organization."
                        value={formik.values.company_description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                            formik.touched.company_description && formik.errors.company_description
                                ? 'validation-false'
                                : 'validation-true'
                        }
                    ></textarea>
                    {formik.touched.company_description && formik.errors.company_description ? (
                        <p className="mt-1 text-xs font-medium text-red-500">
                            {formik.errors.company_description}
                        </p>
                    ) : null}
                </div>
                {error && (
                    <p className='text-red-500'>
                        {error}
                    </p>
                )}
                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Next
                    </button>
                </div>
            </form>
        </section>

    )
}

export default QuickProfile