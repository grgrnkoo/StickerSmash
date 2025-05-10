import { Image } from "expo-image";
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from "react-native";

type Props = PropsWithChildren<{
    imageUrl: string
}>

export default function ImageContainer({ imageUrl, children } : Props) {
    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.image} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 440,
        borderRadius: 18,
        overflow: 'hidden'
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
})