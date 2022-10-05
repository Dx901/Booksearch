import React from "react";
const Card = () =>{
    return(
        <React.Fragment>
            <div className="card">
                <img src="./images/img3.jpg" alt="" />
                <div className="botttom">
                    <h3 className="ttle">React JS</h3>
                    <p className="amount">&#36;25</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Card;