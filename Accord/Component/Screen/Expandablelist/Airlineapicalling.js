import {Text, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import Airlinedisplaycard from './Airlinedisplaycard';

export default class Airlineapicalling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
      airline: [],
    };
  }

  apicalling = () => {
    fetch('https://api.instantwebtools.net/v1/passenger/')
      .then(response => response.json())
      .then(responsejson => {
        // this.setState({
        //   datalist: JSON.stringify(responsejson, null, 2),
        // });
        this.setState({datalist: responsejson.data});
        console.log('resultXXXX' + JSON.stringify(responsejson.data, null, 2));
      })
      .catch(err => {
        console.log('error' + err);
      });
  };
  componentDidMount() {
    this.apicalling();
  }

  render() {
    const renderItemAirline = ({item}) => {
      return (
        <View>
          <Airlinedisplaycard
            item={item}
            onPress={() => {
              alert('item.id : -' + item.airline.name);
            }}
          />
        </View>
      );
    };
    return (
      <View>
        <FlatList data={this.state.datalist} renderItem={renderItemAirline} />
      </View>
    );
  }
}
