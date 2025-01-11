import "../app.css";

const Profile = ({ userProfile, onChange, isEditing, toggleEditing }) => {
    const handleToggle = () => {
        toggleEditing();

        if (isEditing) {
            document.getElementById("firstName").disabled = false;
            document.getElementById("lastName").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("jobTitle").disabled = false;
            document.getElementById("city").disabled = false;

        } else {
            document.getElementById("firstName").disabled = true;
            document.getElementById("lastName").disabled = true;
            document.getElementById("phone").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("jobTitle").disabled = true;
            document.getElementById("city").disabled = true;
        }
    };

    return (
        <section className="profile-container">
            <h1>{userProfile.comp_title}</h1>
            <small>{userProfile.comp_desc}</small>
            <article className="personal-info">
                <div className="input-form">
                    <label htmlFor="jobTitle">Job title</label>
                    <input
                        type="text"
                        value={userProfile.jobTitle}
                        name="jobTitle"
                        id="jobTitle"
                        onChange={(e) =>
                            onChange({ ...userProfile, jobTitle: e.target.value })
                        }
                    />
                </div>
                <div className="input-form">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        value={userProfile.fname}
                        name="firstName"
                        id="firstName"
                        onChange={(e) => onChange({ ...userProfile, fname: e.target.value })}
                    />
                </div>
                <div className="input-form">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        value={userProfile.lname}
                        name="lastName"
                        id="lastName"
                        onChange={(e) => onChange({ ...userProfile, lname: e.target.value })}
                    />
                </div>
                <div className="input-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={userProfile.email}
                        name="email"
                        id="email"
                        onChange={(e) => onChange({ ...userProfile, email: e.target.value })}
                    />
                </div>
                <div className="input-form">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        value={userProfile.phone}
                        name="phone"
                        id="phone"
                        onChange={(e) => onChange({ ...userProfile, phone: e.target.value })}
                    />
                </div>
                <div className="input-form">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        value={userProfile.city}
                        name="city"
                        id="city"
                        onChange={(e) => onChange({ ...userProfile, city: e.target.value })}
                    />
                </div>
            </article>

            <button className="submit-btn" onClick={handleToggle}>
                {isEditing ? "Edit" : "Submit"}
            </button>
        </section>
    );
};

export default Profile;
