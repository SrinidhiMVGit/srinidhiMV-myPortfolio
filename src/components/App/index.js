import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Navbar';
import Header from '../Header';
import Particles from 'react-particles-js';
import Aboutme from '../Aboutme';
import Services from '../Services';
import Experience from '../Experience';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

const App = () => {
    return(
        <div>
            <Particles 
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 1500
                            }
                        },
                        shape:{
                            type: "star",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }
                }}
            />
            <Navbar />
            <Header />
            <Aboutme />
            <Services />
            <Experience />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default App;