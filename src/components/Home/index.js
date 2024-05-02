import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Nonhlanhla from '../../assets/images/Nonhlanhla.png'
import './index.scss'

const Home = () => {

    return (
        <div className="container home-page">
            <div>
                <div className="intro">
                    <img src={Nonhlanhla} alt="developer"/> 
                </div>

                <nav>
                    <div>
                        <h1> 
                            I'm Nonhlanhla Mthimkulu
                            <br/>  
                            Software Developer
                        </h1>
                    </div>

                    <div>
                        <a  className="socail" 
                        href="https://www.linkedin.com/in/nonhlanhlamthimkulu/"
                        target="_blank"
                        rel="noreferrer" 
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="aqua" />         
                        </a>
                
                        <a  className="socail-icon" 
                        target="_blank" rel="noreferrer" 
                        href="https://github.com/Nonhlanhla25">
                            <FontAwesomeIcon icon={faGithub} color="aqua" />         
                        </a>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Home
