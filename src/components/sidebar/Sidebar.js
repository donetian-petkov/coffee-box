import logo from '../../img/logo.png'
import styles from './Sidebar.module.css'

export const Sidebar = () => {


    return (
        <div className={styles.sidebar}>
            <img src={logo} alt="logo" className={styles.sidebar__logo}/>
            <h1>Sidebar Test</h1>

        </div>
    )

}