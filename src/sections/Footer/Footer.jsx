import styles from "./FooterStyle.module.css";

function Footer() {
    return (
        <section
            id="footer"
            className={styles.container}
        >
            <p>
                © 2024 Daniel Janda. <br />
                All rights reserved.
            </p>
        </section>
    );
}

export default Footer;
