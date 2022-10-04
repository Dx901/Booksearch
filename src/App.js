import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


const App = () => {

  //Adding the local state for search input using useState hooks

  const [searchTerm, setSearchTerm]= useState('')
  const [books, setBooks] = useState({ items: [] })
  const onInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  let API_URL = `https://www.googleapis.com/books/v1/volumes`

  const fetchBooks = async () => {
    //The call to API
    const result = await axios.get(`${API_URL}?q=${searchTerm}`)
    //
   // console.log(result.data)
   setBooks(result.data)
  }

  //The submit handler

  const onSubmitHandler = (e) => {
    e.preventDefault()
    //fetchbooks calls the google books API
    fetchBooks()
  }
  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for a book</span>
          
          <input
            type="search"
            placeholder="microservice, restful design, etc,"
            //
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type='submit'>Search</button>
        </label>
      </form>

      {/* UI for books search result */}
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt = {`${book.volumeInfo.title}book`} src={`http://books.goog;e.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                
                </div>
                <hr />

              </li>
            )
          })}
      </ul>
    </section>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
