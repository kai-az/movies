export interface IsvgProps {
    className: string,
    width: string,
    height: string
    id: string,
    handleClick(id: string):void
}

export interface IconProps {
    name: string;
    isActive: boolean;
    handleClick: (id: string) => void;
    width: string;
    height: string;
    className: string;
    key: number;
}
