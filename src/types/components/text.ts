type TextVariantType = 'intro' | 'overview' | 'default' | undefined;

export interface PPropTypes {
    text: string;
};

export interface TextPropTypes {
    variant: TextVariantType;
    text: string;
}