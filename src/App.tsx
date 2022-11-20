import ChapterOne from './materials/chapter1';

function App() {
  const result: number[] | string = ChapterOne.gaussJordanElim([[1,2,3,5],[5,6,7,8],[9,10,13,12]]);
  return (
    <div>
      <h1>Answer</h1>
      {
        typeof result === 'object' ? (
          result.map((answer: number | string) => (
            <div>{answer}</div>
          )) 
        ) : (
          <div>{result}</div>
        )
      }
    </div>
  )
}

export default App
