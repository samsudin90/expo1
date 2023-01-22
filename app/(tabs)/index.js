import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <View >
        <Text className="text-xl font-bold">Hello World</Text>
        <Text className="text-blue-700">This is the first page of your app.</Text>
        <Link href="/profile" className="text-blue-400">go to Profile</Link>
      </View>
    </View>
  );
}