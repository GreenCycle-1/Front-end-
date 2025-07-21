import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            {/* Set the SplashScreen as the initial screen */}
            <Stack.Screen
                name="SplashScreen"
                options={{
                    headerShown: false, // Hide the header for the splash screen
                }}
            />
            {/* Define the LoginScreen as the next screen */}
            <Stack.Screen
                name="LoginScreen"
                options={{
                    headerShown: false, // Hide the header for the login screen
                }}
            />
        </Stack>
    );
}
