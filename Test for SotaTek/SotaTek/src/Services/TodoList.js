import ids from 'short-id';

const getTodoList = () => {
    return new Promise((resolve, reject) => {
        const storage = localStorage.getItem('todoList');
        let todoList = !storage ? [] : JSON.parse(storage);
        todoList =
            todoList.length > 1 ? sortTodoListByDate(todoList) : todoList;
        setTimeout(() => {
            resolve({
                status: 200,
                data: {
                    data: todoList,
                },
            });
        }, 300);
    });
};

const createOrEditTask = (task) => {
    return new Promise((resolve, reject) => {
        const storage = localStorage.getItem('todoList');
        let todoList = !storage ? [] : JSON.parse(storage);
        if (!task.id) {
            todoList = createNewTask(task, todoList);
        } else {
            todoList = updateTask(task, todoList);
        }
        localStorage.setItem('todoList', JSON.stringify(todoList));
        setTimeout(() => {
            resolve({
                status: 200,
                data: null,
            });
        }, 300);
    });
};

const deleteTaskWithId = (listId) => {
    return new Promise((resolve, reject) => {
        const storage = localStorage.getItem('todoList');
        let todoList = JSON.parse(storage);
        todoList = todoList.filter((item) => listId.indexOf(item.id) === -1);

        localStorage.setItem('todoList', JSON.stringify(todoList));
        setTimeout(() => {
            resolve({
                status: 200,
                data: null,
            });
        }, 300);
    });
};

function sortTodoListByDate(todoList) {
    return todoList.sort((x, y) => {
        const dueDateX = new Date(x.dueDate);
        const dueDateY = new Date(y.dueDate);
        return dueDateX.getTime() - dueDateY.getTime();
    });
}

function createNewTask(task, todoList) {
    const todoId = ids.generate('ID');
    return [
        ...todoList,
        {
            id: todoId,
            ...task,
        },
    ];
}

function updateTask(task, todoList) {
    let match = todoList.findIndex((item) => item.id === task.id);
    return [
        ...todoList.slice(0, match),
        { ...task },
        ...todoList.slice(match + 1),
    ];
}

const TodoListServices = {
    getTodoList,
    createOrEditTask,
    deleteTaskWithId,
};

export default TodoListServices;
