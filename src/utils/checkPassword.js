import bcrypt from 'bcrypt';

export default function checkPassword(password, otherPassword) {
  return bcrypt.compare(password, otherPassword);
}
