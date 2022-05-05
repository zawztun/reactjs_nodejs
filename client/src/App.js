
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
function App() {
  const [name, setName] = useState('')
  const [test, setTest] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:9000/testAPI')
      .then(res => setTest(res.data))
  }, []);

  async function postName(e) {
    e.preventDefault()
    setName('')
    
    try {
      await axios.post('http://localhost:9000/post_name', {
        name
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={postName} >
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <button type= "submit">Send Name</button>
        </form>
        <h1>{test}</h1>
      </header>
    </div>
  );
}

export default App;
