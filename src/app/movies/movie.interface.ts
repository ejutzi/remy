export interface Movie {
    id: number;
    title: string;
    subtitle: string;
    cover: string;
    director: string;
    writer: string[];
    cast: string[];
    releaseDate: string;
    duration: number;
    watched: boolean;
    watchedDate: string[];
}