'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.name = task.name;
    this.detail = task.detail;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Task.createTask = function createUser(newTask, result) {
    sql.query("INSERT INTO categories set ?", newTask, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Task.getTaskById = function createUser(categoriesId, result) {
    sql.query("Select task from categories where id = ? ", categoriesId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Task.getAllTask = function getAllTask(result) {
    sql.query("Select * from categories", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Task.updateById = function(id, task, result){
    sql.query("UPDATE categories SET name = ? , email = ? ,gender = ?, phone_number = ?,password=? WHERE id = ?",
        [task.name,task.email,task.gender,task.phone_number,task.password, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                result(null, res);
            }
        });
};
Task.remove = function(id, result){
    sql.query("DELETE FROM categories WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

module.exports= Task;