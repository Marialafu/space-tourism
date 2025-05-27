import { v4 } from "uuid"

export const GLOBAL_MENU = [
    {
        id: v4(),
        name: 'home',
        link: '/',
        value: 0,
    },
    {
        id: v4(),
        name: 'destination',
        link: '/destination',
        value: 1,
    },
    {
        id: v4(),
        name: 'crew',
        link: '/crew',
        value: 2,
    },
    {
        id: v4(),
        name: 'technology',
        link: '/technology',
        value: 3,
    }
]