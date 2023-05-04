import {Breakpoint} from "react-socks";
import {Header} from "../components/header/Header";
import {Sidebar} from "../components/sidebar/Sidebar";
import {Footer} from "../components/footer/Footer";
import {Main} from "../components/mainComponent/Main";
import styles from './Home.module.css'

export const Home = () => {

    return (
        <div className={styles.home}>
            <Breakpoint large up>
                <Header></Header>
            </Breakpoint>
            <Breakpoint medium down>
                <Sidebar></Sidebar>
            </Breakpoint>
            <Main/>
            <Footer></Footer>
        </div>
    )

}