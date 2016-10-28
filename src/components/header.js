import  React from 'react';
import { Text,View } from 'react-native';

const Header = (props) => {
    const { viewStyle,textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle : {
        backgroundColor : '#D3D3D3',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        shadowColor:'#0001',
        shadowOffset: { width : 0, height : 2 },
        shadowOpacity:0.2
        
    },
    textStyle : {
        fontSize : 30
    }
};

export default Header;