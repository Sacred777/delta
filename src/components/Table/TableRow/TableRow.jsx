import React, { useState } from 'react';
import { getPercentString } from '../../../utils/getPercentString';
import { convertToFinancialFormat } from '../../../utils/convertToFinancialFormat';
import LineChart from '../../LineChart/LineChart';
import classes from './TableRow.module.css';

export default function TableRow({ rowData }) {
  const [isDisplayChart, setIsDisplayChart] = useState(false);
  const {index, currentDayValue, yesterdayValue, thisDaysWeek} = rowData;

  return (
    <>
      <tr className={classes.bodyRow} onClick={() => setIsDisplayChart((prev) => !prev)}>
        <td>{index}</td>
        <td className={classes.currentDay}>
          {convertToFinancialFormat(currentDayValue)}
        </td>
        <td className={classes.yesterday}>
          <span>{convertToFinancialFormat(yesterdayValue)}</span>
          <span>{getPercentString(currentDayValue, yesterdayValue)}</span>
        </td>
        <td className={classes.thisDaysWeek}>
          {convertToFinancialFormat(thisDaysWeek)}
        </td>
      </tr>

      {isDisplayChart &&
        <tr>
          <td colSpan="5">
            <LineChart />
          </td>
        </tr>
      }

    </>
  )
}
