import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Doctorlistcard from './Doctorlist/Doctorlistcard';

class Dashbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: [
        {
          id: 1,
          doctorname: 'Dr Prashant Patel',
          speciality: 'Pediatrics',
          experience: '10 year Experience',
          rating: '4.5',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 2,
          doctorname: 'Dr Arohi Patel',
          speciality: 'Pediatrics',
          experience: '7 year Experience',
          rating: '4.2',
          image: require('../Image/arohi.png'),
        },
        {
          id: 3,
          doctorname: 'Dr Manan Patel',
          speciality: 'Pediatrics',
          experience: '8 year Experience',
          rating: '4.8',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 4,
          doctorname: 'B.D Prashant Patel',
          speciality: 'Pediatrics',
          experience: '10 year Experience',
          rating: '4.5',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 5,
          doctorname: 'M.D Prashant Patel',
          speciality: 'Pediatrics',
          experience: '10 year Experience',
          rating: '4.5',
          image: require('../Image/prasahant.png'),
        },

        {
          id: 6,
          doctorname: 'Dr Arohi Patel',
          speciality: 'Pediatrics',
          experience: '7 year Experience',
          rating: '4.2',
          image: require('../Image/arohi.png'),
        },
        {
          id: 7,
          doctorname: 'Dr Prashant Patel',
          speciality: 'Pediatrics',
          experience: '8 year Experience',
          rating: '4.8',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 8,
          doctorname: 'Dr Prashant Patel',
          speciality: 'Pediatrics',
          experience: '10 year Experience',
          rating: '4.5',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 9,
          doctorname: 'Dr Prashant Patel',
          speciality: 'Pediatrics',
          experience: '10 year Experience',
          rating: '4.5',
          image: require('../Image/prasahant.png'),
        },
        {
          id: 10,
          doctorname: 'Dr Arohi Patel',
          speciality: 'Pediatrics',
          experience: '7 year Experience',
          rating: '4.2',
          image: require('../Image/arohi.png'),
        },
        {
          id: 10,
          doctorname: 'Dr Arohi Patel',
          speciality: 'Pediatrics',
          experience: '7 year Experience',
          rating: '4.2',
          image: require('../Image/arohi.png'),
        },
      ],
    };
  }

  // viewHeader = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 40,
  //         alignItems: 'center',
  //         // marginHorizontal: 10,
  //         // display: 'flex',
  //         flexDirection: 'row',
  //       }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //         }}>
  //         <Image
  //           style={{aspectRatio: 1, marginLeft: 5}}
  //           source={require('../Image/left-arrow.png')}></Image>
  //       </View>
  //       <View style={{flex: 1, justifyContent: 'center'}}>
  //         <Text
  //           style={{
  //             alignItems: 'center',
  //             fontSize: 20,
  //             marginRight: 10,
  //             alignSelf: 'center',
  //             color: colors.Black,
  //             justifyContent: 'center',
  //           }}>
  //           Expert Consultation
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // };

  headerImage = () => {
    return (
      <Image
        style={{
          width: '100%',
          height: '20%',

          alignSelf: 'center',
        }}
        source={require('../Image/silder.png')}
      />
    );
  };

  viewtitle = () => {
    return (
      <Text
        style={{
          color: 'black',
          marginTop: '5%',

          marginHorizontal: 20,
        }}>
        10 Doctors online Consultation
      </Text>
    );
  };

  render() {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Doctorlistcard
            item={item}
            onPress={() => {
              this.props.navigation.navigate('Doctordeaties');
            }}
          />
        </View>
      );
    };

    return (
      <ImageBackground
        style={{
          // height: '100%',
          flex: 1,
        }}
        source={require('../Image/background.png')}>
        {this.headerImage()}

        {this.viewtitle()}

        <FlatList
          style={{marginTop: 20}}
          numColumns={2}
          data={this.state.doctor}
          renderItem={renderItem}></FlatList>
      </ImageBackground>
    );
  }
}
export default Dashbord;
