import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    FETCHACHIEVEMENTS:'/achievement',
    GETACHIEVEMENT : '/achievement/getAchievement',
    USER_CONTEXT: '/userContext',
    DELETE : '/achievement/removeAchievement/',
    PAGINATEDACHIEVEMENT : '/achievement/paginated/',
    POSTACHIEVEMENT :'/achievement/add',
    GETALLACHIEVEMENT:'/achievement/emp'
}