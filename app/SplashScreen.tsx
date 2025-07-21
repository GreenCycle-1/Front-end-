import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const fullText = 'GREEN CYCLE';

export default function SplashScreen() {
    const [typedText, setTypedText] = useState('');
    const [showTyping, setShowTyping] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    // Start navigation after full splash (≈6s)
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // trigger fade
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    // After fade transition, navigate
    useEffect(() => {
        if (fadeOut) {
            setTimeout(() => {
                router.replace('(screens)/LoginScreen' as any);
            }, 500); // duration of fade
        }
    }, [fadeOut]);

    // Trigger typing
    useEffect(() => {
        const typingTimer = setTimeout(() => {
            setShowTyping(true);
        }, 1800);
        return () => clearTimeout(typingTimer);
    }, []);

    useEffect(() => {
        if (!showTyping) return;

        let displayText = '';
        let index = 0;

        const typeNext = () => {
            if (index < fullText.length) {
                displayText += fullText[index];
                setTypedText(displayText);
                index++;
                setTimeout(typeNext, 130);
            }
        };

        typeNext();
    }, [showTyping]);

    const opacityStyle = fadeOut
        ? { opacity: 0, transition: 'opacity 0.5s ease-in-out' }
        : { opacity: 1 };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#1ED760',
                justifyContent: 'center',
                alignItems: 'center',
                ...opacityStyle,
            }}
        >
            {!showTyping && (
                <Animatable.Image
                    source={require('@/assets/images/logo.png')}
                    animation="zoomIn"
                    duration={1500}
                    style={{ width: 120, height: 120 }}
                />
            )}

            {showTyping && (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        width,
                    }}
                >
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={{
                            width: 120,
                            height: 120,
                            marginRight: 12, // tightened spacing
                        }}
                        resizeMode="contain"
                    />

                    <Animatable.Text
                        animation="pulse"
                        iterationCount="infinite"
                        duration={1000}
                        style={{
                            color: '#FFFFFF',
                            fontSize: 28,
                            fontWeight: 'bold',
                            letterSpacing: 1,
                        }}
                    >
                        {typedText}
                    </Animatable.Text>
                </View>
            )}
        </View>
    );
}
