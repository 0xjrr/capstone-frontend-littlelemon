
import { Text, Box, HStack, VStack, Image } from "@chakra-ui/react";
import Location from "./Location";
import ButtonYellow from "./ButtonYellow";
const HeroSection = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack align={"right"}>
                    <Location />
                    <Text width={"300px"}>
                    We are a family owned, Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </Text>
                    <ButtonYellow buttonText={"Reserve"} urlEndpoint={"reserve"}/>
                </VStack>
            </HStack>

        </Box>
    )
};
export default HeroSection;