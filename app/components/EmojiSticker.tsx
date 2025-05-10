import { type ImageSource } from 'expo-image';
import { ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleValue = useSharedValue(imageSize)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleValue.value !== imageSize * 2) {
                scaleValue.value = scaleValue.value * 2;
            } else {
                scaleValue.value = Math.round(scaleValue.value / 2)
            }
        })


    const drag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX
            translateY.value += event.changeY
        })

    const rImageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleValue.value),
            height: withSpring(scaleValue.value),
        }
    })

    const rContainerMove = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    translateY: translateY.value
                }
            ]
        }
    })

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[{ top: -350 }, rContainerMove]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource as ImageSourcePropType}
                        resizeMode='contain'
                        style={[{ width: imageSize, height: imageSize }, rImageStyle]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}