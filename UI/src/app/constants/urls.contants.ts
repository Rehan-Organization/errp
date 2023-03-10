import { environment } from './../../environments/environment';
export const URLS = {
    base: environment.baseUrl,
    USER_CONTEXT: '/userContext',
    LOGIN: '/authenticate',
    LOGOUT: '/logout',
    GET: '/achievement/get',
    UPDATE: '/achievement/update',
    DELETE: '/achievement/delete',
    SUBMIT: '/achievement/submit',
    SAVE: '/achievement/add',
    GET_PAGINATED: '/achievement/paginated'
}