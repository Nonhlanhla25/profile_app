import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Nonhlanhla from '../../assets/images/Nonhlanhla.png'

const Profile = () => {
    return (
        <section id="profile-page" className='profile-page'>
             <div className="home-page">
                <div className='page-one'>
                    <p className='profile-name'>Hi, I'm Nonhlanhla</p>
                        <h1 className='job-title'> 
                            <span className='profile-section'>
                                Software Engineer</span>
                        </h1>
                </div>
                </div>
                <div id="profile-image"className="profile-image">
                    <img src={Nonhlanhla} alt="developer"/> 
                </div>
                <div className='profile-icons'>
                        <a  className="socail-icon" 
                        href="https://www.linkedin.com/in/nonhlanhlamthimkulu/"
                        target="_blank"
                        rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} color="#ffffff" size="3x"/> 
                                    
                        </a>
                
                        <a  className="socail-icon" 
                        target="_blank" rel="noreferrer" 
                        href="https://github.com/Nonhlanhla25">
                            <FontAwesomeIcon icon={faGithub} color="#ffffff" size="3x"/>         
                        </a>
                    
            </div>
            
        </section>
        
        
    );
}

export default Profile