import React from 'react';
import RedditPage from './components/CardPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <RedditPage
          cardUrl = "https://www.reddit.com/r/discgolf.json"
        />
      </div>
   )
  }
}

export default App;