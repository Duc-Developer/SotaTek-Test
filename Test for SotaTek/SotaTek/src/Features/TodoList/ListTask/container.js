import React, { useEffect, useState } from 'react';

import ListTaskComponent from './component';
import BulkActions from './BulkActions';

import TodoListServices from '../../../Services/TodoList';
import {
    useEventListener,
    useDispatchEvent,
    useDebounce,
} from '../../../Utilities/useHooks';
import { EVENTS } from '../../../Utilities/Constants';

export default function ListTaskContainer() {
    const [evSuccess, dispatchEventSuccess] = useDispatchEvent(EVENTS.SUCCESS);
    const [list, setList] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    const fetchListTask = async () => {
        setIsLoading(true);
        try {
            const response = await TodoListServices.getTodoList(searchString);
            setList(response.data.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const debouncedSearchString = useDebounce(searchString);
    useEffect(() => {
        fetchListTask();
    }, [debouncedSearchString]);
    useEventListener(EVENTS.REFRESH_TODO_LIST, fetchListTask);

    const handleChangeSearch = (event) => {
        setSearchString(event.target.value);
    };

    const handleRemoveListChecked = async () => {
        try {
            const response = await TodoListServices.deleteTaskWithId(
                checkedList
            );
            if (response.status === 200) {
                const newList = list.filter(
                    (item) => checkedList.indexOf(item.id) === -1
                );
                setList(newList);
                setCheckedList([]);
                dispatchEventSuccess(evSuccess);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateTask = async (task) => {
        try {
            const response = await TodoListServices.createOrEditTask(task);
            if (response.status === 200) {
                const match = list.findIndex((item) => item.id === task.id);
                const newList = [
                    ...list.slice(0, match),
                    { ...task },
                    ...list.slice(match + 1),
                ];
                setList(newList);
                dispatchEventSuccess(evSuccess);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleRemoveTask = async (taskId) => {
        try {
            const response = await TodoListServices.deleteTaskWithId([taskId]);
            if (response.status === 200) {
                const newList = list.filter((item) => item.id !== taskId);
                const newCheckedList = checkedList.filter(
                    (id) => id !== taskId
                );
                setCheckedList(newCheckedList);
                setList(newList);
                dispatchEventSuccess(evSuccess);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckOrUnCheckTask = (taskId, status) => {
        if (status) {
            setCheckedList([...checkedList, taskId]);
        } else {
            const newCheckedList = checkedList.filter((id) => id !== taskId);
            setCheckedList(newCheckedList);
        }
    };
    return (
        <>
            <ListTaskComponent
                list={list}
                searchString={searchString}
                isLoading={isLoading}
                handleChangeSearch={handleChangeSearch}
                handleRemoveTask={handleRemoveTask}
                handleUpdateTask={handleUpdateTask}
                handleCheckOrUnCheck={handleCheckOrUnCheckTask}
            />
            {checkedList.length > 0 && (
                <BulkActions handleRemove={handleRemoveListChecked} />
            )}
        </>
    );
}
