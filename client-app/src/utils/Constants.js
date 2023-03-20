export const baseUrl = "https://careerconnect.dev";





export const signUp = '/api/v1/auth/signup';
export const signIn = '/api/v1/auth/signin';
export const signOut = '/api/v1/auth/signout';
export const emailVerify = '/api/v1/auth/email-verify';
export const otpVerify = '/api/v1/auth/otp-verify';

export const quickProfileUpdate = (id) => `/api/v1/profile/candidate/quick-update/${id}`



export const getUsers = '/api/v1/admin/candidates';
export const blockCandidate = '/api/v1/admin/candidate-block';
export const unblockCandidate = '/api/v1/admin/candidate-unblock';

export const getRecruiters = '/api/v1/admin/recruiters';
export const blockRecruiters = (id) => `/api/v1/admin/recruiter-block/${id}`
export const unblockRecruiters = (id) => `/api/v1/admin/recruiter-unblock/${id}`




export const viewApplicationByStatus = '/api/v1/admin/recruiter-applications-by-status'//status;
export const applicationDetails = (id) => `/api/v1/admin/recruiter-applications/${id}`;
export const recruiterVerifyUrl = (id, action) => `/api/v1/admin/recruiter-verify/${id}/${action}`;





