// import { writable } from 'svelte/store';
import { localStore } from '../../utils/localStore';

export const _op = localStore('nwp_app_op', {
    "op1": {
        "lg": true,
        "sec": false,
        "rounded": false,
        "size": 44
    },
    "op2": {
        "lg": true,
        "sec": true,
        "rounded": false,
        "size": 44
    },
    "op3": {
        "sec": false,
        "dark": false,
        "size": 28
    }
});

