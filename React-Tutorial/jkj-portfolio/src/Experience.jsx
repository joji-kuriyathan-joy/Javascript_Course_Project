
import Card from './components/Card.jsx';
export default function Experience() {

    const experienceList = [
        {
            id: crypto.randomUUID(),
            company: 'Layers Studio',
            title: 'Full-stack Developer · Internship',
            duration: 'Nov 2024 - Dec 2024'
        },
        {
            id: crypto.randomUUID(),
            company: 'Teesside University',
            title: 'Internship · NHS',
            duration: 'Jan 2023 - May 2023'
        },
        {
            id: crypto.randomUUID(),
            company: 'Marvenics',
            title: 'Application Developer · Part-time',
            duration: 'Jan 2022 - Sep 2023'
        },
        {
            id: crypto.randomUUID(),
            company: 'Cygnus Software, Inc',
            title: 'Software Developer · Full-time',
            duration: 'Jun 2019 - Oct 2021'
        }
    ];



    return (
        <section className="experience-wrapper">
            <div className='experience-head'>
                <h1 className='ubuntu-medium'>Work Experience</h1>
            </div>
            <Card cardData={experienceList} cardType="experience" />
        </section>
    );
}