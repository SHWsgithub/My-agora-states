import { useEffect, useState } from 'react';
import './App.css';
import DiscussionList from './DiscussionList';
import DiscussionSubmit from './DiscussionSubmit';

function App() {

  const [discussions, setDiscussions] = useState([]);
  
  useEffect (() => {
    fetch('http://localhost:4000/discussions')
    .then(res => res.json())
    .then(json => {
      setDiscussions(json);
    })
  }, [])

  return (
    <div className="App">
      <DiscussionSubmit />
      <DiscussionList discussions={discussions} />
    </div>
  );
}

export default App;
