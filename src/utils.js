import { DateTime } from 'luxon'

export const inputChangeHandler = (e, state, updateState) => {
  updateState({
    ...state,
    [e.target.name]:
      e.target.name === 'isAdmin' ? e.target.checked : e.target.value,
  })
}
export const parsedDate = (date) => {
  const { c } = DateTime.fromISO(date)
  return `${c.day < 10 ? 0 + c.day + 1 : c.day + 1}/${c.month}/${c.year}`
}
export const parsedFormDate = (date) => {
  const { c } = DateTime.fromISO(date)
  const day = c.day < 10 ? `0${c.day}` : c.day
  const month = c.month < 10 ? `0${c.month}` : c.month
  return `${c.year}-${month}-${day}`
}

export const countDays = (startDate, endDate) => {
  let date1 = DateTime.fromISO(startDate)
  let date2 = DateTime.fromISO(endDate)
  const diff = date2.diff(date1, 'days')
  return diff.values.days
}
