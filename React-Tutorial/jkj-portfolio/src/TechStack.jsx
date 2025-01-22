import Card from "./components/Card.jsx";
export default function TechStack() {
    const techStackList = [
        {
            frontend: [
                {
                    name: "HTML5",
                    logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
                },
                {
                    name: "CSS3",
                    logo: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
                },
                {
                    name: "JavaScript",
                    logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
                },
                {
                    name: "Bootstrap",
                    logo: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
                },
            ],
        },
        {
            backend: [
                {
                    name: "Java",
                    logo: "https://img.icons8.com/?size=100&id=FRRACRKRsw2s&format=png&color=000000",
                },
                {
                    name: "Python",
                    logo: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
                },
                {
                    name: "C#",
                    logo: "https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000",
                },
            ],
        },
        {
            framework: [
                {
                    name: "Flask",
                    logo: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000",
                },
                {
                    name: "Django",
                    logo: "https://img.icons8.com/?size=100&id=XPdRFanRZtNK&format=png&color=000000",
                },
                {
                    name: "React",
                    logo: "https://img.icons8.com/?size=100&id=Nlsua06Gvxel&format=png&color=000000",
                },
                {
                    name: "Spring Boot",
                    logo: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
                },
            ],
        },
        {
            database: [
                {
                    name: "PostgreSQL",
                    logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
                },
                {
                    name: "MongoDB",
                    logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
                },
                {
                    name: "Firebase",
                    logo: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
                },
                {
                    name: "MySQL",
                    logo: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
                },
                {
                    name: "Vertica",
                    logo: "https://logotyp.us/file/vertica.svg",
                },
            ],
        },
        {
            testing: [
                {
                    name: "Selenium",
                    logo: "https://img.icons8.com/?size=100&id=38553&format=png&color=000000",
                },
                {
                    name: "Postman",
                    logo: "https://w7.pngwing.com/pngs/509/390/png-transparent-postman-macos-bigsur-icon-thumbnail.png",
                },
                {
                    name: "Apache JMeter",
                    logo: "https://images.seeklogo.com/logo-png/38/1/jmeter-logo-png_seeklogo-388141.png",
                },
            ],
        },
        {
            version_control: [
                {
                    name: "Git",
                    logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
                },
                {
                    name: "GitHub",
                    logo: "https://img.icons8.com/?size=100&id=dQUAwwnconR8&format=png&color=000000",
                },
            ],
        },
        {
            cloud_technologies: [
                {
                    name: "AWS",
                    logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
                },
                {
                    name: "GCP",
                    logo: "https://img.icons8.com/?size=100&id=20774&format=png&color=000000",
                },
            ],
        },
    ];

    return (
        <section className="stack-wrapper">
            <div className="stack-head">
                <h1 className="ubuntu-medium">Tech Stack</h1>
            </div>
            <Card cardData={techStackList} cardType="techstack" />
        </section>
    );
}
