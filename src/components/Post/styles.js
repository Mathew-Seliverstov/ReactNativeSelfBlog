import styled from "styled-components";
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export const Container = styled.View`
    margin-bottom: 15px;
  overflow: hidden;
`

export const StyledImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

export const TextWrapper = styled.View`
  background: #00000050;
  padding-vertical: 5px;
  align-items: center;
  width: 100%;
`

export const Title = styled.Text`
  color: #fff;
  font-family: os-regular;
`
