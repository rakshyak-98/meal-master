import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
    apiKey: process.env['API_KEY'],
    authDomain: process.env['AUTH_DOMAIN'],
    projectId: process.env['PROJECT_ID'],
    storageBucket: process.env['STORAGE_BUCKET'],
    appId: process.env['APP_ID'],
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app);