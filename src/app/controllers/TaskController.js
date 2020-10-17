import * as Yup from 'yup';
import Task from '../models/task';

class TaskController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Titulo é obrigatorio'),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }

      const task = await Task.create({ ...req.body, user: req.userId });
      return res.json(task);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async index(req, res) {
    try {
      const tasks = await Task.find({ user: req.userId });
      if (tasks.length === 0) {
        return res.status(404).json({ error: 'Usuario sem tarefas' });
      }
      return res.json(tasks);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const task = await Task.findById({
        user: req.userId,
        _id: req.params.taskId,
      }).populate('user');
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      return res.json(task);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async update(req, res) {
    try {
      const task = await Task.findById({
        user: req.userId,
        _id: req.params.taskId,
      }).populate('user');

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      await task.updateOne(req.body);
      return res.status(204).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async delete(req, res) {
    try {
      const task = await Task.findById({
        user: req.userId,
        _id: req.params.taskId,
      }).populate('user');

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      await task.deleteOne();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new TaskController();
