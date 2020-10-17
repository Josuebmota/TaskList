import User from '../models/user';
import checkPassword from '../../utils/checkPassword';

class UserController {
  async store(req, res) {
    try {
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
  }
}

export default new UserController();
