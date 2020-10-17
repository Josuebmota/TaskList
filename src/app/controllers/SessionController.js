import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/user';
import checkPassword from '../../utils/checkPassword';

class SessionController {
  async login(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('Email é obrigatoria'),
        password: Yup.string()
          .required('Password é obrigatorio')
          .min(6, 'Campo deve ter no minino 6 caracteres'),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }
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
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new SessionController();
