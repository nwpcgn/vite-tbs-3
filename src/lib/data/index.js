// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
 export { default as sleep } from './api/sleep';
 export { default as supabase } from './api/supabase';
// @endindex
// @index(['./stores/**/*.js'], f => ` export { ${f.name} } from '${f.path}';`)
export { _user } from './stores/_user';
// @endindex

export const appData = [
{
    "id": 0,
    "slug": "start",
    "head": {
    "titel": "Nwp-Studio",
    "sub": "Startseite"
    },
    "link": {
    "path": "/",
    "name": "Start"
    }
},
{
    "id": 1,
    "slug": "data",
    "head": {
    "titel": "Nwp-Studio",
    "sub": "Database"
    },
    "link": {
    "path": "/data",
    "name": "Database"
    }
},
{
    "id": 2,
    "slug": "settings",
    "head": {
    "titel": "Nwp-Studio",
    "sub": "Settings"
    },
    "link": {
    "path": "/settings",
    "name": "Settings"
    }
}
];
export const navData = appData.map((x) => x.link);
export const pageData = appData.map((x) => x.head);