import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Page not found!" }} />
            <View
                style={styles.container}
            >
                <Text style={styles.text}>Page is not found</Text>
                <Link href="/" style={styles.text}>
                    Go back home
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    text: {
        color: "white"
    }
})
