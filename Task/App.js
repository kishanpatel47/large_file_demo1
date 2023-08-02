import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Color from './screen/Until/Color';

var width = Dimensions.get('window').width;

const Item = ({ item, onPress, color, tintColor }) => (
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
        alignItems: 'flex-start',
        paddingHorizontal: 30,
      }}>
      <Text style={{ flex: 1, height: 25, left: -25, color: 'black', bottom: 7 }}>
        {item.id + ' :- ' + item.name}
      </Text>

      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            right: -25,
            bottom: 7,

            tintColor,
          }}
          source={require('./image/checkbox.png')}></Image>
      </TouchableOpacity>
    </View>
  </View>
);

const ItemCategory = ({ item, onPress, color, tintColor }) => (
  <View>
    <View
      style={{
        borderRadius: 2,
        marginTop: 25,
        // width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
      }}>
      <Text style={{ flex: 1, height: 25, left: -25, color: 'white', bottom: 7 }}>
        {item}
      </Text>

      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            right: -25,
            bottom: 7,

            tintColor,
          }}
          source={require('./image/checkbox.png')}></Image>
      </TouchableOpacity>
    </View>
  </View>
);
class Selectlanuage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchitem: '',
      modalVisible: false,
      arrpeople: [
        {
          id: 1,
          name: 'Kishan',
          city: 'Vadodara',
          otherInfo: {
            gender: 'Male',
            mobile: '1234567890',
          },
        },
        {
          id: 2,
          name: 'Shivam',
          city: 'Vadodara',
          otherInfo: {
            gender: 'Male',
            mobile: '0012345678',
          },
        },
        {
          id: 3,
          name: 'Krishna',
          city: 'Ahmedabad',
          otherInfo: {
            gender: 'Female',
            mobile: '00712345678',
          },
        },
        {
          id: 4,
          name: 'Pooja Mam',
          city: 'Shimla',
          otherInfo: {
            gender: 'Female',
            mobile: 'xx345678xx',
          },
        },
        {
          id: 5,
          name: 'Chota Bheem',
          city: 'Dholakpur',
          otherInfo: {
            gender: 'Cartoon',
            mobile: '0000000000',
          },
        },
        {
          id: 6,
          name: 'Tom',
          city: 'Cartoon Network',
          otherInfo: {
            gender: 'Cartoon',
            mobile: '0000000000',
          },
        },
        {
          id: 7,
          name: 'Jerry',
          city: 'Cartoon Network',
          otherInfo: {
            gender: 'Cartoon',
            mobile: '9999999999',
          },
        },
        {
          id: 8,
          name: 'Mouse',
          city: 'Home',
          otherInfo: {
            gender: 'Animal',
            mobile: '',
          },
        },
        {
          id: 9,
          name: 'Cat',
          city: 'Home',
          otherInfo: {
            gender: 'Bird',
            mobile: '',
          },
        },
        {
          id: 10,
          name: 'Mohan',
          city: 'Home',
          otherInfo: {
            gender: 'Male',
            mobile: '123456789',
          },
        },
        {
          id: 11,
          name: 'Vivek sir',
          city: 'Home',
          otherInfo: {
            gender: 'Male',
            mobile: '00000000000000000000',
          },
        },
      ],
      search: {},
      otherInfo: {},
      selectedId: null,
      arrCategoryId: null,
      arrpeopleFilter: [],
      searchpeopleFilter: [],
      arrpeopleSearchFilter: [],
      arrCategory: [],
      modalVisible: false,
    };
  }
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  deleteItem = id => {
    this.state.deletedata = '';
    let filterdata = this.state.deletedata.filter((val, i) => {
      if (val.id == id) {
        console.log(val);
      }
    });
    console.log('filter deleted data ' + filterdata);
  };
  datafilter = genderString => {
    this.setState(
      {
        arrpeopleFilter: this.state.arrpeople
          .filter(function (item) {
            return item.otherInfo.gender == genderString;
          })
          .map(function (gender) {
            console.log('Gender' + gender);
            return gender;
          }),
      },
      () => {
        this.setModalVisible(false);
      },
    );
    console.log('data' + JSON.stringify(this.state.arrpeopleFilter));
  };
  searchfilter = peopleString => {
    // this.setState({
    //   arrpeopleFilter: this.state.arrpeople.filter(function (item) {
    //     return item.name.toLowerCase().includes(peopleString.toLowerCase());
    //   }),
    // });
    this.setState({
      arrpeopleFilter: this.state.arrpeople.filter(function (item) {
        return item.name.toLowerCase().includes(peopleString.toLowerCase());
      }),
    });
  };

  // renderItemCategory = ({item}) => {
  //   return (

  //     // <TouchableOpacity
  //     //   onPress={() => {
  //     //     this.datafilter(item.title);
  //     //   }}>
  //     //   <Text>{item.title}</Text>
  //     // </TouchableOpacity>
  //   );
  // };

  render() {
    const renderItem = ({ item }) => {
      const tintColor = item.id === this.state.selectedId ? 'red' : 'grey';

      return (
        <Item
          item={item}
          onPress={() => {
            this.setState({ selectedId: item.id });
            // console.log(
            //   'Data' + item.otherInfo.gender == 'Male'
            //     ? item.name
            //     : this.state.arrpeople,
            // )
            // console.log(
            //   'data',
            //   filter(this.state.arrpeople, {gender: 'Male'}),
            // )
            this.setState({ selectedId: item.id });
            // alert(
            //   item.id +
            //     ':-' +
            //     item.name +
            //     '\n' +
            //     '  ' +
            //     item.otherInfo.gender +
            //     '\n' +
            //     (item.otherInfo.mobile ? item.otherInfo.mobile : ' NA'),
            // ),
            //   console.log(
            //     'Mbbile number',
            //     item.otherInfo.mobile ? item.otherInfo.mobile : ' NA',
            //   );
          }}
          tintColor={tintColor}
        />
      );
    };
    const renderItemCategory = ({ item }) => {
      const tintColor = item.id === this.state.arrCategoryId ? 'red' : 'grey';

      return (
        <ItemCategory
          item={item}
          onPress={() => {
            console.log('Data = ' + item);
            this.datafilter(item);
            // this.datafilter(item.otherInfo.gender);
            // console.log(
            //   'Data' + item.otherInfo.gender == 'Male'
            //     ? item.name
            //     : this.state.arrpeople,
            // )
            // console.log(
            //   'data',
            //   filter(this.state.arrpeople, {gender: 'Male'}),
            // )
            // this.setState({arrCategoryId: item.id});
            // alert(
            //   item.id +
            //     ':-' +
            //     item.name +
            //     '\n' +
            //     '  ' +
            //     item.otherInfo.gender +
            //     '\n' +
            //     (item.otherInfo.mobile ? item.otherInfo.mobile : ' NA'),
            // ),
            // console.log(
            //   'Mbbile number',
            //   item.otherInfo.mobile ? item.otherInfo.mobile : ' NA',
            // );
          }}
          tintColor={tintColor}
        />
      );
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Modal
            animationType="slide"
            //datafilter={this.datafilter}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(this.state.modalVisible);
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                height: '100%',
                width: '100%',
                marginHorizontal: 30,
                maxHeight: '50%',
                top: 120,
                maxWidth: '95%',

                backgroundColor: 'rgba(52, 52, 52, 0.8)',
              }}>
              <FlatList
                data={
                  this.state.arrCategory
                  //   this.state.arrpeople.filter((item, i, arrFind) => {
                  //   // console.log(
                  //   //   'item = ' +
                  //   //     JSON.stringify(item, undefined, 2) +
                  //   //     'i = ' +
                  //   //     i +
                  //   //     'arrFind = ' +
                  //   //     JSON.stringify(arrFind, undefined, 2),
                  //   // );
                  //   arrFind.indexOf(item) === item;
                  // })
                }
                renderItem={renderItemCategory}
                extraData={this.state.selectedId}
                // keyExtractor={item => item.title}
                style={{
                  padding: 10,
                  width: '100%',
                  marginTop: 27,
                  paddingHorizontal: 10,
                  bottom: 26,
                  height: '30%',
                }}
              />

              <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FF003E',
                    marginBottom: 1,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    bottom: 10,
                    borderRadius: 25,
                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <View
                    style={{
                      alignContent: 'center',
                      alignSelf: 'center',
                      width: width / 3.0,
                      height: 36,
                      top: 1.0,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      {' '}
                      Close{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FF003E',
                    marginBottom: 1,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    bottom: 10,
                    borderRadius: 25,
                  }}
                  onPress={item => { }}>
                  <View
                    style={{
                      alignContent: 'center',
                      alignSelf: 'center',
                      width: width / 3.0,
                      height: 36,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      {' '}
                      filter data{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={{ flexDirection: 'row', top: 3.1, right: 4 }}>
            <View
              style={{
                width: 300,
                borderBottomWidth: 1,
                borderRadius: 20,
                marginHorizontal: 12.23,
                left: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,0,62,23)',
              }}>
              <TextInput
                style={{
                  color: 'white',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                placeholder="Search here"
                placeholderTextColor="white"
                onChangeText={text => this.searchfilter(text)}></TextInput>
            </View>

            <TouchableOpacity
              onPress={() => {
                var arrGender = [
                  ...new Set(
                    this.state.arrpeople.map(item => item.otherInfo.gender),
                  ),
                ];
                console.log('Gender = ' + JSON.stringify(arrGender));
                this.setState({
                  arrCategory: arrGender,
                });
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Image
                source={require('./image/filter.png')}
                style={{
                  alignSelf: 'flex-end',
                  height: 25,
                  width: 25,
                  right: 5,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  arrpeopleFilter: [],
                });
              }}>
              <Image
                source={require('./image/clear-filter.png')}
                style={{
                  alignSelf: 'flex-end',
                  height: 28,
                  width: 28,
                  bottom: 1,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fdfdfd',
              flex: 1,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Image
                style={{ alignItems: 'center' }}
                source={require('./image/lanuage.png')}></Image>
            </View>
            <Text style={{ fontSize: 20, color: 'black' }}>Select Lanuages</Text>
            <Text style={{ marginTop: 5 }}>
              please select the Lanuages You can Speak{' '}
            </Text>
            <FlatList
              data={
                this.state.arrpeopleFilter.length > 0
                  ? this.state.arrpeopleFilter
                  : this.state.arrpeople
              }
              renderItem={renderItem}
              // keyExtractor={item => item.title}
              extraData={this.state.selectedId}
              style={{
                width: '100%',
                marginTop: 27,
                paddingHorizontal: 10,
                bottom: 26,
                height: '30%',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              // backgroundColor: Color.red,

              // '#FF003E'
              marginBottom: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              bottom: 10,
              borderRadius: 25,
            }}
            onPress={() => {
              this.state.arrpeople = this.state.arrpeople
                .filter(function (item) {
                  console.log(
                    '-----------------------------------------------------',
                  );
                  // console.log(
                  //   'Female',
                  //   item.otherInfo.gender !== 'Female' ? item.name : '--',
                  // );
                  return item.otherInfo.gender == 'Cartoon';
                })
                .map(function (gender) {
                  return gender;
                });
              console.log(JSON.stringify(this.state.arrpeople, undefined, 2));
            }}>
            <View
              style={{
                alignContent: 'center',
                alignSelf: 'center',
                width: width / 1.2,
                height: 46,
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'white', textAlign: 'center' }}> Next </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Selectlanuage;

//backup file

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   Dimensions,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// var height = Dimensions.get('window').height;
// var width = Dimensions.get('window').width;
// const Item = ({item, onPress, color, tintColor}) => (
//   <View>
//     <View
//       style={{
//         borderRadius: 2,
//         marginTop: 25,
//         // width: '100%',
//         borderBottomWidth: 1,
//         borderBottomColor: 'black',
//         flexDirection: 'row',
//         display: 'flex',
//         alignItems: 'center',
//         paddingHorizontal: 30,
//       }}>
//       <Text style={{flex: 1, height: 25, left: -25, color: 'black', bottom: 7}}>
//         {item.title}
//       </Text>
//       <TouchableOpacity onPress={onPress}>
//         <Image
//           style={{
//             right: -25,
//             bottom: 7,
//             tintColor,
//           }}
//           source={require('./image/checkbox.png')}></Image>
//       </TouchableOpacity>
//     </View>
//   </View>
// );
// class Indrouction extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           title: 'English',
//           name: {
//             surname: 'Surnamge in english',
//             city: 'US',
//           },
//         },
//         {
//           id: 2,
//           title: 'Hindi',
//           name: {
//             surname: 'Patel',
//             city: 'Vadodara',
//           },
//         },
//         {
//           id: 3,
//           title: 'Germon',
//         },
//         {
//           id: 4,
//           title: 'French',
//         },
//         {
//           id: 5,
//           title: 'Russian',
//         },
//         {
//           id: 6,
//           title: 'Portuguese',
//         },
//         {
//           id: 7,
//           title: 'Bengali',
//         },
//         {
//           id: 8,
//           title: 'Japanese',
//         },
//         {
//           id: 9,
//           title: 'Korean',
//         },
//         {
//           id: 10,
//           title: 'Vietnamese',
//         },
//         {
//           id: 11,
//           title: 'Telugu',
//         },
//         {
//           id: 12,
//           title: 'Marathi',
//         },
//       ],
//       selectedId: [],
//       selId: [],
//       arrPeople: [
//         {
//           id: 1,
//           name: 'Kishan',
//           city: 'Vadodara',
//           otherInfo: {
//             gender: 'Male',
//             mobile: '1234567890',
//           },
//         },
//         {
//           id: 2,
//           name: 'Shivam',
//           city: 'Vadodara',
//           otherInfo: {
//             gender: 'Male',
//             mobile: '0012345678',
//           },
//         },
//         {
//           id: 3,
//           name: 'Krishna',
//           city: 'Ahmedabad',
//           otherInfo: {
//             gender: 'Female',
//             mobile: '00712345678',
//           },
//         },
//         {
//           id: 4,
//           name: 'Pooja Mam',
//           city: 'Shimla',
//           otherInfo: {
//             gender: 'Female',
//             mobile: 'xx345678xx',
//           },
//         },
//         {
//           id: 5,
//           name: 'Chota Bheem',
//           city: 'Dholakpur',
//           otherInfo: {
//             gender: 'Cartoon',
//             mobile: '0000000000',
//           },
//         },
//         {
//           id: 6,
//           name: 'Tom',
//           city: 'Cartoon Network',
//           otherInfo: {
//             gender: 'Cartoon',
//             mobile: '0000000000',
//           },
//         },
//         {
//           id: 7,
//           name: 'Jerry',
//           city: 'Cartoon Network',
//           otherInfo: {
//             gender: 'Cartoon',
//             mobile: '9999999999',
//           },
//         },
//         {
//           id: 8,
//           name: 'Mouse',
//           city: 'Home',
//           otherInfo: {
//             gender: 'Animal',
//             mobile: '',
//           },
//         },
//         {
//           id: 9,
//           name: 'Cat',
//           city: 'Home',
//           otherInfo: {
//             gender: 'Animal',
//             mobile: '',
//           },
//         },
//       ],
//     };
//   }

//   onPress = ({id}) => {
//     this.setState({selectedId: id});
//   };

//   checkedid = item => {
//     const city = [
//       'Rajkot',
//       'Vadodara',
//       'Surat',
//       'Navsari',
//       'Gondal',
//       'Jamnagar',
//       'Dakor',
//     ];

//     // Output = CityName = <cityname>, CityIndex = <position/index> i.e CityName = Rajkot, CityIndex = 0
//     console.log('item = ' + JSON.stringify(item));

//     /// it returns the index of number which satisfy the condition true
//     const index = this.state.selId.findIndex(element => element == item.id); //1

//     console.log('Id Found = ' + (index == -1 ? 'false' : 'true'));
//     this.setState({
//       selId: [item.id, ...this.state.selId],
//     });
//     /// now we can check what element at that irndex...
//     // console.log('CityName = ' + city[index] + ', ' + 'CityIndex = ' + index);

//     return;
//     console.log('checkedid = ' + JSON.stringify(item));
//     // 1  implentions

//     const newdata = this.state.data.map(e => {
//       var value = this.state.data.findIndex(
//         selectedId => selectedId == item.id,
//       );

//       console.log('e = ' + JSON.stringify(e));
//       console.log('new data' + this.state.data[value]);
//       // if (this.state.selectedId.id != item.id) {
//       //   this.state.data.push(this.state.selectedId.id);
//       //   console.log('newdata = >' + item.id);

//       //   // selectedId: true,
//       // } else {
//       //   console.log(' elsepart = >');
//       // }
//       // return {
//       //   ...e,
//       //   tintColor: item.id === this.state.selectedId ? 'black' : 'grey',
//       // };
//     });

//     // this.state.data.map(datavalue => {
//     //   if (datavalue.id === item.id) {
//     //     return {
//     //       ...newdata,
//     //       tintColor: item.id === this.state.selectedId ? 'black' : 'grey',
//     //     };
//     //   }
//     //   return {
//     //     ...newdata,
//     //     tintColor: item.id === this.state.selectedId ? 'blue' : 'grey',
//     //   };
//     // });
//   };
//   render() {
//     const renderItem = ({item}) => {
//       var tintColor;
//       const index = this.state.selId.findIndex(element => element == item.id); //1
//       console.log('Id Found = ' + (index == -1 ? 'false' : 'true'));
//       tintColor = index == -1 ? 'grey' : 'red';

//       return (
//         <Item
//           item={item}
//           onPress={() => {
//             // console.log(item.id);
//             this.checkedid(item);
//             this.setState({selectedId: item.id});
//           }}
//           tintColor={tintColor}
//         />
//       );
//     };

//     return (
//       <View style={{justifyContent: 'center', flex: 1}}>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: '#fdfdfd',
//             flex: 1,
//           }}>
//           <Image
//             style={{alignItems: 'center'}}
//             source={require('./image/lanuage.png')}></Image>

//           <Text style={{fontSize: 20, color: 'black'}}>Select Lanuages</Text>
//           <Text style={{marginTop: 5}}>
//             please select the Lanuages You can Speak{' '}
//           </Text>
//           <FlatList
//             data={this.state.data}
//             renderItem={renderItem}
//             // keyExtractor={item => item.title}
//             // extraData={this.state.selectedId}
//             // checkedid={this.state.checkedid}
//             style={{
//               width: '100%',
//               marginTop: 27,
//               paddingHorizontal: 10,
//               bottom: 26,
//               height: '30%',
//             }}
//           />
//           <TouchableOpacity
//             style={{
//               backgroundColor: '#FF003E',
//               marginBottom: 1,
//               marginHorizontal: 10,
//               justifyContent: 'center',
//               bottom: 10,
//               borderRadius: 25,
//             }}>
//             <View
//               style={{
//                 alignContent: 'center',
//                 alignSelf: 'center',
//                 width: width / 1.2,
//                 height: 46,
//                 justifyContent: 'center',
//               }}>
//               <Text style={{color: 'white', textAlign: 'center'}}>Next </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default Indrouction;

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   Dimensions,
//   FlatList,

//   TouchableOpacity,
// } from 'react-native';
// var height = Dimensions.get('window').height;
// var width = Dimensions.get('window').width;

// const Item = ({ item, onPress ,color, tintColor }) => (
//   <View>
//   <View
//     style={{
//       borderRadius: 2,
//       marginTop: 25,
//       // width: '100%',
//       borderBottomWidth: 1,
//       borderBottomColor: 'black',
//       flexDirection: 'row',
//       display: 'flex',
//       alignItems: 'center',
//       paddingHorizontal: 30,
//     }}>

//     <Text
//       style={{flex: 1, height: 25, left: -25, color: 'black', bottom: 7  }}>
//       {item.title}
//     </Text>
//     <TouchableOpacity  onPress={onPress}>
//     <Image
//       style={{right: -25, bottom: 7,

//         tintColor

//       }}
//       source={require('./image/checkbox.png')}></Image>
//       </TouchableOpacity>

//       </View>
// </View>

// );
// const Indrouction = () => {
//   const [selectedId, setSelectedId] = useState(null);
//   const data = [
//     {
//     id:1,
//       title: 'English',

//     },
//     {
//       id:2,
//       title: 'Hindi',
//     },
//     {
//       id:3,
//       title: 'Germon',
//     },
//     {
//       id:4,
//       title: 'French',
//     },
//     {
//       id:5,
//       title: 'Russian',
//     },
//     {
//       id:6,
//       title: 'Portuguese',
//     },
//     {
//       id:7,
//       title: 'Bengali',
//     },
//     {
//       id:8,
//       title: 'Japanese',
//     },
//     {
//       id:9,
//       title: 'Korean',
//     },
//     {
//       id:10,
//       title: 'Vietnamese',
//     },
//     {
//       id:11,
//       title: 'Telugu',
//     },
//     {
//       id:12,
//       title: 'Marathi',
//     },
//   ];

//   const renderItem = ({item}) => {
//     const tintColor = item.id === selectedId ? 'red' : 'grey';
//     return(
//       <Item
//       item={item}
//       onPress={() => setSelectedId(item.id)}
//     tintColor={tintColor}
//        />
//     )

//   };

//   return (
//     <View style={{justifyContent: 'center', flex: 1}}>
//       <View
//         style={{
//           flexDirection: 'column',
//           alignItems: 'center',
//           backgroundColor: '#fdfdfd',
//           flex: 1,
//         }}>
//         <Image
//           style={{alignItems: 'center'}}
//           source={require('./image/lanuage.png')}></Image>

//         <Text style={{fontSize: 20, color: 'black'}}>Select Lanuages</Text>
//         <Text style={{marginTop: 5}}>
//           please select the Lanuages You can Speak{' '}
//         </Text>

//         <FlatList

//           data={data}
//           renderItem={renderItem  }
//           // keyExtractor={item => item.title}
//           extraData={selectedId}
//           style={{width:'100%' , marginTop: 27,paddingHorizontal:10,bottom:26,height:'30%'}}
//         />
//         <TouchableOpacity
//           style={{
//             backgroundColor: '#FF003E',
//             marginBottom: 1,
//             marginHorizontal: 10,
//             justifyContent: 'center',
//             bottom: 10,
//             borderRadius: 25,
//           }}>
//           <View
//             style={{
//               alignContent: 'center',
//               alignSelf: 'center',
//               width: width / 1.2,
//               height: 46,
//               justifyContent: 'center',
//             }}>
//             <Text style={{color: 'white', textAlign: 'center'}}>Next </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default Indrouction;
