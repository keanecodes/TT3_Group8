import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Container from "react-bootstrap/Container";

const schema = yup.object().shape({
    accountKey: yup.string()
        .required('Account Key required'),
    orderType: yup.string()
        .required('Please state the Order Type'),
    assetAmount: yup.number()
        .required('Asset amount required'),
});

const BuySellAssets = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => { 
    console.log(data);
    console.log(data.dateTime); 
    setIsError(false);
    try {
      // const res = 
      await fetch('http://localhost:8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP',
        },
        body: JSON.stringify({
            "accountKey": data.accountKey,
            "orderType": data.orderType,
            "assetAmount": data.assetAmount,
        }),
      })
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    } catch (error) {
      setIsError(true);
    }

  };

  return (
      <div>
        <h1 className="text-center">Make Payments</h1>
        <Container className="d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>

            <div className="form-row">
              <div className="form-group col">
                <label>Account Key:</label>
                <input name="accountKey" type="text" ref={register} className={`form-control ${errors.accountKey ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.accountKey?.message}</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>Order Type:</label>
                <input name="orderType" type="text" ref={register} className={`form-control ${errors.orderType ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.orderType?.message}</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>Asset Amount:</label>
                <input name="assetAmount" type="number" ref={register} className={`form-control ${errors.assetAmount ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.assetAmount?.message}</div>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-1">Submit</button>
            </div>
            <div className="form-group">
              <button className="btn btn-secondary" type="reset">Reset</button>
            </div>
            {isError && <div>Something went wrong... </div>}
          </form>
        </Container>
      </div>
  )
}

export default BuySellAssets;