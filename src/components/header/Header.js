import logo from '../../img/logo.png'
import styles from './Header.module.css'

export const Header = () => {

    return (

        <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.header__logo}/>
            <h1>Header Test</h1>
        </div>

    )
}