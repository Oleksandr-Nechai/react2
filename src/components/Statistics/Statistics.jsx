import PropTypes from 'prop-types';
// import s from './Statistics.module.css';

function Statistics({
  arrayFeedbackOptions,
  arrayFeedbackValues,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      {arrayFeedbackOptions.map((keyState, index) => (
        <li key={keyState}>
          <span>{keyState}:</span>
          <span>{arrayFeedbackValues[index]}</span>
        </li>
      ))}
      <li>
        <span>Total:</span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  arrayFeedbackOptions: PropTypes.arrayOf(PropTypes.string.isRequired)
    .isRequired,
  arrayFeedbackValues: PropTypes.arrayOf(PropTypes.number.isRequired)
    .isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
