import { useState } from 'react'
import './App.css'
import QuestionTable from './components/QuestionTable';
import { QuestionData, Subject } from './types';
import { Button } from '@mui/material';

function App() {
  const [subject, setSubject] = useState<Subject>(Subject.Chemistry);
  const [data, setData] = useState<QuestionData>({
    chemistry: [],
    math: [],
    physics: []
  });

  return (
    <>
      <Button variant="contained">Add Question</Button>
      <QuestionTable 
        subject={subject}
        data={data[subject]}
      />
    </>
  )
}

export default App
