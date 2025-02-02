import styles from "@/styles/Show.module.scss";

interface EpisodeCardProps {
    episode: {
        id: number;
        name: string;
        image?: { medium: string };
        airdate?: string;
        summary?: string;
        rating?: { average?: number };
    };
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
    return (
        <div key={episode.id} className={styles.episodeItem}>
            <div className={styles.episodeImageWrapper}>
                {episode.image && (
                    <img
                        src={episode.image.medium}
                        alt={episode.name}
                        className={styles.episodeImage}
                    />
                )}
            </div>
            <div className={styles.episodeDetails}>
                <div className={styles.episodeHeader}>
                    <h3 className={styles.episodeTitle}>
                        <a href={`/episode/${episode.id}`} className={styles.episodeLink}>
                            {episode.name}
                        </a>
                    </h3>
                    <span className={styles.episodeDate}>{episode.airdate}</span>
                </div>
                <div className={styles.episodeDescription}>
                    {episode.summary
                        ? episode.summary.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 150) + "..."
                        : "No description"}
                </div>
                <div className={styles.episodeMeta}>
                    <span className={styles.episodeRating}>
                        <span className={styles.starIcon}>★</span>
                        {episode.rating?.average ? `${episode.rating.average} / 10` : "No rating yet"}
                    </span>
                </div>
            </div>
        </div>
    );
}
