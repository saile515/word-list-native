import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<View className="flex-1 bg-white justify-center items-center">
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
