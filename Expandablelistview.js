import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, UIManager} from 'react-native';

const rows = [
  {
    id: 0,
    expanded: false,
    text: 'Morning',

    Child: [
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
    ],
  },
  {
    id: 1,
    expanded: false,
    text: 'Mohan',

    Child: [
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
    ],
  },
  {
    id: 2,
    expanded: false,
    text: 'Sohan',

    Child: [
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
      {
        subText: '8:00Am',
      },
    ],
  },
];
export default class Expandablelistview extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
      data: rows,
    };
  }

  render() {
    const updateExpand = index => {
      const array = [...this.state.data];
      array[index]['expanded'] = !array[index]['expanded'];
      this.setState({data: array});
      console.log(index);
    };
    const renderItem = ({item, index}) => {
      let items = [];
      const row = item.Child;
      items = row.map(rowItem => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              margin: 5,
            }}>
            <Text>{rowItem.subText}</Text>
          </View>
        );
      });
      const renderItem1 = ({item, index}) => {
        let items = [];
        const row = item.Child;
        items = row.map(rowItem => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row-reverse',
                margin: 5,
              }}>
              <Text>{rowItem.subText}</Text>
            </View>
          );
        });
      console.log('item --------------------------------------');
      console.log(item);
      return (
        <View style={{flexDirection: 'column'}}>
         
         
          {item.expanded ? items : null}
        </View>
      );
    };
    return (
      <View>
        <FlatList data={this.state.data} renderItem={renderItem} />
        <FlatList data={this.state.data} renderItem={renderItem} />
        <Text style={{fontSize: 20}}>sfdoh</Text>
      </View>
    );
  }
}
