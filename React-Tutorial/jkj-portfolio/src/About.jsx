import Avathar from "./components/Avathar.jsx";
import userProfile from "./assets/userProfile.jpg";
const About = () => {
    const profileBuilder = [
        {
            infoId: "sayHello",
            infoText: "Hi ✋, I'm Joji Kuriyathan Joy ",
        },
        {
            infoId: "passion",
            infoText:
                "I transform my ideas into experiences and bringing them to life online.",
        },
    ];

    return (
        <>
            <section className="about-wrapper">
                <Avathar imgPath={userProfile} styleClass="avatar-container" />
                <article>
                    {profileBuilder.map((profile) => {
                        if (profile.infoId === "passion") {
                            return (
                                <h1 key={profile.infoId} className="ubuntu-light aboutinfo">
                                    {profile.infoText}
                                </h1>
                            );
                        } else {
                            return (
                                <h1 key={profile.infoId} className="ubuntu-bold aboutinfo">
                                    {profile.infoText}
                                </h1>
                            );
                        }
                    })}
                </article>
            </section>
        </>
    );
};

export default About;
