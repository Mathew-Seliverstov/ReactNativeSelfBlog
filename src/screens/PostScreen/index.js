import React from 'react'
import {ScrollView, Button, Alert} from 'react-native'
import {StyledImg, TextWrapper, Title} from './styles'
import {DATA} from "../../data";
import {THEME} from "../../theme";

export const PostScreen = ({ route, navigation }) => {
    const post = DATA.find(p => p.id === route.params.postId)

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы уверены что хотите удалить пост?',
            [
                {text: 'Отменить', style: 'cancel'},
                {text: 'Удалить', style: 'destructive', onPress: () => {}}
            ]
        )
    }

    const {postId} = route.params
    return (
        <ScrollView>
            <StyledImg source={{ uri: post.img }} />
            <TextWrapper>
                <Title>{post.text}</Title>
            </TextWrapper>
            <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}
