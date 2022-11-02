import moment from "moment/moment";

/**
 * 
 * @param {*} date date formated string
 */
export const formatDate = (date) =>{
  return moment(date).format('D MMMM YYYY')
}