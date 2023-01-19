const express=require('express')
const { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask } = require('../functions/taskfunction')
const router=express.Router()

router.route('/').get(getAllTasks)
router.route('/').post(createNewTask)
router.route('/:id').get(getSingleTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)
 


module.exports=router