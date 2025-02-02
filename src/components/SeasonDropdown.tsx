import styles from "@/styles/Show.module.scss";

export default function SeasonDropdown() {
    return (
        <div className={styles.seasonSelector}>
            <select id="seasonSelect" className={styles.seasonSelect} defaultValue="1">
                <option value="1">Season 1</option>
            </select>
        </div>
    );
}
