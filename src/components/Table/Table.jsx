import React, { useState } from 'react';
import TableRow from './TableRow/TableRow.jsx';
import classes from './Table.module.css';
import { tableData } from '../../data/tableData.js'

export default function Table() {
  const [data, setData] = useState(tableData); // Предполагается, что данные получим из бэкенда

  return (
    <table className={classes.table}>

      <thead>
        <tr>
          <th>Показатель</th>
          <th className={classes.currentDay}>Текущий день</th>
          <th className={classes.yesterday} colSpan="2">Вчера</th>
          <th className={classes.thisDaysWeek}>Этот день недели</th>
        </tr>
      </thead>

      <tbody>
        {data.map(rowData => <TableRow rowData={rowData} key={rowData.id} />)}
      </tbody>

    </table>
  )
}
