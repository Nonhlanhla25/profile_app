import data from "../../data/index.json";
// import website from '/home/nonhlanhlamthimkulu/profile_app/src/assets/images/website.png';
// import LiftRide from '../../assets/images/LiftRide.png';


const Projects = () => {

    return (
        <section id="project-section" className='project-section'>
            <div className="project-page">
                <div className='page-three'>
                        <h1 className='title'> 
                            <span className='profile-section'>
                                Projects</span>
                        </h1>
                </div>
            </div>
            <div className="projects-section-card">
                {data?.projects?.map((item,index)=>
                (
                <div key={index} className="projects-card">
                    <div className="projects-card-img">
                        <img className="projects-card-img" src={item.src}/>
                    </div>
                    <div className="projects-card-title">
                    <h4 className="projects-title">{item.title}</h4>
                    <p className="projects-description">{item.description}</p>
                    </div>
                </div>
                )
                    )}
            </div>
        </section>
        
    )
}

export default Projects