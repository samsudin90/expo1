import { Link } from "expo-router"
import {View, Text} from "react-native"

export default function Profile() {
    return(
        <View className="flex-1 justify-center items-center">
            <Text>asdg</Text>
            <Link href="/" className="text-blue-400">go back</Link>
        </View>
    )
}