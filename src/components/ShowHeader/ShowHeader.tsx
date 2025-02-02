import styles from "@/styles/Show.module.scss";

interface ShowHeaderProps {
    name: string;
    image: { original: string };
    summary: string;
}

export default function ShowHeader({ name, image, summary }: ShowHeaderProps) {
    return (
        <header className={styles.header}>
            <img src={image.original} alt={name} className={styles.showImage} />
            <div className={styles.showInfo}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.description}>{summary}</p>
            </div>
        </header>
    );
}
