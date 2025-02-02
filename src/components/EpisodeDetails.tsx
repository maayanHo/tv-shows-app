import styles from "@/styles/Episode.module.scss";
import parse from 'html-react-parser';
import { Episode } from "@/types/index";
import Link from "next/link";

interface EpisodeDetailsProps {
    episode: Episode;
}

export default function EpisodeDetails({ episode }: EpisodeDetailsProps) {
    const sanitizedSummary = episode.summary?.replace(/<\/?[^>]+(>|$)/g, "") || "No summary available.";

    return (
        <div className={styles.episodeDetailsContainer}>
            {episode.image && (
                <img src={episode.image.original} alt={episode.name} className={styles.episodeImage} />
            )}
            <div className={styles.episodeInfo}>
                <h1 className={styles.episodeTitle}>{episode.name}</h1>
                <div className={styles.episodeSeason}>
                    Season {episode.season}, Episode {episode.number}
                </div>
                <div className={styles.episodeSummary}>{parse(sanitizedSummary)}</div>
                <Link href="/show" className={styles.backButton}>Back to Show</Link>
            </div>
        </div>
    );
}
