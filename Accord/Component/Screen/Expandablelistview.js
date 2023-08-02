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
let daysRequired = 20;
let i = 0;
for (i = i; i < daysRequired; i++) {
  days.push(moment().add(i, 'days').format('DD-MMMM-YYYY'));
}

const rows = [
  {
    isExpanded: false,
    url: require('../Image/sunrise.png'),
    Slot: 'Morning',
    timeinterval: '8:00Am to 12:00Pm',
    url1: require('../Image/chevron.png'),

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
      selectedId: undefined,
      isExpandIndex: 0,
      data: rows,
    };
  }
  titleview = () => {
    return (
      <View style={{padding: 15}}>
        <Text
          style={{
            fontFamily: 'Prompt-SemiBoldItalic',
            fontWeight: '700',
            fontSize: 19,
            color: colors.Black,
          }}
          onPress={() => {
            alert(
              'visitclinic' + JSON.stringify(this.state.schedualshot, null, 3),
            );
          }}>
          Schedual
        </Text>
      </View>
    );
  };

  render() {
    const renderItemShotdate = ({item, index}) => {
      const backgroundColor = days[index] === item[index] ? 'red' : 'blue';
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginVertical: 5,
            marginTop: 5,
            backgroundColor: item.id ? 'red' : ' blue',
            alignSelf: 'center',
          }}>
          <Customschedual
            item={this.state.schedualshot[index]}
            days={days[index]}
            onPress={() => {
              alert('data' + item.id);
            }}
            backgroundColor={backgroundColor}
          />
        </View>
      );
    };

    const renderItem = ({item, index}) => {
      const backgroundColor =
        item.id === this.state.selectedId ? 'red' : 'blue';
      const shotcolor = item.id === this.state.selectedId ? 'white' : 'white';
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginVertical: 5,
            marginTop: 5,
            alignSelf: 'center',
          }}>
          <Customschedual
            item={item}
            days={days[index]}
            backgroundColor={backgroundColor}
            onPress={() => {
              alert(item.id);
              this.setState({selectedId: item.id});
            }}
            color={shotcolor}
          />
        </View>
      );
    };

    const renderItemDays = ({item, index, id}) => {
      let items = [];
      const row = item.subSlot;
      items = row.map(rowItem => {
        return (
          <TouchableOpacity
            onPress={() => {
              // alert('data' + rowItem.id);
              this.setState({selectedId: rowItem.id});
            }}>
            <View
              style={{
                alignSelf: 'center',
                height: 30,
                width: Dimensions.get('screen').width / 5,
                margin: 7,
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
                  fontSize: 15,
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
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => {
            this.setState({
              isExpandIndex: this.state.isExpandIndex === index ? items : index,
            });
          }}>
          <View style={{marginTop: 20}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                padding: 10,
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
                  source={item.url1}></Image>
              </View>
            </View>

            {this.state.isExpandIndex == index ? (
              <View
                style={{
                  //he ight: this.state.isExpandIndex - index,
                  overflow: 'scroll',
                  flexDirection: 'column',
                  backgroundColor:
                    this.state.isExpandIndex == index
                      ? colors.bluelight
                      : colors.Cultured,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    // alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    padding: 10,
                    margin: 10,

                    backgroundColor: colors.bluelight,
                  }}>
                  {items}
                </View>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <ScrollView>
          <View>
            {this.titleview()}
            <FlatList
              horizontal={true}
              data={this.state.schedualshot}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              contentContainerStyle={{margin: 5, textAlign: 'center'}}
              // ItemSeparatorComponent={this.renderSeparator}
            />

            <View style={{padding: 15, marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Prompt-SemiBoldItalic',
                  fontSize: 19,
                  fontWeight: '700',
                  color: colors.Cylindrical_coordinate,
                }}>
                {days[0]}
              </Text>
            </View>
            <FlatList
              data={this.state.data}
              renderItem={renderItemDays}
              style={{marginHorizontal: 10}}></FlatList>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => {
                  // this.props.navigation.navigate('PatientDeaties');
                }}>
                <View
                  style={{
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: 40,
                    bottom: 0,
                    paddingBottom: 80,
                    alignSelf: 'center',

                    display: 'flex',
                  }}>
                  <Text
                    style={{
                      letterSpacing: 1,
                      fontFamily: 'Prompt-SemiBoldItalic',
                      fontWeight: '800',
                      paddingRight: 2,
                      fontFamily: 'PromptMedium',
                      color: colors.Cylindrical_coordinate,
                    }}>
                    Continue
                  </Text>
                  <Image
                    style={{
                      height: 40,
                      width: 19,
                      top: 1.0,

                      tintColor: colors.Cylindrical_coordinate,
                      alignItems: 'flex-end',
                      alignSelf: 'flex-end',
                      resizeMode: 'center',
                    }}
                    source={
                      this.state.dropicon
                        ? require('../Image/arrow-down-sign-to-navigate.png')
                        : require('../Image/rightarrow.png')
                    }></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
