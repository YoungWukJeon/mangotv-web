import Error from 'next/error';
import React from 'react';
import PropTypes from 'prop-types';
type ErrorComponent = {
  statusCode: number;
}
 
const ErrorComponent = ({ statusCode = 400 }: ErrorComponent) => {
  console.log(`error: ${statusCode}`);
  return (
    <>
      <Error statusCode={statusCode} />
    </>
  )
};

ErrorComponent.getInitialProps = async (context: any) => {
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : null;
  return {statusCode};
}

export default ErrorComponent;