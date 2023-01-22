import { Tabs } from "expo-router";
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false}}>
                <Tabs.Screen name="index" options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }} />
                <Tabs.Screen name="profile" options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    )
                }} />
            </Tabs>
        </>
    );
}