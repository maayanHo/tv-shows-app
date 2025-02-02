import Link from 'next/link';
import styles from '@/styles/Breadcrumb.module.scss';

interface BreadcrumbProps {
    items: { name: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <span key={index}>
          <Link href={item.href} className={styles.breadcrumb}>
            {item.name}
          </Link>
                    {index < items.length - 1 && ' > '}
        </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
