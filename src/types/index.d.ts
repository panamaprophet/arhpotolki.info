export interface Picture {
    id: string,
    url: string,
    tags: string[]
};

export interface Feedback {
    id: string,
    author: string,
    text: string,
    picture?: string,
    isPublished: boolean,
    date: number,
    city: string,
};

interface DefaultSettings {
    defaultMeterPrice: number,
    colorPrice: number,
    lightPrice: number,
    prices: {
        [k: string]: {
            [k: number]: number,
        },
    },
    materials: string[],
    headerNotification: string,
    phone: string,
    address: string,
    companyName: string,
    links: string[],
    leadbackCampaign: string,
    vkGroupId: string,
}

export type Settings = Partial<DefaultSettings>;
