import './index.scss'



const ResultBox = ({data}) => {
  const resultBar = [
    {
      title: 'Words',
      value: data.wordCount,
    },
    {
      title: 'Characters',
      value: data.charCount,
    },
    {
      title: 'Sentences',
      value: data.sentenceCount,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
