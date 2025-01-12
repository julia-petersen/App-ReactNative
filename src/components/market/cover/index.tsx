import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";

import { router } from "expo-router";

import { s } from "./styles";
import { Button } from "@/components/button";
import { colors } from "@/styles/theme";

type Props = {
    uri: string
}

export function Cover({uri}: Props) {
    return (
        <ImageBackground source = {{ uri }} style={s.container}>
            <View style={s.header}>
                <Button 
                    style={{
                        width: 40, 
                        height: 40, 
                        backgroundColor: colors.green.base, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        borderRadius: 10}} 
                    onPress={() => router.back()}
                >
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}