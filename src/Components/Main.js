import React from "react";
import Card from "./Card";

const Main = () => {
    return (
        <>

            <div className="header">
                <div className="row1">
                    <h1>The more that you read the more you will know<br/>The more you learn the more places you will go</h1>
                </div>
                <div className="row2">
                    <h2>Find A book</h2>
                
                    <div className="search">
                        <input type="text" placeholder="Enter A Book Name"/>
                        <button><i className="fas fa-search"></i></button>
                    </div>   
                    <img src="./images/img4.png" alt=""/>
                </div>
            </div>
            <div className="container">
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
               
            </div>
        </>
    )
}
export default Main;
