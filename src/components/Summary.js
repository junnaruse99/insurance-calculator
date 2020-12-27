import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    width:100%;
`;


const Summary = ({ summary }) => {

    const {brand, year, plan} = summary.info;
    
    if (brand === "" || year === "" || plan === "") {
        return null;
    }

    return(
        <div className="row">
            <SummaryContainer>
                <h2>Quote Summary</h2>
                <ul>
                    <li>Brand: {brand}</li>
                    <li>Plan: {plan}</li>
                    <li>Year: {year}</li>
                </ul>
            </SummaryContainer>
        </div>
    
    );
};

Summary.propTypes = {
    summary: PropTypes.object.isRequired
};
 
export default Summary;