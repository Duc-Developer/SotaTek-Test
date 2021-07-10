import ids from 'short-id';

const getTodoList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: [],
            });
        }, 300);
    });
};

const createOrEditTask = (task) => {
    return new Promise((resolve, reject) => {
        const storage = localStorage.getItem('todoList');
        let todoList = !storage ? [] : JSON.parse(storage);
        if (!task.id) {
            createNewTask(task, todoList);
        } else {
            updateTask(task, todoList);
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

function createNewTask(task, todoList) {
    const todoId = ids.generate('ID');
    todoList.push({
        id: todoId,
        ...task,
    });
}

function updateTask(task, todoList) {
    let match = todoList.findIndex((item) => item.id === task.id);
    todoList = [
        ...todoList.slice(0, match),
        { ...task },
        ...todoList.slice(match + 1),
    ];
}

const TodoListServices = {
    getTodoList,
    createOrEditTask,
};

export default TodoListServices;
