import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


const Messagge = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    width:100%;
`;

const QuoteText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    width:100%;
`;

const QuoteContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
` ;


const Result = ({ summary }) => {

    const {quote} = summary;
    
    if (quote === 0) {
        return (<div className="row"><Messagge>Please select brand, year and type of insurance</Messagge></div>);
    }

    return ( 
        <QuoteContainer className="row">
            <TransitionGroup
                component="div"
                className="result"
            >
                <CSSTransition
                    classNames="result"
                    key={quote}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <QuoteText>Total amount is: $ {quote}</QuoteText>
                </CSSTransition>
            </TransitionGroup>
        </QuoteContainer>
     );
};

Result.propTypes = {
    summary: PropTypes.object.isRequired
};
 
export default Result;