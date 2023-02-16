type LinkType = 'email' | 'tel' | 'download';

export interface EmailLinkPropTypes {
    email: string;
    title?: string;
};

export interface TelLinkPropTypes {
    tel: string;
    title?: string;
};
