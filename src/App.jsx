import './App.css'
import Home from './components/Home.jsx';
import background from '../src/assets/background.png';

function App() {
  return (
    <body className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'top',
      height: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <Home />
    </body>
  )
}

export default App;
