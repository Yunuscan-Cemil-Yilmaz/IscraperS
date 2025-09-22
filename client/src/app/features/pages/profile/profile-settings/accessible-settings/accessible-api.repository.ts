import { AccessibleApi } from "../../../../../shared/models/accessible-api.interface";

export const AccessibleApiRepository: AccessibleApi[] = [
    {
        name: 'Google',
        icon: 'assets/images/download.png',
        isUsing: false,
        isAvaible: true,
        isFree: true
    },
    {
        name: 'Yandex',
        icon: 'assets/images/download.png',
        isUsing: true,
        isAvaible: true,
        isFree: true
    },
    {
        name: 'Chat GPT',
        icon: 'assets/images/download.png',
        isUsing: true,
        isAvaible: true,
        isFree: false
    },
    {
        name: 'Leonardo AI',
        icon: 'assets/images/download.png',
        isUsing: false,
        isAvaible: false,
        isFree: false
    },
    {
        name: 'Midjourney',
        icon: 'assets/images/download.png',
        isUsing: true,
        isAvaible: false,
        isFree: false
    },
]