import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string,
    type?: "primary" | "secondary",
    pressFunction?: () => void
}

export default function Button({ label, type, pressFunction }: Props) {
    if (type === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={pressFunction}
                >
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#25292e'}]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        )
    }
    if (type === "secondary") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={pressFunction}
                >
                    <Text style={styles.buttonLabel}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        )
    }
    if (type === undefined) {
        return (
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>
                    Undefined button type
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
});