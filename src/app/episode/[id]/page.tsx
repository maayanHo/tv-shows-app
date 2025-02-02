import { fetchEpisode } from "@/utils/api";
import styles from "@/styles/Episode.module.scss";
import Breadcrumb from "@/components/Breadcrumb";
import EpisodeDetails from "@/components/EpisodeDetails";
import { Episode } from "@/types/index";
import Link from "next/link";

export default async function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // ✅ Await params to prevent warnings

    if (!id) {
        return (
            <div className={styles.errorContainer}>
                <h1>Error: Episode not found</h1>
                <p>Invalid episode ID.</p>
                <Link href="/show" className={styles.backButton}>Back to Show</Link>
            </div>
        );
    }

    const episodeId = id.includes("%") ? decodeURIComponent(id) : id;

    // ✅ Fetch episode data on the server (SSR)
    const episode: Episode | null = await fetchEpisode(episodeId);

    if (!episode || !episode._links?.show) {
        return (
            <div className={styles.errorContainer}>
                <h1>Error: Episode or Show not found</h1>
                <p>The episode or show data couldn't be retrieved. Please try again later.</p>
                <Link href="/show" className={styles.backButton}>Back to Show</Link>
            </div>
        );
    }

    // Breadcrumb navigation
    const breadcrumbItems = [
        { name: "Home", href: "/" },
        { name: "TV Shows", href: "/show" },
        { name: episode._links.show.name ?? "Unknown Show", href: `/show/${episode._links.show.id ?? ""}` },
        { name: episode.name, href: `/episode/${episode.id}` },
    ];

    return (
        <div className={styles.episodeContainer}>
            <Breadcrumb items={breadcrumbItems} />
            <EpisodeDetails episode={episode} />
        </div>
    );
}
