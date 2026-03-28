import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import smile from "../assets/icons/smile.svg";
import trash from "../assets/icons/trash.svg";
import copy from "../assets/icons/copy.svg";

export default function ItemCard({
      movement,
      span, // ← ensure this prop is included
      colors,
      description,
      forKids,
      image,
      id,
      deleteFn,
      duplicateFn
}) {
    return (
        <div className="designCard">
            {forKids && <div className="forKids"> <img src={smile} title="this was made for kids" /></div>}

            <div className="cardImg">
                <img src={image} alt={"movement"} />
            </div>

            <div className="actions">
                <a href="#" 
                    onClick={(evt) =>{
                        evt.preventDefault();
                        deleteFn(id)
                    }}>
                    <img src={trash} />
                </a>
                <a href="#" 
                    onClick={(evt) =>{
                        evt.preventDefault();
                        duplicateFn(id)
                    }}>
                    <img src={copy} />
                </a>
            </div>

            <div className="cardTitle">
                {movement} {span && <span className="cardSpan">({span})</span>}
            </div>

            {colors.map((color) => {
                return <div key={color} className={clsx(["stripe", color])} />
            })}
        </div>
    )
}

ItemCard.propTypes = {
      movement: PropTypes.string,
      span: PropTypes.string,
      colors: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      forKids: PropTypes.bool,
      image: PropTypes.string,
      id: PropTypes.string,
      duplicateFn: PropTypes.func,
      deleteFn: PropTypes.func    
}