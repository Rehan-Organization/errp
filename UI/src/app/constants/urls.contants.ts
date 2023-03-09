 import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    FEEDBACK: '/api/v1',
    SAVEFEEDBACK :'/feedback/saveFeedback',
    FETCHREPORTEES:'/feedback/getReportees',
    FETCHFEEDBACKS:'/feedback/getFeedbacks?isMyFeedback=',
    DELETEFEEDBACK:'/feedback/removeFeedback/',
    FETCHFEEDBACK:'/feedback/getFeedback/',
    UPDATEFEEDBACK:'/feedback/updateFeedback/',
    USER_CONTEXT: '/userContext'
}