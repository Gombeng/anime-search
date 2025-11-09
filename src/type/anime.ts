export interface Anime {
    mal_id: number;
    title: string;
    score: number;
    images: {
        webp: {
            large_image_url: string;
        };
    };
    genres?: { mal_id: number; name: string; url: string }[];
    trailer: { embed_url: string };
    year?: string;
    url?: string;
    synopsis?: string;
}
