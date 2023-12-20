import React, { useState } from 'react';
import TableRow from '../TableRow/TableRow';
import classes from './Table.module.css';
import {tableData} from '../../data/tableData.js'

export default function Table() {
  const [data, setData] = useState(tableData); // Предполагается, что данные получим из бэкенда


  return (
    <table className={classes.table} cellSpacing='3'>

      <colgroup>
        <col></col>
        <col className={classes.currentDate}></col>
        <col span="2"></col>

      </colgroup>

      <thead>
        <tr>
          <th>Показатель</th>
          <th>Текущий день</th>
          <th>Вчера</th>
          <th>Этот день недели</th>
        </tr>
      </thead>

      <tbody>
        {data.map(rowData => <TableRow rowData={rowData} key={rowData.id}/>)}
      </tbody>

    </table>
  )
}
