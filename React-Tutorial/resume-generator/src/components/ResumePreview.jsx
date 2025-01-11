import "../app.css";

const ResumePreview = ({ previewProfile }) => {
    return (
        <article className="profile-header">
            <section className="user-name">
                <h2>
                    {previewProfile.fname} {previewProfile.lname}
                </h2>
                <h4>{previewProfile.jobTitle}</h4>
            </section>
            <section className="contact-info">
                <div>
                    <p className="material-symbols-outlined resume-icon">mail</p>
                    <p>{previewProfile.email}</p>
                </div>
                <div>
                    <p className="material-symbols-outlined resume-icon">call</p>
                    <p>{previewProfile.phone}</p>
                </div>
                <div>
                    <p className="material-symbols-outlined resume-icon">
                        location_on</p>
                    <p>{previewProfile.city}</p>
                </div>
            </section>
        </article>
    );
};

export default ResumePreview;
