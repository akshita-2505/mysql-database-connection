'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.name = task.name;
    this.gender = task.gender;
    this.email = task.email;
    this.phone_number= task.phone_number;
    this.password= task.password;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Task.createTask = function createUser(newTask, result) {
    sql.query("INSERT INTO registration set ?", newTask, function (err, res) {

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
Task.getTaskById = function createUser(registratiobId, result) {
    sql.query("Select task from registration where id = ? ", registrationId, function (err, res) {
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
    sql.query("Select * from registration", function (err, res) {

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
    sql.query("UPDATE registration SET name = ? , email = ? ,gender = ?, phone_number = ?,password=? WHERE id = ?",
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
    sql.query("DELETE FROM registration WHERE id = ?", [id], function (err, res) {

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