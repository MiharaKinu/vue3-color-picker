declare module 'tinycolor2' {
    interface TinyColor {
        toHsl(): { h: number; s: number; l: number };
        toHsv(): { h: number; s: number; v: number };
        toHex(): string;
        toHexString(): string;
        toHex8String(): string;
        toRgb(): { r: number; g: number; b: number; a: number };
        getAlpha(): number;
        setAlpha(alpha: number): TinyColor;
        isValid(): boolean;
        _a: number | undefined | null;
    }

    function tinycolor(color: any): TinyColor;
    export default tinycolor;
} 