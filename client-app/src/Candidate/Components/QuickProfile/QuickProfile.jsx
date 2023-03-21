
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import validationSchema from './validation';
import { quickProfileUpdate } from '../../../utils/Constants';

function QuickProfile() {
    const navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/dprxebwil/image/upload/v1679341215/Recruiter/recruiter-images.jpeg.jpg');
    const [pdf, setPdf] = useState(null);
    const [error, setError] = useState("")
    const { id } = useParams();

    const handleAddSkill = () => {
        const skillInput = document.getElementById('skills');
        const newSkill = skillInput.value.toLowerCase();
        if (newSkill) {
            setSkills(prevState => [...prevState, newSkill]);
            skillInput.value = '';
        }
    };
    const [file, setFile] = useState(null);

    const handleFileChangeImg = (event) => {
        const selectedFile = event.target.files[0];
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        setImage(selectedFile)
    };
    const handleFileChangePdf = (event) => {
        const selectedFile = event.target.files[0];
        setPdf(selectedFile)
    };


    const formik = useFormik({
        initialValues: {
            user_name: 'Christapher',
            profile_image: undefined,
            about: 'nothing',
            phone_number: '9446655316',
            email: 'christapher012@gmail.com',
            curriculum_vitae: undefined,
            bio: 'hello',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("button clicked");
            const formData = new FormData();
            formData.append('user_name', values.user_name);
            formData.append('profile_image', image);
            formData.append('about', values.about);
            formData.append('email', values.email);
            formData.append('phone_number', values.phone_number);
            formData.append('curriculum_vitae', pdf);
            formData.append('key_skills', skills);
            formData.append('bio', values.bio);
            axios.patch(quickProfileUpdate(id), formData).then(res => {
                navigate(`/candidate/quick-experience/${id}`);
            }).catch((err) => {
                console.log(err.response.data.errors[0].msg);
                setError(err.response.data.errors[0].msg); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            })
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
                                onChange={() => { formik.handleChange; handleFileChangeImg }}
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
                        <label className="text-gray-700 text-sm" htmlFor="username">
                            About
                        </label>
                        <input
                            id="username"
                            name="about"
                            type="text"
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.about && formik.errors.about
                                    ? 'validation-false'
                                    : 'validation-true'
                            } />
                        {formik.touched.about && formik.errors.about ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.about}
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
                        <label className="block text-sm  text-gray-700">Upload CV</label>

                        <input
                            name='curriculum_vitae' type="file"
                            value={formik.values.curriculum_vitae}
                            onChange={handleFileChangePdf}
                            onBlur={formik.handleBlur}
                            accept="application/pdf"
                            className={
                                formik.touched.curriculum_vitae && formik.errors.curriculum_vitae
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.curriculum_vitae && formik.errors.curriculum_vitae ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.curriculum_vitae}
                            </p>
                        ) : null}
                    </div>
                    <div className=''>
                        <label
                            className="text-gray-700 text-sm"
                            htmlFor="skill"
                        >
                            Add Skills
                        </label>
                        <input
                            id="skills"
                            type="text"
                            name='key_skills'
                            //value={formik.values.key_skills}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.touched.key_skills && formik.errors.key_skills
                                    ? 'validation-false'
                                    : 'validation-true'
                            }
                        />
                        {formik.touched.key_skills && formik.errors.key_skills ? (
                            <p className="mt-1 text-xs font-medium text-red-500">
                                {formik.errors.key_skills}
                            </p>
                        ) : null}

                        <button
                            type="button"
                            onClick={handleAddSkill}
                            className="inline-block rounded border-2 border-green-600 px-5 text-xs font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:border-black hover:bg-green-600 hover:bg-opacity-10 hover:text-black focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700"
                            data-te-ripple-init>
                            Add
                        </button>
                        {skills.map((skill, index) => (
                            <span key={index} className="inline-block border-1 rounded-full bg-lightBlue px-3 py-1 text-xs font-medium text-black border-gray-600  mr-2 mb-2">
                                {skill}
                            </span>
                        ))}

                    </div>


                </div>
                <div className=' col-span-2 p-5'>
                    <label className="block text-sm text-gray-500">Bio</label>

                    <textarea
                        name='bio' placeholder="Add a bio to you profile."
                        value={formik.values.bio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                            formik.touched.bio && formik.errors.bio
                                ? 'validation-false'
                                : 'validation-true'
                        }
                    ></textarea>
                    {formik.touched.bio && formik.errors.bio ? (
                        <p className="mt-1 text-xs font-medium text-red-500">
                            {formik.errors.bio}
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