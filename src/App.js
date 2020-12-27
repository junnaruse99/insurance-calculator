import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ summary, saveSummary ] = useState({
    quote: 0,
    info: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  // State for when to show spinner
  const [ spinner, saveSpinner ] = useState(false);


  return (
    <>
      <div className="container">
        <Header title="Insurance Quote" />

        <FormContainer>
          <Form 
            saveSummary={saveSummary}
            saveSpinner={saveSpinner}
          />
          {spinner ? <Spinner /> : null}
          <Summary
            summary={summary}
          />
          {!spinner ? <Result summary={summary} /> : null}
        </FormContainer>
      </div>
    </>
  );
}

export default App;
