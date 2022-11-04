/**
 * 
 * @param {Number} nominal amount of celengan target
 * @param {Number} daysDiff days different from now in number
 * @param {Number} monthsDiff months different from now in number
 * @returns {object} consists celengan_per_hari and celengan_per_bulan
 */
export const getCelenganPreset = (nominal, daysDiff, monthsDiff) =>{
  
  const celengan_per_hari = daysDiff > 1 ? Math.ceil(nominal /daysDiff) : nominal
  const celengan_per_bulan = monthsDiff > 1 ? Math.ceil(nominal /monthsDiff) : nominal

  return {celengan_per_hari, celengan_per_bulan}
}