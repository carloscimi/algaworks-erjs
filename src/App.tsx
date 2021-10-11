import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post from './components/Post';

function App() {
  const [post] = useState({
    title: 'Titulo maneiro',
    content: 'Lorem Ipsum'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Card title={"Card"}>
          <Post post={post} totalComments={12}/>
        </Card>
      </header>
    </div>
  );
}

export default App;
