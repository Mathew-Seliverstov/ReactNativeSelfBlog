import * as Font from 'expo-font'

export async function bootstrap() {
    await Font.loadAsync({
        'os-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'os-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    })
}
