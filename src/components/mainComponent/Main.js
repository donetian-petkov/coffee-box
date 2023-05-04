import hero_desktop from '../../img/hero_desktop.jpg'
import styles from './Main.module.css'
import {Card} from "react-bootstrap";

export const Main = () => {

    const cardClassName = `bg-dark text-white ${styles.hero}`;

    return (
        /*
                <img src={hero_desktop} className={styles.hero__img} alt="hero"/>

        */
        <Card className={cardClassName}>
            <Card.Img src={hero_desktop} alt="Card image"/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}