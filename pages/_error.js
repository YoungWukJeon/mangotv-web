import Error from 'next/error';
import React from 'react';
import PropTypes from 'prop-types';
 
const ErrorComponent = ({ statusCode }) => {
  console.log(`error: ${statusCode}`);
  return (
    <>
      <Error statusCode={statusCode} />
    </>
  )
};

ErrorComponent.propTypes = {
  statusCode: PropTypes.number
}

ErrorComponent.defaultProps = {
  statusCode: 400
}

ErrorComponent.getInitialProps = async (context) => {
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : null;
  return {statusCode};
}

export default ErrorComponent;