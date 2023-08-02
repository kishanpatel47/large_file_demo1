import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {colors} from '../Untils/colors';
import Customschedual from './Customschedual/Customschedual';
import moment from 'moment';
let days = [];
let daysRequired = 5;
let i = 0;
for (i = i; i < daysRequired; i++) {
  days.push(moment().add(i, 'days').format('DD-MMM-yy'));
}

const rows = [
  {
    isExpanded: false,
    url: require('../Image/sunrise.png'),
    Slot: 'Morning',
    timeinterval: '8:00Am to 12:00Pm',
    url1: require('../Image/chevron.png'),
    url2: require('../Image/arrowhead-up.png'),
    subSlot: [
      {
        id: 1,
        Time: '8:00Am',
      },
      {
        id: 2,
        Time: '8:20Am',
      },
      {
        id: 3,
        Time: '8:40Am',
      },
      {
        id: 4,
        Time: '9:00Am',
      },

      {
        id: 5,
        Time: '9:20Am',
      },
      {
        id: 6,
        Time: '9:40Am',
      },
    ],
  },
  {
    isExpanded: false,
    url: require('../Image/afternoon.png'),
    Slot: 'Afternoon',
    timeinterval: '12:00pm to 4:00pm',
    url1: require('../Image/chevron.png'),
    url2: require('../Image/arrowhead-up.png'),
    subSlot: [
      {
        id: 7,
        Time: '12:00pm',
      },
      {
        id: 8,
        Time: '12:20pm',
      },
      {
        id: 9,
        Time: '12:40pm',
      },
      {
        id: 10,
        Time: '1:00pm',
      },
      {
        id: 11,
        Time: '1:20pm',
      },
      {
        id: 12,
        Time: '1:40pm',
      },
    ],
  },
  {
    isExpanded: false,
    url: require('../Image/moon.png'),
    Slot: 'Evening',
    timeinterval: '4:00pm to 8:00pm',
    url1: require('../Image/chevron.png'),
    url2: require('../Image/arrowhead-up.png'),
    subSlot: [
      {
        id: 13,
        Time: '4:00pm',
      },
      {
        id: 14,
        Time: '4:20pm',
      },
      {
        id: 15,
        Time: '4:40pm',
      },
      {
        id: 16,
        Time: '5:00pm',
      },
      {
        id: 17,
        Time: '5:20pm',
      },
      {
        id: 18,
        Time: '5:40pm',
      },
      {
        id: 19,
        Time: '6:00pm',
      },
    ],
  },
];

export default class Visitclinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedVisit: false,
      currentSlectedDay: days[0],
      schedualshot: [
        {
          id: 1,
          shot: '2 slots available',
        },
        {id: 2, shot: '4 slots available'},
        {
          id: 3,
          shot: '6 slots available',
        },
        {
          id: 4,
          shot: '8 slots available',
        },
        {
          id: 5,
          shot: '10 slots available',
        },
        {
          id: 6,
          shot: '2 slots available',
        },
        {
          id: 7,
          shot: '4 slots available',
        },
        {
          id: 8,
          shot: '4 slots available',
        },
        {
          id: 9,
          shot: '2 slots available',
        },
        {id: 10, shot: '4 slots available'},
        {
          id: 11,
          shot: '6 slots available',
        },
        {
          id: 12,
          shot: '8 slots available',
        },
        {
          id: 13,
          shot: '10 slots available',
        },
        {
          id: 14,
          shot: '2 slots available',
        },
        {
          id: 15,
          shot: '4 slots available',
        },
        {
          id: 16,
          shot: '4 slots available',
        },
        {
          id: 17,
          shot: '2 slots available',
        },
        {id: 18, shot: '4 slots available'},
        {
          id: 19,
          shot: '6 slots available',
        },
        {
          id: 20,
          shot: '8 slots available',
        },
        {
          id: 21,
          shot: '10 slots available',
        },
        {
          id: 22,
          shot: '2 slots available',
        },
        {
          id: 23,
          shot: '4 slots available',
        },
        {
          id: 24,
          shot: '4 slots available',
        },
        {
          id: 25,
          shot: '2 slots available',
        },
        {id: 26, shot: '4 slots available'},
        {
          id: 27,
          shot: '6 slots available',
        },
        {
          id: 28,
          shot: '8 slots available',
        },
        {
          id: 29,
          shot: '10 slots available',
        },
        {
          id: 30,
          shot: '2 slots available',
        },
        {
          id: 31,
          shot: '4 slots available',
        },
        {
          id: 8,
          shot: '4 slots available',
        },
      ],
      selectedId: null,

      schedualshotselectedId: null,
      isExpandIndex: 0,
      data: rows,
      currentSlectedTime: '',
    };
  }
  changedate = () => {};
  titleview = () => {
    return (
      <View style={{padding: 10}}>
        <Text
          style={{
            fontFamily: 'Prompt-SemiBoldItalic',
            fontWeight: '700',
            fontSize: 19,
            color: colors.Black,
          }}>
          Schedule Appointment
        </Text>
      </View>
    );
  };

  render() {
    const renderItemShotdate = ({item, index}) => {
      const backgroundColor =
        this.state.schedualshot[index].id === this.state.schedualshotselectedId
          ? colors.Cylindrical_coordinate
          : colors.Cultured;

      const color =
        this.state.schedualshot[index].id === this.state.schedualshotselectedId
          ? colors.white
          : colors.Cylindrical_coordinate;

      return (
        <Customschedual
          //old code  idnex
          item={this.state.schedualshot[index]}
          // item={item}
          days={days[index]}
          onPress={() => {
            this.setState({
              schedualshotselectedId: this.state.schedualshot[index].id,
              currentSlectedDay: days[index],
            });
          }}
          backgroundColor={backgroundColor}
          color={color}
        />
      );
    };

    // const renderItem = ({item}) => {
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         marginVertical: 5,
    //         marginTop: 5,
    //         alignSelf: 'center',
    //       }}>
    //       <Customschedual item={item} days={days} />
    //     </View>
    //   );
    // };

    const renderItemDays = ({item, index, id}) => {
      let items = [];
      const row = item.subSlot;
      items = row.map(rowItem => {
        return (
          <TouchableOpacity
            onPress={() => {
              // alert('data' + rowItem.Time);
              {
                this.state.currentSlectedTime = rowItem.Time;
              }
              this.setState({selectedId: rowItem.id});
            }}>
            <View
              style={{
                alignSelf: 'center',
                width: 40,
                width: Dimensions.get('screen').width / 5,
                margin: 6,
                padding: 5,
                marginTop: 10,
                bottom: 5,
                backgroundColor:
                  rowItem.id == this.state.selectedId
                    ? colors.Cylindrical_coordinate
                    : colors.white,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  // flexShrink: 1,
                  color:
                    rowItem.id === this.state.selectedId
                      ? colors.white
                      : colors.Black,
                  // padding: 10,
                  // height: 30,
                  textAlign: 'center',
                }}>
                {rowItem.Time}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });
      return (
        // <TouchableOpacity
        //   style={{flex: 1, justifyContent: 'center'}}
        //   onPress={() => {
        //     this.setState({
        //       isExpandIndex: this.state.isExpandIndex === index ? items : index,
        //     });
        //   }}>

        <View style={{bottom: 7, padding: 5}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                isExpandIndex:
                  this.state.isExpandIndex === index ? items : index,
              });
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                padding: 7,
                backgroundColor:
                  this.state.isExpandIndex == index
                    ? colors.bluelight
                    : colors.Cultured,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  aspectRatio: 1.4,
                  tintColor:
                    this.state.isExpandIndex == index
                      ? colors.Cylindrical_coordinate
                      : colors.Black,
                }}
                source={item.url}></Image>

              <Text
                style={{
                  marginLeft: 15,

                  fontSize: 12,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  color:
                    this.state.isExpandIndex == index
                      ? colors.white
                      : colors.Black,
                }}>
                {item.Slot}
              </Text>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 10,
                  color:
                    this.state.isExpandIndex == index
                      ? colors.white
                      : colors.Black,
                }}>
                {item.timeinterval}
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    alignSelf: 'flex-end',
                    tintColor:
                      this.state.isExpandIndex == index
                        ? colors.white
                        : colors.Black,
                  }}
                  source={
                    this.state.isExpandIndex === index ? item.url2 : item.url1
                  }></Image>
              </View>
            </View>
          </TouchableOpacity>
          {this.state.isExpandIndex == index ? (
            <View
              style={{
                //he ight: this.state.isExpandIndex - index,
                overflow: 'scroll',
                flexDirection: 'column',
                // alignSelf: 'center',
                backgroundColor:
                  this.state.isExpandIndex == index
                    ? colors.bluelight
                    : colors.Cultured,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: colors.bluelight,
                  // justifyContent: 'center',
                  flexWrap: 'wrap',
                  alignContent: 'stretch',

                  // backgroundColor: colors.bluelight,
                }}>
                {items.isExpandIndex ? null : items}
              </View>
            </View>
          ) : null}
        </View>
      );
    };
    return (
      <View>
        <ScrollView>
          <View>
            {this.titleview()}
            <FlatList
              horizontal={true}
              data={days}
              renderItem={renderItemShotdate}
              keyExtractor={item => item.key}
              // style={{marginHorizontal: 5}}
              // ItemSeparatorComponent={this.renderSeparator}
            />

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Prompt-SemiBoldItalic',
                  fontSize: 15,
                  padding: 15,
                  fontWeight: '700',
                  color: colors.Cylindrical_coordinate,
                }}>
                {this.state.currentSlectedDay}
              </Text>
              <Text
                style={{
                  fontFamily: 'Prompt-SemiBoldItalic',
                  fontSize: 15,
                  padding: 15,
                  fontWeight: '700',
                  color: colors.Cylindrical_coordinate,
                }}>
                Time-shot :
                <Text style={{color: colors.Cylindrical_coordinate}}>
                  {this.state.currentSlectedTime}
                </Text>
              </Text>
            </View>
            <FlatList
              data={this.state.data}
              renderItem={renderItemDays}
              style={{marginHorizontal: 10}}></FlatList>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('PatientDeatlies');
                  // this.props.navigation.navigate('PatientDeaties');
                }}>
                <View
                  style={{
                    marginTop: 40,
                    bottom: 0,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                      bottom: 5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        paddingRight: 2,
                        fontSize: 17,
                        color: colors.Cylindrical_coordinate,
                      }}>
                      Continue
                    </Text>
                    <Image
                      style={{
                        height: 20,
                        width: 20,

                        tintColor: colors.Cylindrical_coordinate,
                      }}
                      source={require('../Image/rightarrows.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
