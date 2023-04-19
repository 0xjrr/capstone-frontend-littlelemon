import { Text, Box, HStack, VStack, Image, Spacer } from "@chakra-ui/react";
import Location from "./Location";
import ButtonYellow from "./ButtonYellow";
import heroSectionImage from "../images/herosection.jpg"

const HeroSection = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack align={"right"}>
                    <Location />
                    <Text width={"300px"}>
                        We are a family owned, Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </Text>
                    <Spacer />
                    <ButtonYellow buttonText={"Reserve"} urlEndpoint={"reserve"} />
                </VStack>
                <Spacer />
                <Box>
                    <Image marginTop={"100px"} src={heroSectionImage} maxWidth={"491px"} maxHeight={"450px"} rounded={"md"} shadow={"base"}></Image>
                </Box>
                <Spacer/>
            </HStack>

        </Box>
    )
};
export default HeroSection;