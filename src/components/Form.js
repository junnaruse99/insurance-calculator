import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getInsuranceByYear, getInsuranceByBrand, getInsuranceByPlan } from '../helper';
import PropTypes from 'prop-types';


const Button = styled.button`
    background-color: #00838F;
    color: #fff;
    text-transform: uppercase;
    font: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        color: #fff;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ saveSummary, saveSpinner }) => {

    // State  for saving all info of form
    const [ info, saveInfo ] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    // State for submit error
    const [ error, updateError ] = useState(false);

    // Extract values from state
    const { brand, year, plan } = info;

    // Update information of form
    const updateInfo = e => {
        saveInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    }

    // Submit
    const quoteInsurance = e => {
        e.preventDefault();

        // Validation
        if ( brand === "" || brand === "-- Select --" || year === "" || year === "-- Select --" || plan === "") {
            updateError(true);
            return;
        }

        updateError(false);

        // Establish a default value for insurance
        let defaultInsurance = 2000;

        // Get insurance by year
        defaultInsurance = getInsuranceByYear(parseInt(year), defaultInsurance);

        // Now add the increase by the type of brand
        defaultInsurance = getInsuranceByBrand(brand, defaultInsurance);

        // Finally add the increase by type of plan
        defaultInsurance = getInsuranceByPlan(plan, defaultInsurance);

        // The following code is not necesary, it's only for example purposes
        saveSpinner(true);

        setTimeout(() => {
            saveSpinner(false);

            saveSummary({
                quote: defaultInsurance,
                info
            });
        }, 2000);
    }


    return ( 
        <form
            onSubmit={quoteInsurance}
        >
            { error ? <div className="row"><Error>All fields are mandatory</Error></div> : null}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Brand</label>
                <select 
                    className="form-control col-sm-10"
                    name="brand"
                    value={brand}
                    onChange={updateInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                    <option value="Asian">Asian</option>
                </select>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Year</label>
                <select 
                    className="form-control col-sm-10"
                    name="year"
                    value={year}
                    onChange={updateInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </div>

            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="plan"
                    value="Basic"
                    checked={plan === "Basic"}
                    onChange={updateInfo}
                />
                <label className="form-check-label">Basic</label>
            </div>

            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="plan"
                    value="Complete"
                    checked={plan === "Complete"}
                    onChange={updateInfo}
                />                
                <label className="form-check-label">Complete</label>
            </div>

            <div className="row">
                <Button
                    className="btn btn-block mt-4"
                    type="submit"
                >Submit</Button>
            </div>
        </form>
     );
};

Form.propTypes = {
    saveSummary: PropTypes.func.isRequired,
    saveSpinner: PropTypes.func.isRequired
};
 
export default Form;