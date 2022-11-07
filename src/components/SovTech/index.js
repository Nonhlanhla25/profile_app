import sovtech from '../../assets/images/sovtech.png'
import './index.scss'

const SovTech = () => {

    return (
        <div className="container sovtech-page">
            <div className="tech">
                <h1>Why SovTech</h1>
                <p>
                    As SovTech is the leading software design and development company, 
                    I want to be part of it to grow my skills as aspiring mobile and web developer.
                </p>
                <p>
                    I love upskilling myself and I believe that the SovTech graduate programe is providing  
                    the opportunity that I'm looking for to elevate my career as a developer as well as being 
                    mentored.
                </p>
            </div>
            <div className='sovtech'>
                <img  src={sovtech} alt="developer"/> 
            </div>   
        </div>
    )
}

export default SovTech