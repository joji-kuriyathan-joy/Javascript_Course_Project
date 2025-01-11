import { useState } from "react";

const Experience = ({ experience, onChange, isEditing, toggleEditing }) => {

    const [isAddEmployment, setIsAddEmployment] = useState(false);
    const [employment, setEmployment] = useState({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
    });


    return (
        <section className="experience-container">
            <h2>Experience</h2>
            <small>
                Show your relavent experience (last 10 years). Use bullet points to note
                your achievements.
            </small>
            {experience.length > 0 ? (
                <p></p>
            ) : (
                <section>
                    {isAddEmployment &&
                        <section className="add-emp-container">
                            <div className="input-form">
                                <label htmlFor="empjobTitle">Job title</label>
                                <input
                                    type="text"
                                    name="empjobTitle"
                                    id="empjobTitle"
                                />
                            </div>
                        </section>}
                    <button
                        className="submit-btn"
                        onClick={() => { setIsAddEmployment(!isAddEmployment) }}>
                        {" "}
                        {experience.length > 0
                            ? "+ Add one more employment"
                            : "+ Add employment"}{" "}
                    </button>
                </section>
            )}
        </section>
    );
};

export default Experience;
