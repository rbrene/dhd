export { }

type Props = {
    id: number;
    title: string;
};


export interface NavItemProps {
    item: Props;
};


export interface NavList {
    item: Array<Props>;
};