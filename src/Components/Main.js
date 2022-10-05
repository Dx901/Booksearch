import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const[ search, setSearch]= useState('')
    const [bookData, setData]= useState([])
    const searchBook= (evt) => {
        if (evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCIGIoQNdyPB7k_fDH_NKR_hdZRiY6ufvk')
            //console.log("Dyes built it")
            // .then (res=>console.log(res.data.items))
            .then (res=>setData(res.data.items))
            .catch(err=>console.log(err))

        }
    }
    return (
        <>

            <div className="header">
                <div className="row1">
                    <h1>The more that you read the more you will know<br/>The more you learn the more places you will go</h1>
                </div>
                <div className="row2">
                    <h2>Find A book</h2>
                
                    <div className="search">
                        <input type="text" placeholder="Enter A Book Name"
                        value={search} onChange= {e => setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>   
                    <img src="./images/img4.png" alt=""/>
                </div>
            </div>
            <div className="container">
            {
                <Card book={bookData}/>

            }
                   
            </div>
        </>
    )
}
export default Main;




//AIzaSyACMA-5AdAbcikhxGoncUzn4-nNblF5k5g      first api key