import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import ListTaskComponent from './component';
import BulkActions from './BulkActions';

import TodoListServices from '../../../Services/TodoList';
import { useEventListener } from '../../../Utilities/useHooks';
import { EVENTS } from '../../../Utilities/Constants';

export default function ListTaskContainer() {
    const [list, setList] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    let listIdChecked = useRef([]);

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

    useEffect(() => {
        fetchListTask();
    }, [searchString]);
    useEventListener(EVENTS.REFRESH_TODO_LIST, fetchListTask);

    const handleChangeSearch = (event) => {
        setSearchString(event.target.value);
    };

    const handleRemoveListChecked = async () => {
        try {
            const response = await TodoListServices.deleteTaskWithId(
                listIdChecked.current
            );
            if (response.status === 200) {
                listIdChecked.current = [];
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <ListTaskComponent
                list={list}
                searchString={searchString}
                isLoading={isLoading}
                handleChangeSearch={handleChangeSearch}
                listIdChecked={listIdChecked.current}
            />
            <BulkActions handleRemove={handleRemoveListChecked} />
        </>
    );
}
