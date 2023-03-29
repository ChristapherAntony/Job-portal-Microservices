export const baseUrl = "https://careerconnect.dev";



//apis from server--------------------------------------------------------------------------------------------------
export const signUp = '/api/v1/auth/signup';
export const signIn = '/api/v1/auth/signin';
export const signOut = '/api/v1/auth/signout';
export const emailVerify = '/api/v1/auth/email-verify';
export const otpVerify = '/api/v1/auth/otp-verify';

export const currentUser = '/api/v1/auth/current';

// profile servies
//----candidate
export const getProfile = '/api/v1/profile/candidate';
export const quickProfileUpdate = (id) => `/api/v1/profile/candidate/quick-update/${id}`
export const quickExperienceUpdate = (id) => `/api/v1/profile/candidate/quick-experience-update/${id}`

export const updateProfileImage = '/api/v1/profile/candidate/profile-picture';
export const deleteProfileImage = '/api/v1/profile/candidate/profile-picture';

export const updateAbout = '/api/v1/profile/candidate/about';
export const updateBio = '/api/v1/profile/candidate/bio';
export const updatePersonalInfo = '/api/v1/profile/candidate/personal-info';

export const updateCV = '/api/v1/profile/candidate/curriculum-vitae';  //patch
export const deleteCV = '/api/v1/profile/candidate/curriculum-vitae';  //delete


export const experienceAdd  = `/api/v1/profile/candidate/work-experience`
export const experienceDelete = (id) => `/api/v1/profile/candidate/work-experience/${id}`

export const educationAdd  = '/api/v1/profile/candidate/education'
export const educationDelete = (id) => `/api/v1/profile/candidate/education/${id}`

export const certificationAdd  = '/api/v1/profile/candidate/course-certification'                 //post
export const certificationUpdate = (id) => `/api/v1/profile/candidate/course-certification/${id}` //put
export const certificationDelete = (id) => `/api/v1/profile/candidate/course-certification/${id}` //delete

//----recruiter
export const getRecruiterProfile = '/api/v1/profile/recruiter';
export const quickProfileUpdateRecruiter = (id) => `/api/v1/profile/recruiter/${id}`



// Admin servies
export const getUsers = '/api/v1/admin/candidates';
export const blockCandidate = '/api/v1/admin/candidate-block';
export const unblockCandidate = '/api/v1/admin/candidate-unblock';
export const getRecruiters = '/api/v1/admin/recruiters';
export const blockRecruiters = (id) => `/api/v1/admin/recruiter-block/${id}`
export const unblockRecruiters = (id) => `/api/v1/admin/recruiter-unblock/${id}`

export const viewApplicationByStatus = '/api/v1/admin/recruiter-applications-by-status'//status;
export const applicationDetails = (id) => `/api/v1/admin/recruiter-applications/${id}`;
export const recruiterVerifyUrl = (id, action) => `/api/v1/admin/recruiter-verify/${id}/${action}`;


// Jobs services
export const postJob = '/api/v1/jobs';                    //post all
export const jobPosted = '/api/v1/jobs/posted';           //get all
export const jobDetails =(id)=> `/api/v1/jobs/details/${id}`;     //get all





/*=========REACT ROUTES============ */










