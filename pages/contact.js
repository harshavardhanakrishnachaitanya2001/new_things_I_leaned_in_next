import Link from 'next/link'
import styles from '../styles/Home.module.css'
function contact(){
    return (
        <div>
            <h1 className={styles.title}>Contact me</h1>
            <p>You can contact me through FaceBook</p>
            <Link href='/'><button>Home</button></Link>
        </div>
    )
}
export default contact