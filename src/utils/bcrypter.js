import bcrypt from 'bcryptjs'

/**
 * @params word = string, password inputted by user
 */
export const bcrypter = (word) =>{
  const saltRounds = 10
  const hash = bcrypt.hashSync(word, saltRounds)
  return hash
}

/**
 * @params word = string, password inputted by user
 * @params hash = password returned from server
 */
export const compare = (word, hash) =>{
  const result = bcrypt.compare((word, hash))
  return result
}