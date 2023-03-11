 import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    FEEDBACK: '/api/v1',
    SAVEFEEDBACK :'/feedback',
    FETCHREPORTEES:'/feedback/getReportees',
    FETCHFEEDBACKS:'/feedback/?isMyFeedback=',
    DELETEFEEDBACK:'/feedback/',
    FETCHFEEDBACK:'/feedback/',
    UPDATEFEEDBACK:'/feedback/',
    USER_CONTEXT: '/userContext'
}