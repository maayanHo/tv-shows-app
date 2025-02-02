import { Episode, Show } from "@/types/index";

// Generic function to fetch data and handle errors
async function fetchData<T>(url: string): Promise<T | null> {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return await res.json();
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}

// Fetch details of the TV show
export async function fetchShow(): Promise<Show | null> {
    return await fetchData<Show>('https://api.tvmaze.com/shows/6771?embed=episodes');
}

// Fetch details of a specific episode
export async function fetchEpisode(id: string): Promise<Episode | null> {
    return await fetchData<Episode>(`https://api.tvmaze.com/episodes/${id}`);
}

