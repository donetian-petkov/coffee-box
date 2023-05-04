import hero_new from '../../img/hero-new.jpg'
import styles from './Main.module.css'
import {Card} from "react-bootstrap";

export const Main = () => {

    return (

        <Card>
            <Card.Img src={hero_new} alt="Card image"/>
            <Card.ImgOverlay className={styles.hero__imgOverlay}>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}