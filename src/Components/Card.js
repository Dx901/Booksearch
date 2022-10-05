import React from "react";
const Card = ({ book }) => {
  console.log(book);
  return (
    <React.Fragment>
      {book.map((item) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
        let amount = item.saleInfo.saleability
        if (thumbnail!= undefined)
        {
            return (
                <React.Fragment>
                  <div className="card">
                    <img src={thumbnail} alt="" />
                    <div className="bottom">
                      <h3 className="title">{item.volumeInfo.title}</h3>
                      {/* <p className="amount">&#36;25</p> */}
                    </div>
                  </div>
                  </React.Fragment>
                );
        }


        
      })}
      {/* <div className="card">
                <img src="./images/img3.jpg" alt="" />
                <div className="botttom">
                    <h3 className="ttle">React JS</h3>
                    <p className="amount">&#36;25</p>
                </div>
            </div> */}
    </React.Fragment>
  );
};
export default Card;
