import './index.scss'



const TextArea = ({onTextChange}) => {
  function handleChange(e) {
    const text = e.target.value;
    onTextChange(text);
  }
  return <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange}/>
}

export default TextArea
