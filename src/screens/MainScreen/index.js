import React from 'react'
import {FlatList, Text, View} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Wrapper} from './styles'
import {DATA} from "../../data";

import {Post} from "../../components/Post";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";

export const MainScreen = ({ navigation }) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    }

    return (
        <Wrapper>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
            />
        </Wrapper>
    )
}
