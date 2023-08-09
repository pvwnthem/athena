export interface Lang {
    name: string;
    keywords: Keyword[];
}

export interface Keyword {
    name: string;
    color: Color;
}

export interface Color {
    r: number;
    g: number;
    b: number;
}