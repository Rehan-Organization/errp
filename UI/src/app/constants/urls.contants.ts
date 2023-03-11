import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',

    ALL_AWARD_LIST: '/awardTypes/',
    NEW_AWARD_TYPE: '/awardTypes/',
    UPDATE_AWARD_TYPE: '/awardTypes/',
    GET_AWARD_TYPE:'/awardTypes/',
    USER_CONTEXT: '/awardTypes/userContext',
    GET_LEADERBOARD_LIST : '/leaderboard'

}