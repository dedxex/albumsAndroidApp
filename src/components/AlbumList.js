import React from 'react';
import { Text,View } from 'react-native';

const AlbumList = () => {
    const { viewStyle,textStyle } = styles;
    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>AlbumList with tara</Text>
        </View>
    );
}
const styles = {
    viewStyle : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    textStyle : {
        fontSize : 30
    }
};
export default AlbumList;