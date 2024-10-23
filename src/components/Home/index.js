import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Nonhlanhla from '../../assets/images/Nonhlanhla.png';
import Profile from '../Profile/index.js';
import About from '../About/index.js';
import Projects from '../Projects/index.js';

const Home = () => {
    return (
        <>
        <Profile/>
        <About/>
        <Projects/>
        {/* 


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
            </div> */}
        </>
    );
}

export default Home