//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../../AppButton';
import AppCards from '../../AppCards';
import AppInput from '../../AppInput';
import AppText from '../../AppText';
import useToastAlert from '../../useToastAlert';
import uuid from 'react-native-uuid';
import {Controller, useForm} from 'react-hook-form';
import {WhiteColor} from '../../Constants';
import Header from '../../Header';
import Title from '../../Title';

// Add a component
const AddTodo = ({navigation, setTodos, todos}) => {
  const {showToast, renderToast} = useToastAlert();
  const [todo, setTodo] = useState(' ');

  const addTodo = () => {
    if (!todo) return;
    let updatedTodos = [
      ...todos,
      {
        id: uuid.v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo('');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: '',
    mode: 'all',
  });

  const onSubmit = data => {
    let payload = {
      ...data,
    };
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
      <Title style={{marginVertical: 20}} title={'Add Todoist'} />

      <AppCards style={styles.walletButtonContent}>
        <View>
          {[{label: 'add a new task here', key: 'taskBoard'}].map(item => (
            <>
              <Controller
                key={item.key}
                control={control}
                // pattern: defaultRules[item.key],
                rules={{
                  required: {
                    value: true,
                    message: `${item.label} is required`,
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View style={{}}>
                    <AppInput
                      placeholder={item.label}
                      label={item.label}
                      onBlur={onBlur}
                      onChangeText={text_ => onChange(setTodo(text_))}
                      error={errors[item.key]?.message}
                      value={value}
                      keyboardType={'default'}
                      autoCapitalize={'none'}
                      type={'email'}
                    />
                  </View>
                )}
                name={item.key}
              />
            </>
          ))}
        </View>
        <AppButton onClick={addTodo} text="Add" />
      </AppCards>
      {renderToast()}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  walletButtonContent: {
    height: 185,
    width: 'auto',
    backgroundColor: '#E7F2F8',
    padding: 30,
    justifyContent: 'center',
  },
  walletBalance: {
    paddingVertical: 15,
  },
  walletButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30.5,
  },
  text: {
    color: WhiteColor,
    fontSize: 16,
    fontWeight: '900',
  },
  inputcontainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
    color: 'black',
  },
});

//make this component available to the app
export default AddTodo;
