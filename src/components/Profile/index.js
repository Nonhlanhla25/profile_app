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
                            <span className='profile-sectio'>
                                Software Engineer</span>
                        </h1>
                </div>
                </div>
                <div className="profile-image">
                    <img src={Nonhlanhla} alt="developer"/> 
                </div>
            
        </section>
        
        
    );
}

export default Profile