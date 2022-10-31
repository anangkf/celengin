import bcrypt from 'bcryptjs'

export const bcrypter = (word) =>{
  const saltRounds = 10
  const hash = bcrypt.hashSync(word, saltRounds)
  return hash
}