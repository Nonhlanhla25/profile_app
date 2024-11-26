import { faCss3, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
    return (
        <section>
            <div className="about-page" >
            <div className='about'>
                <h1>About Me</h1>
                <p>
                I have transitioned from Business Analyst to Software Developer through WeThinkCode 
                training academy. My passion lies in software programming, problem and continuously
                learning new technologies.
                </p>
                <br/>
                
                <p>
                I have good time management and I'm an exceptional team player who is able to collaborate 
                with others as well as work individually. My skills are Python, Java, JavaScript, React, Flutter, HTML, 
                CSS, and I have recently started learning Spring Boot.
                </p>
            </div>
            <div className='skill-cube'>
                <div className='cube'>
                    <div className='icon1'>
                        <FontAwesomeIcon icon={faPython} color="#FAEBD7" />
                    </div>
                    <div className='icon2'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='icon3'>
                        <FontAwesomeIcon icon={faHtml5} color="#FO6529" />
                    </div>
                    <div className='icon4'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='icon5'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                    <div className='icon6'>
                        <FontAwesomeIcon icon={faCss3} color="#DD0033"  />
                    </div>

                </div>

            </div>
        </div>
        </section>
    
    )
}

export default About