import "./app.css";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import ResumePreview from "./components/ResumePreview.jsx";
import ProfessionalSummary from "./components/ProfessionalSummary.jsx";
import SummaryPreview from "./components/SummaryPreview.jsx";
import Experience from "./components/Experience.jsx";
import { useState, useEffect } from "react";

export default function App() {
    // State Management
    const [navtitle, setNavtitle] = useState("");


    const [userProfile, setUserProfile] = useState({
        comp_title: "Profile",
        comp_desc: "Provide your personal details",
        fname: "",
        lname: "",
        email: "",
        phone: "",
        jobTitle: "",
        city: "",
    });
    const [isEditingUserProfile, setIsEditingUserProfile] = useState(false);

    const [professionalSummary, setProfessionalSummary] = useState({
        comp_title: "Professional Summary",
        comp_desc:
            "Write 2-4 short, energetic sentences about how great you are. Mention the role and what you did. What were the big achievements? Describe your motivation and list your skills. ",
        summary: "",
    });
    const [isEditingProfessionalSummary, setEditingProfessionalSummary] =
        useState(false);

    const [experience, setExperience] = useState([]);
    const [isEditingExperience, setIsEditingExperience] = useState(false);

    return (
        <>
            <Navbar navtitle={navtitle} />
            <main>
                <section className="edit">
                    <Profile
                        userProfile={userProfile}
                        onChange={setUserProfile}
                        isEditing={isEditingUserProfile}
                        toggleEditing={() => setIsEditingUserProfile(!isEditingUserProfile)}
                    />
                    <ProfessionalSummary
                        summary={professionalSummary}
                        onChange={setProfessionalSummary}
                        isEditing={isEditingProfessionalSummary}
                        toggleEditing={() =>
                            setEditingProfessionalSummary(!isEditingProfessionalSummary)
                        }
                    />
                    <Experience
                        experience={experience}
                        onChange={setExperience}
                        isEditing={isEditingExperience}
                        toggleEditing={() => setIsEditingExperience(!isEditingExperience)}
                    />
                </section>
                <section className="preview">
                    <ResumePreview previewProfile={userProfile} />
                    <SummaryPreview previewSummary={professionalSummary} />
                </section>
            </main>
        </>
    );
}
