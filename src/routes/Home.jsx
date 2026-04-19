import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';

function Home(props) {
    console.log(props);

    return (
        <>
            <Header setRoute={props.setRoute}/>
            <Body setRoute={props.setRoute} jobDescription={props.jobDescription} setJobDescription={props.setJobDescription}/>
            <Footer />
        </>
    )
}

export default Home;