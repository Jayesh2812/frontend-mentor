import HeroHome from '../components/HeroHome'
import Shorten from '../components/Shorten'
import LinkHistory from '../components/LinkHistory'
import Statistics from '../components/Statistics'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cta from '../components/Cta'


function HomePage() {
    return (
        <>
            <Navbar />
            <HeroHome />
            <Shorten />
            <LinkHistory />
            <Statistics />
            <Cta />
            <Footer />
        </>
    )
}

export default HomePage;
