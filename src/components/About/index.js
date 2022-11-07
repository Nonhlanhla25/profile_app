import { faCss3, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    return (
        <div className="container about-page">
            <div className='about'>
                <h1>About Me</h1>

                <p>
                I'm transitioning from Business Analyst to Software Developer 
                through WeThinkCode. I'm passionate about software programming 
                as well as problem solving and learning new technologies.

                <br/>

                 I love challenging myself and continuously learning new skills in the 
                field that I'm venturing in. 
                </p>

                <p>
                I'm an exceptional team player who is able to collaborate with 
                others as well as work individually. My skills are Python, Java, HTML, 
                CSS, JavaScript and I recently started to learn flutter and dart.
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

                </div>

            </div>
        </div>

    )
}

export default About