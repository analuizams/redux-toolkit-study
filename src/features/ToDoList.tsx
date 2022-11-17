import React, { useState } from 'react';
import type { RootState } from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './toDoListSlice';
import { Input, Button } from 'antd';

const ToDoList = () => {
  const { tasks } = useSelector((state: RootState) => state.toDoList)
  const [taskValue, setTaskValue] = useState('');
  const dispatch = useDispatch()

  console.log(tasks)

  const handleEnter = (value: string) => {
    dispatch(add(value));
    setTaskValue('');
  };

  return (
    <div style={{ padding: '30px', margin: '20px', border: '1px solid gray', borderRadius: '8px', height: '500px'}}>
      <Input
        type="text"
        value={taskValue}
        onChange={({target}) => setTaskValue(target.value)}
        onPressEnter={({target}) => handleEnter(target.value)}
        style={{ marginBottom: '20px'}}
      />
      <div>
      { tasks.length > 0 && tasks.map((task) => (
        <div style={{ display: 'flex', marginBottom: '10px'}}>
          <li>{task}</li>
          <Button
            style={{ marginLeft: '10px'}}
            type="primary"
            shape="circle"
            onClick={() => dispatch(remove(task))}>
            X
          </Button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ToDoList;
