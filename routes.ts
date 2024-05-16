
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/service',
    '/public-profile',
    'enterprise-list',
]

/**
 * An array of routes that are accessible to the public
 * These routes will redirect the logged in user to dashboard
 * @type {string[]}
 */
export const authRoutes = [
    '/login',
    '/register',
    '/error'
]

/**
 * Router that start from api with the prefix used for authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Router that is landing page for the logged in user
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'


/**
 * Revalidate dynamic fetch data
 */
export const dynamic = 'auto'
