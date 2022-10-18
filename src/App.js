import { useEffect, useState, useRef } from 'react';
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

  const discussionId = useRef(45);

  const onCreate = (author, title, story) => {
    const creatAt = new Date().getTime();
    const getRandomNumber = (min, max) => {
      return parseInt(Math.random() * (Number(max) - Number(min) + 2));
    };

    const newDiscussion = {
      author,
      title,
      avatarUrl: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      createdAt: creatAt,
      story,
      id: discussionId.current
    };

    discussionId.current += 1;
    setDiscussions([newDiscussion, ...discussions]);
  }

  return (
    <div className="App">
      <DiscussionSubmit onCreate={onCreate}/>
      <DiscussionList discussions={discussions} />
    </div>
  );
}

export default App;
