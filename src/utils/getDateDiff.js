import moment from "moment";
/**
 * 
 * @param {*} target date formatted string
 * @return {object} object consists of days different from now, moths different from now
 */
export const getDateDiff = (target) =>{
  const momentTarget = moment(target)
  const today = moment()
  const daysDiff = moment.duration(momentTarget.diff(today)).asDays()
  const monthsDiff = moment.duration(momentTarget.diff(today)).asMonths()
  return {
    days: Math.floor(daysDiff),
    months: Number(monthsDiff.toFixed(1))
  }
}