import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    ALL_AWARD_TYPES: '/allAwardList',
    NEW_AWARD_TYPE: '/saveAwardTypes'
}