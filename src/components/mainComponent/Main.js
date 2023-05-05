import hero_new from '../../img/hero-new.jpg'
import styles from './Main.module.css'
import {Card} from "react-bootstrap";

export const Main = () => {

    return (

        <Card>
            <Card.Img src={hero_new} alt="Card image"/>
            <Card.ImgOverlay className={styles.hero__imgOverlay}>
                <Card.Title className={styles.hero__title}>Coffee Box</Card.Title>
                <Card.Text className={styles.hero__subs}>
                    Екзотичен вкус
                </Card.Text>
                <Card.Text className={styles.hero__subs}>
                    Специално подбран за теб
                </Card.Text>
                
            </Card.ImgOverlay>
        </Card>
    )
}