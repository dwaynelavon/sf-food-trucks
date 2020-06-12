export type SearchHandler = (lat: number, lng: number) => void;

export type SearchLocation = {
    lat: number;
    lng: number;
};

export interface IReactStandardProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    key?: string;
}
