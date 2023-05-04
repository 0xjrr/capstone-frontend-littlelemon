import { Text, Box, HStack, VStack, Image, Spacer } from "@chakra-ui/react";
import Location from "./Location";
import heroSectionImage from "../images/herosection.jpg"
import useWindowDimensions from "../hooks/useWindowDimensions";

const HeroSection = () => {
    const windowSize = useWindowDimensions();
    const imageHero = () => {
        return(
        <Box paddingRight={"15%"}>
            <Image marginTop={"15%"} src={heroSectionImage} width={"450px"} height={"491px"} rounded={"md"} shadow={"base"} fit={"fill"}></Image>
        </Box>
        );
    }

    return (
        <Box bgColor={"#495E57"} height={"512px"} position={"relative"}>
            <HStack margin={"0 188px"}>
                <Box position={"absolute"} top={"15%"}>

                <VStack align={"right"} >
                    <Location color={"white"}/>
                    <Text width={"300px"} color={"white"}>
                        We are a family owned, Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </Text>
                    <Spacer />
                </VStack>
                </Box>
                {windowSize.width>1300 ? <Spacer /> : null}
                {windowSize.width>1300 ? imageHero() : null}
                
            </HStack>

        </Box>
    )
};
export default HeroSection;