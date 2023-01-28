const Task = require("../models/task");
const getAllTasks = (req, res) => {
  res.status(200).send("it works");
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
    res.status(500).json({msg:error})
  }
};

const getSingleTask = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${id}` });
  }
  res.status(200).json({ success: true, data: id });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${id}` });
  }
  res.status(200).json({ success: true, data: task });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, msg: `cannot find task with id of ${id}` });
  }
  // res.status(200).json({success:true,data:id})
  res.status(200).json({ success: true, data: "id" });
};

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
