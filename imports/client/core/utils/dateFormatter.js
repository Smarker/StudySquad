'use strict'
import moment from 'moment'

export function getFormattedDate(date) {
  return date ? moment(date).format('MM/DD/YYYY') : '';
}