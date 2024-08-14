import ProjectCard from "../../common/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <section
            id="projects"
            className={styles.container}
        >
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard />
            </div>
        </section>
    );
}

export default Projects;
