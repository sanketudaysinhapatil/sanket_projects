import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchInput from './SearchInput';

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerms] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    setUsers(json);
    
  };
  //   console.log(term);

let renderuser = users.map(item => {
    return (
      <View key={item.id} style={styles.textCard}>
        <Text style={styles.textIn}>{item.name}</Text>
      </View>
    );
  })

  

  const handleFilter = (e)=>{
    setTerms(e)
    const filteredList = users.filter(item =>
        item.toLowerCase() === e.toLowerCase()
      );
      setUsers(filteredList)
  }
    

  return (
    <View>
      <Text style={styles.title}>Search User</Text>
      <TextInput
        placeholder="Search User..."
        style={styles.inputEl}
        value={term}
        onChange={handleFilter}
      />
      {renderuser}
    </View>
  );
};

export default UserSearch;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    margin: 15,
    textAlign: 'center',
  },
  textIn: {
    fontSize: 19,
    color: 'black',
    marginLeft: 20,
    elevation: 5,
  },
  textCard: {
    borderWidth: 2,
    borderColor: '#fcea94',
    borderRadius: 15,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  inputEl: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    margin: 15,
    fontSize: 19,
    marginTop: 20,
  },
});
