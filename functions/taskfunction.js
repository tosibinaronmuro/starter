const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, tasks: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (!req.body) {
      return res
        .status(401)
        .json({ success: false, msg: "cannot add void task" });
    }
    res.status(201).json({ success: true, data: { task } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `cannot find task with id of ${taskID}` });
    }
   
    res.status(200).json({  task } );
  } catch (error) {
    res.status(500).json({ message: error, successful: false });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id:taskID } = req.params;
     
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body,{new:true,runValidators:true});
    if (!id) {
      return res
        .status(404)
        .json({ success: false, msg: `cannot find task with id of ${taskID}` });
    }
    res
      .status(200)
      .json({task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
