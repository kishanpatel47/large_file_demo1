// import {FlatList, Text, View} from 'react-native';
// import React, {Component} from 'react';

// export default class Apicalling extends Component {
//   constructor(pros) {
//     super(pros);
//     this.state = {
//       datalist: [],
//     };
//   }

//   datafetch = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(),
//     })
//       .then(response => response.json())
//       .then(json => {
//         this.setState({datalist: json});
//       });
//   };
//   componentDidMount() {
//     this.datafetch();
//   }
//   render() {
//     return (
//       <View>
//         <Text style={{textAlign: 'center', marginTop: 10, fontSize: 20}}>
//           display data
//         </Text>

//         <FlatList
//           data={this.state.datalist}
//           renderItem={item => {
//             <Text>{item.title}</Text>;
//           }}
//         />
//       </View>
//     );
//   }
// }
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default class Apicalling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getMovies() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={{}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text
                style={{
                  height: 50,
                  alignItems: 'center',
                  margin: 10,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                {item.title}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}
