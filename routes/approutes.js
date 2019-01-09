module.exports = function(app) {
    var todoList = require('../controller/appController');
    var categories = require('../controller/categoriesController');

    // todoList Routes
    app.route('/registration')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/registration/:registrationId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/categories')
        .get(categories.list_all_tasks)
        .post(categories.create_a_task);

    app.route('/categories/:categoriesId')
        .get(categories.read_a_task)
        .put(categories.update_a_task)
        .delete(categories.delete_a_task);

};