export interface Show {
    id: number;
    name: string;
    summary: string;
    image: {
        medium: string;
        original: string;
    };
    _embedded: {
        episodes: Episode[];
    };
}

export interface Episode {
    id: number;
    name: string;
    season: number;
    number: number;
    summary: string;
    airdate: string;
    image?: {
        medium: string;
        original: string;
    };
    rating?: {
        average: number;
    };
    _links?: {
        show: {
            href: string;
            id: number;
            name: string;
        };
    };
}
