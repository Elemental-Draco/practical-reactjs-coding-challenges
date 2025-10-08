import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { useState } from 'react'

const App = () => {
  const [wordCount, setWordCount] = useState(0);


  function handleTextChange(newText) {
    const words = newText.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox data={{wordCount}} />
          <TextArea onTextChange={handleTextChange} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
