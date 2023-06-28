import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Contact from 'react-native-contacts';

const App = () => {
  const [contactList, setContactList] = useState([
    {
      id:1,
      name: 'sanket Patil',
      contact: '8530880988',
      email: 'sanketudaypatil@gmail.com',
      bg:"black"
    },
    {name: 'swapnil Patil', 
    id:2,
    contact: '8530881092',
     email: 'swapnil@gmail.com',
     bg:"#636363"},
    {
      name: 'gaurav Patil',
      id:3,
      contact: '9373680220',
      email: 'gaurav@gmail.com',
      bg:"black"
    },
    {
      name: 'Vishal Patil',
      id:4,
      contact: '9823721928',
      email: 'Vishal@gmail.com',
      bg:"#636363"
    },{
      name: 'vedanat Patil',
      id:5,
      contact: '9373684420',
      email: 'Vedant@gmail.com',
      bg:"black"
    },
    {
      name: 'Krupali Patil',
      id:6,
      contact: '9828821928',
      email: 'Krupali@gmail.com',
      bg:"#636363"
    },
  ]);
  const [bg,setBg ] = useState("black")

  
 

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          
          return (

            <TouchableOpacity
              style={{
                width: '90%',
                height: 70,
                alignSelf: 'center',
                borderWidth: 0.5,
                backgroundColor:item.bg,
                borderColor: '#fff',
                borderRadius: 10,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {item.bg ? (<Image
                  source={require('./Images/user.png')}
                  style={{width: 40, height: 40, marginLeft: 15}}
                />):null}
                
                <View style={{padding: 10}}>
                  <Text style={{color: '#fff'}}>{item.name}</Text>
                  <Text style={{color: '#fff', marginTop: 4}}>
                    {item.contact}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 15}}>
                <TouchableOpacity>
                  <Image
                    source={require('./Images/message.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#fff',
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('./Images/call.png')}
                    style={{width: 20, height: 20, tintColor: '#fff'}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#fff',
          position: 'absolute',
          right: 30,
          bottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./Images/call.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
