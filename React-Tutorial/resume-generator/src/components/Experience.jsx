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
            <h1>Experience</h1>
            <small>
                Show your relavent experience (last 10 years). Use bullet points to note
                your achievements.
            </small>
            {experience.length > 0 ? (
                <p></p>
            ) : (
                <section>
                    {isAddEmployment && (
                        <section className="emp-container">
                            <div className="input-form">
                                <label htmlFor="empjobTitle">Job title</label>
                                <input type="text" name="empjobTitle" id="empjobTitle" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="employer">Employer</label>
                                <input type="text" name="employer" id="employer" />
                            </div>

                            <div className="input-form">
                                <label>Start Date</label>
                                <input type="month" name="start-date" id="start-date" />
                            </div>
                            <div className="input-form">
                                <label> End Date</label>
                                <input type="month" name="end-date" id="end-date" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="location">Location</label>
                                <input type="text" name="location" id="location" />
                            </div>

                            <div className="input-form">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    rows="5"
                                    placeholder="Describe your job role and responsibilities"
                                />
                            </div>
                        </section>
                    )}
                    <button
                        className="submit-btn"
                        onClick={() => {
                            setIsAddEmployment(!isAddEmployment);
                        }}
                    >
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
