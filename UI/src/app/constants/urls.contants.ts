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
    GET_PAGINATED: '/achievement/paginated'
}