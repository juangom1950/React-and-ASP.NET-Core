export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    // ? means optional
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}