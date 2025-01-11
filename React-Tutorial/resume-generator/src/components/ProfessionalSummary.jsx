import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const ProfessionalSummary = ({
    summary,
    onChange,
    isEditing,
    toggleEditing,
}) => {
    const [textareaCount, setTextAreaCount] = useState(0);
    const handleSummaryWordCount = (e) => {
        onChange({ ...summary, summary: e.target.value });
        setTextAreaCount(e.target.value.length);
    };
    const handleToggle = () => {
        toggleEditing();

        if (isEditing) {
            document.getElementById("summary-info").disabled = false;

        } else {
            document.getElementById("summary-info").disabled = true;;
        }
    };
    return (
        <section className="summary-conatiner">
            <h1>{summary.comp_title}</h1>
            <small>{summary.comp_desc}</small>
            <article>
                <div className="summary-body">

                    <textarea
                        name="summary-info"
                        id="summary-info"
                        rows="5"
                        placeholder="Tell us your story"
                        maxLength="400"
                        value={summary.summary}
                        onChange={(e) => handleSummaryWordCount(e)}
                    ></textarea>
                    <br />
                    <small>{textareaCount}/400</small>
                </div>
            </article>
            <button className="submit-btn" onClick={handleToggle}>
                {isEditing ? "Edit" : "Submit"}
            </button>
        </section>
    );
};

export default ProfessionalSummary;
