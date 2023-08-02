import React from 'react';
import Route from './src/Route';

const Ecommerceclone = () => {
  return (
    <Route />
  );
}

export default Ecommerceclone;
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import {
//   StyleSheet,
//   ScrollView,
//   View,
//   Dimensions,
//   Image,
//   Text,
// } from 'react-native';
// import { ActivityIndicator } from 'react-native';

// const HomeCarousel = () => {
//   const [dimension, setDimension] = useState(Dimensions.get('window'));
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollRef = useRef();
//   let intervalId = null;

//   const onChange = () => {
//     setDimension(Dimensions.get('window'));
//   };

//   useEffect(() => {
//     Dimensions.addEventListener('change', onChange);
//     return () => {
//       Dimensions.removeEventListener('change', onChange);
//     };
//   });

//   const onSlideChange = useCallback(() => {
//     // Calculate newIndex here and use it to update your state and to scroll to the new slide
//     const newIndex =
//       selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

//     setSelectedIndex(newIndex);

//     scrollRef?.current?.scrollTo({
//       animated: true,
//       y: 0,
//       x: dimension.width * newIndex,
//     });
//   }, [selectedIndex]);

//   const startInterval = useCallback(() => {
//     intervalId = setInterval(onSlideChange, 3000);
//   }, [onSlideChange]);

//   useEffect(() => {
//     startInterval();

//     return () => {
//       // Clear the interval when component unmounts, otherwise you could have memory leaks
//       clearInterval(intervalId);
//     };
//   }, [onSlideChange]);

//   const onTouchStart = () => {
//     // As soon as the user touches the slide, stop the automatic sliding
//     clearInterval(intervalId);
//   };

//   const onTouchEnd = () => {
//     // As soon as the user stops touching the slide, releases it, start the automatic sliding again
//     startInterval();
//   };

//   const carouselImages = [
//     { url: 'https://i.ibb.co/FDwNR9d/img1.jpg' },
//     { url: 'https://i.ibb.co/7G5qqGY/1.jpg' },
//     { url: 'https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg' },
//     { url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg' },
//     { url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg' },
//   ];

//   const setIndex = event => {
//     let viewSize = event.nativeEvent.layoutMeasurement.width;
//     let contentOffset = event.nativeEvent.contentOffset.x;
//     let carouselIndex = Math.floor(contentOffset / viewSize);
//     setSelectedIndex(carouselIndex);
//   };

//   return (
//     <View style={{ width: dimension.width }}>
//       <ScrollView
//         horizontal
//         ref={scrollRef}
//         onMomentumScrollEnd={setIndex}
//         showsHorizontalScrollIndicator={false}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//         pagingEnabled>
//         {carouselImages.map((value, key) => (
//           <Image
//             source={{ uri: `${value.url}` }}
//             style={{ width: dimension?.width, height: 250, resizeMode: 'cover' }}
//             PlaceholderContent={<ActivityIndicator />}
//           />
//         ))}
//       </ScrollView>
//       <View
//         style={{
//           flexDirection: 'row',
//           position: 'absolute',
//           bottom: 0,
//           alignSelf: 'center',
//         }}>
//         {carouselImages.map((val, key) => (
//           <Text
//             key={key}
//             style={key === selectedIndex ? { color: 'white' } : { color: '#888' }}>
//             ⬤
//           </Text>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default HomeCarousel;

// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   ScrollView,
//   Dimensions
// } from 'react-native';

// const images = [
//   'https://www.omipharma.vn/files/banner/2020-07/xit-chong-nang-lishan-nhat-ban-spf-50-pa-huong-tinh-dau-thien-nhien.jpg',
//   'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-hon-moi-ngay.jpg',
//   'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-nhu-cau-dan-dau-lua-chon.jpg',
//   'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-hon-moi-ngay.jpg',
//   'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-nhu-cau-dan-dau-lua-chon.jpg'

// ]

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: 0
//     }
//   }

//   change(nativeEvent) {
//     // console.log("nativeEvent:", nativeEvent)
//     if (nativeEvent) {
//       const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
//       if (slide !== this.state.active) {

//         this.setState({
//           active: slide
//         })
//       }
//     }

//   }

//   render() {
//     const { active } = this.state;
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ color: 'white' }}>HomeScreen</Text>
//         </View> */}
//         <View style={styles.wrap}>
//           <ScrollView
//             onScroll={({ nativeEvent }) => this.change(nativeEvent)}
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             horizontal
//             style={styles.wrap}
//           >
//             {
//               images.map((e, index) =>
//                 <Image
//                   key={e}
//                   resizeMode="stretch"
//                   style={styles.wrap}
//                   source={{ uri: e }}
//                 />
//               )
//             }
//           </ScrollView>
//           <View style={styles.wrapDot}>
//             {
//               images.map((e, index) =>
//                 <Text
//                   key={e}
//                   style={active === index ? styles.dotActive : styles.dot}>●</Text>)
//             }
//           </View>
//         </View>


//       </SafeAreaView>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   wrap: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height * 0.79 // 25% window
//   },
//   wrapDot: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     alignSelf: 'center'
//   },
//   dot: {
//     margin: 3,
//     color: '#888'
//   },
//   dotActive: {
//     margin: 3,
//     color: 'black'
//   }

// });

// export default App;