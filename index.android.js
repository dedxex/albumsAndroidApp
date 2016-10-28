import React, { Component } from 'react';
import { AppRegistry, Text,View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App =() =>{
    return (
        <View>
            <Header headerText={'albums'} />
            <AlbumList />
        </View>
);};

AppRegistry.registerComponent('albums', () => App);