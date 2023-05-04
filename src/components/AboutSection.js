import { Text, Box, HStack, VStack, Image, Spacer } from "@chakra-ui/react";
import Location from "./Location";
import aboutCardTopImage from "../images/aboutcard1.jpg"
import aboutCardBottomImage from "../images/aboutcard2.jpg"
import useWindowDimensions from "../hooks/useWindowDimensions";

const AboutSection = () => {
    const windowSize = useWindowDimensions();
    const imageHero = () => {
        return (
            <Box height={"512px"} minWidth={"60%"} position={"relative"} >
                <Box position={"absolute"} left={"15%"} bottom={"15%"} width={"40%"} height={"40%"}>

                    <Image src={aboutCardBottomImage} width={"100%"} height={"100%"} rounded={"md"} shadow={"base"} fit={"cover"}></Image>
                </Box>
                <Box position={"absolute"} right={"15%"} top={"15%"} width={"40%"} height={"40%"}>

                    <Image src={aboutCardTopImage} width={"100%"} height={"100%"} rounded={"md"} shadow={"base"} fit={"cover"}></Image>
                </Box>
            </Box>
        );
    }
    return (
        <Box bgColor={"#495E57"} minHeight={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack align={"right"} minWidth={"40%"} maxWidth={"100%"}>
                    <Location color={"white"} />
                    <Text width={"100%"} color={"white"} align={"justify"}>
                        Welcome to Little Lemon, a charming Mediterranean restaurant dedicated to bringing you the freshest and most authentic cuisine possible. Our cozy restaurant offers warm and friendly service, and our menu includes a range of delicious dishes, including savory falafel wraps, mouthwatering seafood paella, and more. We cater to all dietary needs, including vegetarian and gluten-free options. Come dine with us and experience the flavors of the Mediterranean in the heart of the city.
                    </Text>
                </VStack>
                {windowSize.width > 1100 ? <Spacer /> : null}
                {windowSize.width > 1100 ? imageHero() : null}
                {windowSize.width > 1100 ? <Spacer /> : null}
            </HStack>

        </Box>
    )
};
export default AboutSection;