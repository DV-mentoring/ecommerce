import { Link } from "react-router-dom";
import { useBreadCrumbs } from "./BreadCrumbs.ts";
import greaterSign from "../../../../public/assets/svgs/greaterSign.svg";
import styles from "./BreadCrumbs.module.scss";

export const BreadCrumbs = () => {
    const breadcrumbs = useBreadCrumbs();

    return (
        <nav className={styles.bread}>
            {breadcrumbs.map((crumb, index) => (
                <span className={styles.span} key={crumb.path}>
                    {index > 0 && (
                        <img
                            className={styles.img}
                            alt="-->"
                            src={greaterSign}
                        />
                    )}
                    <Link className={styles.crumb} to={crumb.path}>
                        {crumb.label}
                    </Link>
                </span>
            ))}
        </nav>
    );
};
