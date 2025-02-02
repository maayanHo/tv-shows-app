import { fetchShow } from "@/utils/api";
import styles from "@/styles/Show.module.scss";
import Breadcrumb from "@/components/Breadcrumb";
import ShowHeader from "@/components/ShowHeader";
import SeasonDropdown from "@/components/SeasonDropdown";
import EpisodeCard from "@/components/EpisodeCard";
import { Episode, Show } from "@/types/index";
import Link from 'next/link';

export default async function ShowPage() {
    const show: Show | null = await fetchShow();

    if (!show || !show._embedded || !show._embedded.episodes) {
        return (
            <div className={styles.errorContainer}>
                <h1>Error: Show or Episode data not found</h1>
                <p>The show or episode data couldn't be retrieved. Please try again later.</p>
                <Link href="/show" className={styles.backButton}>Back to Show</Link>
            </div>
        );
    }

    const sanitizedSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, "");

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'TV Shows', href: '/show' },
        { name: show.name, href: `/show` },
    ];

    return (
        <div className={styles.showContainer}>
            {/* Breadcrumb Section */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Header Section */}
            <ShowHeader name={show.name} image={show.image} summary={sanitizedSummary} />

            {/* Episodes Section */}
            <section className={styles.episodes}>
                <div className={styles.episodesHeader}>
                    <h2>Episodes</h2>
                    <SeasonDropdown />
                </div>

                <div className={styles.episodeList}>
                    {show._embedded.episodes.map((episode: Episode) => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </section>
        </div>
    );
}
