import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, repo, site}) {
    return (
        <div className={styles.card}>
                <a href={site} target="blank_">
                    <img src={img}/>
                </a>
                
                <section>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        <strong>Tecnologia: </strong> {tech}
                    </p>
                    <p>
                        {description}
                    </p>

                    <ButtonB text='Ver respositório' link={repo}/>
                </section>
        </div>
    )
}

export default Card