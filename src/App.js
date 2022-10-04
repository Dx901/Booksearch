import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App = () => {

  //Adding the local state for search input using useState hooks

  const [searchTerm, setSearchTerm]= useState('')
  const onInputChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <section>
      <form>
        <label>
          <span>Search for a book</span>
          
          <input
            type="search"
            placeholder="microservice, restful design, etc,"
          />
          <button type='submit'>Search</button>
        </label>
      </form>
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
