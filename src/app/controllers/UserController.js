import * as Yup from 'yup';
import User from '../models/user';
import checkPassword from '../../utils/checkPassword';

class UserController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatorio'),
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

      const { email } = req.body;
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: 'Esse email já existe' });
      }
      const user = await User.create(req.body);
      user.password = undefined;
      return res.json(user);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async delete(req, res) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Password é obrigatorio'),
      });

      await schema.validate(req.body, {
        abortEarly: false,
      });

      const { password } = req.body;
      const { id } = req.userId;
      const user = await User.findOne({ id }).select('+password');

      if (!user) {
        return res.status(404).json({ error: 'Usuário não existe' });
      }

      if (!(await checkPassword(password, user.password))) {
        return res.status(401).json({ error: 'Senha invalida' });
      }

      await user.deleteOne();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new UserController();
