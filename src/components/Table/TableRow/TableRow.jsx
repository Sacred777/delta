import React, { useState } from 'react';
import { getPercentString } from '../../../utils/getPercentString';
import { convertToFinancialFormat } from '../../../utils/convertToFinancialFormat';
import LineChart from '../../LineChart/LineChart';
import classes from './TableRow.module.css';

export default function TableRow({ rowData }) {
  const [isDisplayChart, setIsDisplayChart] = useState(false);
  const {id, index, currentDayValue, yesterdayValue, thisDaysWeek, parentId} = rowData;

  // Стилизация ячеек строки таблицы
  const percent = (currentDayValue - yesterdayValue) * 100 / yesterdayValue;
  const compareWeek = currentDayValue - thisDaysWeek;

  const indexStyle = {
    textIndent: parentId ? '10px' : '0',
  };

  const yesterdayClasses = `${classes.yesterday} ${(percent > 0) ? classes.positivePlus : (percent < 0) ? classes.negativePlus : ''}`;

  const percentStyle = {
    color: percent < 0 ? 'red' : 'green',
  };

  const percentClasses = `${classes.percent} ${(percent > 0) ? classes.positive : (percent < 0) ? classes.negative : ''}`;


  const thisDaysWeekClasses = `${classes.thisDaysWeek} ${(compareWeek > 0) ? classes.positive : (compareWeek < 0) ? classes.negative : ''}`;

  const toggleIsDisplayChart = () => {
    setIsDisplayChart(!isDisplayChart);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleIsDisplayChart();
    }
  }


  return (
    <>
      <tr
        className={classes.bodyRow}
        onClick={toggleIsDisplayChart}
        onKeyDown={handleKeyPress}
        tabIndex='0'
        role='button'
        aria-expanded={isDisplayChart}
        aria-controls={`row-details-${id}`}
        aria-label={`Кликните для открытия графика изменения показателя ${index}`}
      >

        <td style={indexStyle}>{index}</td>
        <td className={classes.currentDay}>
          {convertToFinancialFormat(currentDayValue)}
        </td>
        <td className={yesterdayClasses}>
          {convertToFinancialFormat(yesterdayValue)}
        </td>
        <td className={percentClasses} style={percentStyle}>
          {getPercentString(currentDayValue, yesterdayValue)}
        </td>

        <td className={thisDaysWeekClasses}>
          {convertToFinancialFormat(thisDaysWeek)}
        </td>
      </tr>

      {isDisplayChart &&
        <tr
          className={classes.expandedRow}
          id={`row-details-${id}`} aria-hidden={!isDisplayChart}
        >
          <td colSpan="5">
            <LineChart />
          </td>
        </tr>
      }

    </>
  )
}
