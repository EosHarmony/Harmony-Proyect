const express = require('express');
const router = express.Router();
const Task = require('../models/task');
router.get('/', async(req,res) =>{
    const tasks = await Task.find()
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    let {title,description} = req.body;
    let task = new Task({
        title, description
    });
    await task.save();
    res.json({status : 'Tarea Guardada'});
});

router.put('/:id', async(req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status: 'Tarean Actualizada'});
});

router.delete('/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Delete'});
});

module.exports = router;