import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    USER_CONTEXT: '/userContext',
    GET: '/achievement',
    UPDATE: '/achievement',
    DELETE: '/achievement',
    SUBMIT: '/achievement/submit',
    SAVE: '/achievement',
    GET_PAGINATED: '/achievement/paginated',
    ALL_AWARD_LIST: '/awardTypes/',
    NEW_AWARD_TYPE: '/awardTypes/',
    UPDATE_AWARD_TYPE: '/awardTypes/',
    GET_AWARD_TYPE: '/awardTypes/',
    GET_LEADERBOARD_LIST: '/leaderboard'
}