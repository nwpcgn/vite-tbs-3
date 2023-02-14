import { localStore } from '../../utils/localStore';

export const _options = localStore('nwp_options', {
    op1: false,
    op2: false,
    op3: false,
    op4: false
});


export const setTheme = (bool) => {
    let element = document.querySelector("html");
    element.setAttribute("data-bs-theme", bool ? 'dark' : 'light');
};