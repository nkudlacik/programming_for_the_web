{/* IMPORTS */}
import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
import smile from "../assets/icons/smile.svg";

{/* MASTHEAD FN */}
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Children's Graphic Design at the Turn of the Millenium"/>
            
                <p>Duplicate, Delete, Add, & Explore!</p>

            <div className="legend">
                <div className="keyImg">
                    <img src={smile} alt="smile" />
                </div>

                <p>= made for kids</p>
            </div>
        </div>
    )
}