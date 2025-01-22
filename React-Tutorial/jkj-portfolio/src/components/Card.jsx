import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Avathar from "./Avathar.jsx";
import { Fragment } from "react";
const Card = ({ cardData, onCardClick, cardType }) => {

    function renderStackName(stackName) {
        switch (stackName) {
            case "frontend":
                return "Frontend";
            case "backend":
                return "Backend";
            case "framework":
                return "Framework";
            case "database":
                return "Database";
            case "testing":
                return "Testing";
            case "version_control":
                return "Version Control";
            case "cloud_technologies":
                return "Cloud Technologies";
            default:
                return stackName;
        }
    }



    return (
        <>
            {cardType === "projects" &&
                cardData.map((card) => (
                    <div className="card " key={card.id}>
                        <div className="card-head ubuntu-regular">
                            <h3>{card.title}</h3>
                            <small className="ubuntu-bold">{card.year}</small>
                        </div>
                        <div className="card-content ubuntu-light">
                            <p>{card.description}</p>
                        </div>
                        <div className="card-footer">
                            <button
                                type="button"
                                onClick={(e) => onCardClick(e, card.link)}
                                className="btn-custom btn-custom-xsmall"
                            >
                                {card.btnName} <ArrowRightAltIcon />
                            </button>
                        </div>
                    </div>
                ))}

            {cardType === "experience" &&
                cardData.map((card) => (
                    <div className="exp-card" key={card.id}>
                        <div className="exp-card-head ubuntu-regular">
                            <h3>{card.company}</h3>
                            <small className="ubuntu-bold exp-dur">{card.duration}</small>
                        </div>
                        <div className="card-content ubuntu-light exp-title">
                            <p>{card.title}</p>
                        </div>
                    </div>
                ))}

            {cardType === "techstack" &&
                cardData.map((tech_types_obj, index) => (
                    <section key={index} className="tech-card">
                        {Object.keys(tech_types_obj).map((tech_type_list) => (
                            <div key={tech_type_list}>
                                <h4 className="ubuntu-medium">{renderStackName(tech_type_list)}</h4>
                                <div className="tech-type ubuntu-medium">

                                    {tech_types_obj[tech_type_list].map((tech_item_obj) => (
                                        <div className="tech-item" key={tech_item_obj.name}>
                                            <Avathar imgPath={tech_item_obj.logo} styleClass="stack-container" />
                                            <p >{tech_item_obj.name}</p>
                                        </div >

                                    ))}
                                </div>
                            </div>


                        ))}
                        <br />
                    </section>
                ))}
        </>
    );
};

export default Card;
