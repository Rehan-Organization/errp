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
    USER_CONTEXT: '/userContext',

    ALL_AWARD_LIST: '/awardTypes/',
    NEW_AWARD_TYPE: '/awardTypes/',
    UPDATE_AWARD_TYPE: '/awardTypes/',
    GET_AWARD_TYPE:'/awardTypes/',
    // USER_CONTEXT: '/awardTypes/userContext',
    GET_LEADERBOARD_LIST : '/leaderboard',
    GET: '/achievement',
    UPDATE: '/achievement',
    DELETE: '/achievement',
    SUBMIT: '/achievement/submit',
    SAVE: '/achievement',
    GET_PAGINATED: '/achievement/paginated'
    

}