import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

// import {ScrollView} from 'react-native';
import Task from './Task';

const Todo = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [para, setPara] = useState()

  const handleAddTask = () => {
    if (task === '') {
      setPara(true)
      return null;

    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
      setPara(false)
    }
  };

  const deletItem = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View>
      <View style={styles.bgContaner}>
        <Text style={styles.mainHeading}>Todos List</Text>
      </View>
      <View>
        <View>
          <Text style={styles.mainText}>Create Tasks</Text>
          <View>
            <View>
              <TextInput
                placeholder="What needs to be done?"
                style={styles.inputEl}
                onChangeText={text => setTask(text)}
                value={task}
              />
            </View>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <Text style={styles.btn}>Add</Text>
            </TouchableOpacity>
            {para && <Text style={styles.error}>*Enter Valid Task</Text>}
          </View>
        </View>
        <View>
          <Text style={styles.mainText}>My Tasks</Text>
          {taskItems.map((item, index) => {
            return <Task key={index} text={item} deletItem={deletItem} />;
          })}
          <TouchableOpacity>
            <Text style={styles.btn}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  bgContaner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  mainHeading: {
    width: '50%',
    fontSize: 22,
    borderWidth: 2,
    color: 'black',
    // borderBlockColor:"black",
    padding: 10,
    borderRadius: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#d12de3',
  },
  mainText: {
    fontSize: 22,
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
  },
  inputEl: {
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#b54c5d',
    borderWidth: 2,
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 19,
    marginLeft: 15,
    paddingLeft: 15,
    padding: 14,
  },
  checkbox: {
    alignSelf: 'center',
  },
  createTskContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    // justifyContent:"space-around"
  },
  btn: {
    fontSize: 17,
    marginTop: 15,
    backgroundColor: '#a64be8',
    padding: 10,
    borderRadius: 15,
    width: '30%',
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    // marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  taskCOntainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    borderWidth: 2,
    borderColor: '#ff0000',
    borderRadius: 15,
    width: '90%',
    marginLeft: 15,
    marginTop: 15,
    padding: 10,
    // elevation:5
  },
  tastText: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
  },
  taskName: {
    width: '60%',
    paddingLeft: 15,
    fontSize: 22,
    color: 'black',
  },
  textCont: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  error:{
    fontSize:17,
    color:"red",
    marginLeft:15
  }
});
