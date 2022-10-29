export const formatRp = (number) =>{
  return(
    `Rp. ${new Intl.NumberFormat('ID').format(
      number
    )}`
  )
}