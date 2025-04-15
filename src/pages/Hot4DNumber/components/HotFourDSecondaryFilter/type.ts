type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface HotFourDNumberSecondaryFilterProps {
    Icon: SvgComponent | string;
    label: string;
    checked: boolean;
    onChange: (val: boolean) => void;
    disabled: boolean;
}

export type { HotFourDNumberSecondaryFilterProps }