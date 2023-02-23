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
    date: number,
};

export interface Setting {
    key: string,
    value: string,
};
