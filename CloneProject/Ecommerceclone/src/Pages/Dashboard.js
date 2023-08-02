


import { Text, View, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import CustomText from '../helper/customView/CustomText';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
        }
    }
    CategoryItem = ({ item, index }) => {
        return (
            <View
                style={styles.item}
                easing={'ease-in-out'}
                delay={index * 200}
                animation={'zoomIn'}
                duration={500}>
                <Image
                    source={{ uri: item.imgPath }}

                    resizeMode="cover"
                />

            </View>
        );
    };




    render() {

        return (
            <View>

                <FlatList
                    horizontal
                    style={{ paddingHorizontal: 6 }}
                    contentContainerStyle={{ paddingVertical: 8 }}
                    data={this.state.categoryList}
                    extraData={this.state}
                    renderItem={this.CategoryItem}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={
                        <CustomText
                            customStyle={{
                                marginTop: 16,
                                flex: 1,
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        // text={
                        //     this.state.refreshing
                        //         ? strings.Please_wait
                        //         : strings.No_Record_Found
                        // }
                        />
                    }
                />


            </View>
        )
    }
}