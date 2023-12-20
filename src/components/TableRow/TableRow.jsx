import React from 'react'
import { getPercentString } from '../../utils/getPercentString';
import { convertToFinancialFormat } from '../../utils/convertToFinancialFormat';

export default function TableRow({rowData}) {
  const {id, index, currentDateValue, yesterdayValue, thisDaysWeek} = rowData;

  return (
    <tr>
      <td>{index}</td>
      <td>{convertToFinancialFormat(currentDateValue)}</td>
      <td>{yesterdayValue}</td>
      <td>{getPercentString(currentDateValue, yesterdayValue)}</td>
      <td>{thisDaysWeek}</td>
    </tr>
  )
}
