import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  FlatList,

  TouchableOpacity,
} from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Item = ({ item, onPress ,color, tintColor }) => (
  <View>
  <View
    style={{
      borderRadius: 2,
      marginTop: 25,
      // width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      paddingHorizontal: 30,
    }}>
  
    <Text
      style={{flex: 1, height: 25, left: -25, color: 'black', bottom: 7  }}>
      {item.title}
    </Text>
    <TouchableOpacity  onPress={onPress}>
    <Image
      style={{right: -25, bottom: 7,
   

        tintColor 
      
      }}
      source={require('./image/checkbox.png')}></Image>
      </TouchableOpacity>
      
      </View>
</View>






);
const Indrouction = () => {
  const [selectedId, setSelectedId] = useState(null);
  const data = [
    {
    id:1,
      title: 'English',
     
    },
    {
      id:2,
      title: 'Hindi',
    },
    {
      id:3,
      title: 'Germon',
    },
    {
      id:4,
      title: 'French',
    },
    {
      id:5,
      title: 'Russian',
    },
    {
      id:6,
      title: 'Portuguese',
    },
    {
      id:7,
      title: 'Bengali',
    },
    {
      id:8,
      title: 'Japanese',
    },
    {
      id:9,
      title: 'Korean',
    },
    {
      id:10,
      title: 'Vietnamese',
    },
    {
      id:11,
      title: 'Telugu',
    },
    {
      id:12,
      title: 'Marathi',
    },
  ];


  const renderItem = ({item}) => {
    const tintColor = item.id === selectedId ? 'red' : 'grey';
    return(
      <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
    tintColor={tintColor}
       />
    )
   
  };




  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fdfdfd',
          flex: 1,
        }}>
        <Image
          style={{alignItems: 'center'}}
          source={require('./image/lanuage.png')}></Image>

        <Text style={{fontSize: 20, color: 'black'}}>Select Lanuages</Text>
        <Text style={{marginTop: 5}}>
          please select the Lanuages You can Speak{' '}
        </Text>

        <FlatList
   
          data={data}
          renderItem={renderItem  }
          // keyExtractor={item => item.title}
          extraData={selectedId}
          style={{width:'100%' , marginTop: 27,paddingHorizontal:10,bottom:26,height:'30%'}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#FF003E',
            marginBottom: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
            bottom: 10,
            borderRadius: 25,
          }}>
          <View
            style={{
              alignContent: 'center',
              alignSelf: 'center',
              width: width / 1.2,
              height: 46,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Next </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Indrouction;
