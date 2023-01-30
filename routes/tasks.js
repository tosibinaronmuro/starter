const express=require('express')
const { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask } = require('../functions/taskfunction')
const router=express.Router()

router.route('/').get(getAllTasks).post(createNewTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)
 
 


module.exports=router