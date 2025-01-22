
import Card from './components/Card.jsx';

const Projects = () => {
    const projectList = [
        {
            id: crypto.randomUUID(),
            title: "DataForte",
            description: "A comperhensive database backup & recovery system.",
            year: "2023",
            link: "https://afterdarkcreation.pythonanywhere.com/",
            btnName: "Website"

        },
        {
            id: crypto.randomUUID(),
            title: "NHS Family Invoice App",
            description: "A mobile application that digitalizes the Family Voice - Carers Diary forms.",
            year: "2023",
            link: "https://github.com/joji-kuriyathan-joy/Nhs-Family-Invoice",
            btnName: "GitHub"
        },
        {
            id: crypto.randomUUID(),
            title: "Body Performance",
            description: "Multi-class body performance classification appraising machine learning techniques.",
            year: "2022",
            link: "https://github.com/joji-kuriyathan-joy/BODY_PERFORMANCE",
            btnName: "GitHub"
        }
    ];
    const handleCardClick = (e, link) => {
        e.preventDefault();
        window.open(link, '_blank', 'noopener,noreferrer');
    }
    return (
        <section className="projects-wrapper">
            <div className='project-head'>
                <h1 className='ubuntu-medium'>Projects</h1>
                {projectList.length > 3 && <button className='btn-custom' type="button">See all</button>}

            </div>

            <Card cardData={projectList} onCardClick={handleCardClick} cardType="projects" />
        </section>
    );
}

export default Projects;