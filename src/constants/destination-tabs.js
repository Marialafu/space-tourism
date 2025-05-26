import { v4 } from "uuid"
import { DESTINATIONS_INFO } from "./destination-info"

export const DESTINATION_TABS = ['moon', 'mars', 'europa', 'titan']

export const DESTINATION_TABS_DATA = { 
    moon: 0,
    mars: 1,
    europa: 2,
    titan: 3,
}

export const DESTINATIONS_MENU = [
    {
        id: v4(),
        name: DESTINATIONS_INFO.moon.name,
        link: 'destination/moon',
    },
    {
        id: v4(),
        name: DESTINATIONS_INFO.mars.name,
        link: 'destination/mars',
    },
    {
        id: v4(),
        name: DESTINATIONS_INFO.europa.name,
        link: 'destination/europa',
    },
    {
        id: v4(),
        name: DESTINATIONS_INFO.titan.name,
        link: 'destination/titan',
    }
]