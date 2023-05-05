//import liraries
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import AddTodo from './AddInput/__test__/AddTodo';
import TodoList from './TodoList';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// create a component
const Cards = ({navigation}) => {
  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator>
        <View>
          <AddTodo setTodos={setTodos} todos={todos} />

          <View>
            <TodoList setTodos={setTodos} todos={todos} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

//make this component available to the app
export default Cards;
