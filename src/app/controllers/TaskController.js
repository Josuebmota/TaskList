import Task from '../models/task';
import checkPassword from '../../utils/checkPassword';

class TaskController {
  async store(req, res) {
    const task = await Task.create({ ...req.body, user: req.userId });
    return res.json(task);
  }

  async index(req, res) {
    const tasks = await Task.find({ user: req.userId });
    return res.json(tasks);
  }

  async show(req, res) {
    const task = await Task.find({
      user: req.userId,
      id: req.params.taskId,
    }).populate('user');
    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    return res.json(task);
  }

  async update(req, res) {
    const task = await Task.findById({
      user: req.userId,
      id: req.params.taskId,
    }).populate('user');

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    await task.updateOne(req.body);

    return res.status(204).json();
  }

  async delete(req, res) {
    const task = await Task.findById({
      user: req.userId,
      id: req.params.taskId,
    }).populate('user');

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    await task.deleteOne();

    return res.status(204).json();
  }
}

export default new TaskController();
