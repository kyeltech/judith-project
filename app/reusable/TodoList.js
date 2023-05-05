//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import AppText from './AppText';
import TodoFooter from './TodoFooter';

// create a component
const TodoList = ({todos, setTodos}) => {
  const updateTask = id => {
    let updatedTasks = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach(todo => {
      if (!todo.completed) {
        count++;
      }
    });
    return count;
  };

  return (
    <View style={styles.container}>
      {todos.map((todo, index) => (
        <TouchableRipple
          style={`todo-item ${todo.completed && 'todo-item-active'}`}
          onPress={() => updateTask(todo.id)}>
          <AppText> {todo.task} </AppText>
        </TouchableRipple>
      ))}

      <View>
        <TodoFooter numberOfIncompletedTasks={calcNumberOfIncompletedTasks()} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default TodoList;
