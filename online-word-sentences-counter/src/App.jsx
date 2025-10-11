import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { useState } from 'react'

const App = () => {
  const [resultData, setResultData] = useState({
    wordCount:0,
    charCount:0,
    sentenceCount:0
  });


  function handleTextChange(newText) {
    const words = newText.trim().split(/\s+/).filter(Boolean);
    const chars = newText.length;
    const sentences = newText.trim().split(/[.?!]+/).map(s => s.trim()).filter(Boolean);
    console.log(sentences)
    setResultData({
      wordCount: words.length,
      charCount: chars,
      sentenceCount: sentences == null ? 0 : sentences.length
    });
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox data={resultData} />
          <TextArea onTextChange={handleTextChange}/>
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
