export interface Book {
    id: number;
    isbn10: string;
    isbn13: string;
    title: string;
    subtitle: string;
    cover: string;
    author: string;
    publisher: string,
    language: string,
    revision: string;
    releasedDate: string;
    pages: number;
    finished: boolean;
    finishedDate: string[];
}