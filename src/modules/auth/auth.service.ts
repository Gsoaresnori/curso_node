import { UserModel } from '@modules/user/user.model';
import { AuthDTO } from './dtos/auth.dto';
import { getUserByEmail } from '@modules/user/user.service';

export const validateAuth = async (authDto: AuthDTO): promisse<UserModel> => {
  const user = getUserByEmail(authDto.email);

  return user;
};
