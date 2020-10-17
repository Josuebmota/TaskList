import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/user';
import checkPassword from '../../utils/checkPassword';

class SessionController {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (!(await checkPassword(password, user.password))) {
      return res.status(404).json({ error: 'Senha não corresponde' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
