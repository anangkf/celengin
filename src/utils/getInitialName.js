/**
 * 
 * @param {*} firstname firstname
 * @param {*} lastname lastname
 */
export const getInitialName = (firstname, lastname) =>{
  const initial = firstname.charAt(0) + lastname.charAt(0)
  return initial.toUpperCase()
}