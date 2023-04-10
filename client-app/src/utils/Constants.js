export const baseUrl = "https://careerconnect.dev";

export const signUp = '/api/v1/auth/signup';
export const signIn = '/api/v1/auth/signin';
export const signOut = '/api/v1/auth/signout';
export const emailVerify = '/api/v1/auth/email-verify';
export const otpVerify = '/api/v1/auth/otp-verify';
export const currentUser = '/api/v1/auth/current';
export const googleSignIn = '/api/v1/auth/google-signin';


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
export const quickProfileUpdateRecruiter = (id) => `/api/v1/profile/recruiter/${id}`;
export const CANDIDATE_PROFILE=(id) => `/api/v1/profile/recruiter/candidate/${id}`;
export const APPLICATION_REJECT=(id) => `/api/v1/jobs/application/reject/${id}`;
export const APPLICATION_SKILLTEST=(applicationId,testId) => `/api/v1/jobs/application/skill-test?applicationId=${applicationId}&testId=${testId}`;

export const APPLICATION_STATUS=(id) => `/api/v1/jobs/application/${id}`;

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
export const updateJob =(id)=> `/api/v1/jobs/${id}`       //put
export const jobDetails =(id)=> `/api/v1/jobs/details/${id}`;     //get all
export const applyJob = (id)=> `/api/v1/jobs/apply/${id}`                    //post 

export const getApplicatons = (id)=> `/api/v1/jobs/posted-details/${id}`   //get


export const appliedjobsList = '/api/v1/jobs/applied';   

export const getJobApplication=(jobId) => `/api/v1/jobs/applied/${jobId}/details`;


export const jobKeySearch =(key)=>`/api/v1/jobs/jobkey?key=${key}`
export const placeKeySearch =(key)=>`/api/v1/jobs/placekey?key=${key}`
export const companyKeySearch =(key)=>`/api/v1/jobs/companykey?key=${key}`
// export const searchJobs =(jobKey,locationKey)=>`/api/v1/jobs/placekey?jobKey=${jobKey}`


//skill test

export const addNewTest=`/api/v1/skill-test/add`
export const skillTestList=`/api/v1/skill-test/list`
export const skillTestDetails=(id)=>`/api/v1/skill-test/list/details/${id}`
export const deleteTest=(id)=>`/api/v1/skill-test/${id}`

export const TAKE_SKILL_TEST=(applicationId)=>`/api/v1/skill-test/test-questions/${applicationId}`





/*=========REACT ROUTES============ */










