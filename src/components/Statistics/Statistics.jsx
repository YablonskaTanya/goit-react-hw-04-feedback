import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li>
        <p className={css.statisticsInfo}> Good: {good}</p>
      </li>
      <li>
        <p className={css.statisticsInfo}> Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.statisticsInfo}> Bad: {bad}</p>
      </li>
      <li>
        <p className={css.statisticsInfo}> Total: {total}</p>
      </li>
      <li>
        <p className={css.statisticsInfo}>
          Positive feedback: {positivePercentage} %
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
