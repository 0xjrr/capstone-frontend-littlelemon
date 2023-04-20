import { Text, Box, HStack, VStack, Image, Spacer } from "@chakra-ui/react";
import Location from "./Location";
import ButtonYellow from "./ButtonYellow";
import heroSectionImage from "../images/herosection.jpg"

const HeroSection = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack align={"right"}>
                    <Location color={"white"}/>
                    <Text width={"300px"} color={"white"}>
                        We are a family owned, Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </Text>
                    <Spacer />
                    <Box>

                        <ButtonYellow buttonText={"Reserve"} urlEndpoint={"reserve"} />
                    </Box>
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