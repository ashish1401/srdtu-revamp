import 'tailwindcss/tailwind.css';
import '../styles/tailwind.css'
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Exo:wght@100&family=Inter:wght@100&family=Kanit&family=Sora:wght@600&display=swap"
                rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Ubuntu:wght@300&display=swap"
                rel="stylesheet" />
        </Head>
        <div className='relative '>
            <Navbar />
        </div>

        <Component {...pageProps} />
        <Footer />
    </>;
}

export default MyApp;
