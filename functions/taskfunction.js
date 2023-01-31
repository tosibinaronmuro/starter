const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, tasks: tasks });
});
const createNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  if (!req.body) {
    return res
      .status(401)
      .json({ success: false, msg: "cannot add void task" });
  }
  res.status(201).json({ success: true, data: { task } });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${taskID}` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!id) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Task.deleteOne({ _id: id });
  if (!id) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${id}` });
  }
  res
    .status(200)
    .json({ success: true, message: `deleted task with id of ${id}` });
});

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
