/**
 * 
 * @param {*} firstname firstname
 * @param {*} lastname lastname
 */
export const getInitialName = (firstname, lastname) =>{
  return(
    firstname[0].toUpperCase() + lastname[0].toUpperCase
  )
}