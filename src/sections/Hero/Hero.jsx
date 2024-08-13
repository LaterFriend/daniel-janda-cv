import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/Životopis - Janda Daniel.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === "light" ? sun : moon;

    return (
        <section
            id="hero"
            className={styles.container}
        >
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile picture of Daniel Janda"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Daniel
                    <br />
                    Janda
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a
                        href="https://www.linkedin.com/in/daniel-janda-2055921aa/"
                        target="_blank"
                    >
                        <img
                            src={linkedinIcon}
                            alt="Linkedin Icon"
                        />
                    </a>
                    <a
                        href="https://github.com/LaterFriend"
                        target="_blank"
                    >
                        <img
                            src={githubIcon}
                            alt="Github Icon"
                        />
                    </a>
                </span>
                <p>
                    With a passion for developing modern React web apps for
                    commercial businesses.
                </p>
                <a
                    href={CV}
                    download
                >
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
