import {Text, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import Fetchapicard from './Fetchapi/Fetchapicard';
import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

export default class fetchapicalling extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      datalist: [],
      reposnselist: [],
      currentitem: null,
      country: '',
    };
  }

  callApiAirlineDataFetch = () => {
    // fetch('https://jsonplaceholder.typicode.com/photos', {
    // //   method: 'POST',
    // //   headers: {
    // //     Accept: 'application/json',
    // //     'Content-Type': 'application/json',
    // //   },
    // //   body: JSON.stringify(),
    // // })
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({datalist: json});
    //     alert('JSON data :-' + JSON.stringify(json, null, 2));
    //   });

    fetch('https://api.instantwebtools.net/v1/airlines')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({datalist: responseJson});
        console.log('data' + JSON.stringify(responseJson, null, 2));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.callApiAirlineDataFetch();
  }

  render() {
    const renderItem = ({item}) => {
      return (
        <View>
          <Fetchapicard
            item={item}
            onPress={_item_ => {
              // let id = _item_.id;
              // let item = {id};
              fetch('https://api.instantwebtools.net/v1/airlines/2')
                .then(response => response.json())
                .then(responsejson => {
                  this.setState({
                    reposnselist: JSON.stringify(responsejson, null, 2),
                  });
                  console.log(
                    'resultXXXX' + JSON.stringify(responsejson, null, 2),
                  );
                  this.props.navigation.navigate('Displaydata', {
                    selectedAirline: responsejson,
                  });
                })
                .catch(err => {
                  console.log('error' + err);
                });
            }}
          />
        </View>
      );
    };
    return (
      <View>
        <FlatList data={this.state.datalist} renderItem={renderItem} />
        <Text>fetchapicalling</Text>
      </View>
    );
  }
}
