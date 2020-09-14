import Link from 'next/link'
import styles from '../styles/Home.module.css'
function about(){
    return (
        <div>
        <h1 className={styles.title}>About me</h1>
        <p className={styles.description}>I am G.H.Krishna Chaitanya, currently pursuing my IIIrd year in Marri Laxman Reddy Instute of 
        Technology and Management. I aspire to become a well-known front-end engineer and I also want to share people the knowladge I 
        have in computer programming. I also have a YouTube channel titled <Link href='https://www.youtube.com/channel/UCZv-HrgSN0qc92gEZqDC3sA'>K. C. codes</Link>, 
        where I spoke about the basics of JavaScript, HTML, CSS and Java. I sure will be uploading more videos in the feture.</p>
        <Link href='/'><button>Home</button></Link>
    </div>
    )
}
export default about