import React from 'react'
import { TouchableOpacity } from 'react-native'

import {
    Container,
    StyledImage,
    TextWrapper,
    Title
} from './styles'

export const Post = ({ post, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <Container>
                <StyledImage source={{ uri: post.img }}>
                    <TextWrapper>
                        <Title>{new Date(post.date).toLocaleDateString()}</Title>
                    </TextWrapper>
                </StyledImage>
            </Container>
        </TouchableOpacity>
    )
}