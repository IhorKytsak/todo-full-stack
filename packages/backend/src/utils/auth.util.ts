import bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error('Error in bcrypt hashing process');
  }
};

export const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);

    return match;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};
