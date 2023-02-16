type HeadingSizeType = 1 | 2 | 'title';

export interface H1PropTypes {
    text: string;
};

export interface H2PropTypes {
    text: string;
};

export interface TitlePropTypes {
    text: string;
};

export interface HeadingPropTypes {
    size: HeadingSizeType;
    text: string;
};