import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    FEEDBACK: '/api/v1',
    SAVEFEEDBACK :'/api/v1/saveFeedback',
    FETCHREPORTEES:'/api/v1/getReportees',
    FETCHFEEDBACKS:'/api/v1/getFeedbacks',
    DELETEFEEDBACK:'/api/v1/removeFeedback'
}