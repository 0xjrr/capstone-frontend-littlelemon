import { Text, Box, HStack, VStack, Image, Spacer } from "@chakra-ui/react";
import Location from "./Location";
import aboutCardTopImage from "../images/aboutcard1.jpg"
import aboutCardBottomImage from "../images/aboutcard2.jpg"

const AboutCard = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack align={"right"} maxWidth={"40%"}>
                    <Location color={"white"} />
                    <Text minWidth={"300px"}  color={"white"} align={"justify"}>
                        Welcome to Little Lemon, a charming Mediterranean restaurant dedicated to bringing you the freshest and most authentic cuisine possible. Our cozy restaurant offers warm and friendly service, and our menu includes a range of delicious dishes, including savory falafel wraps, mouthwatering seafood paella, and more. We cater to all dietary needs, including vegetarian and gluten-free options. Come dine with us and experience the flavors of the Mediterranean in the heart of the city.
                    </Text>
                </VStack>
                <Spacer />
                <Box height={"512px"} width={"50%"} position={"relative"} >
                    <Box position={"absolute"} left={"15%"} bottom={"15%"}>

                        <Image src={aboutCardBottomImage} width={"254px"} height={"254px"} rounded={"md"} shadow={"base"} fit={"cover"}></Image>
                    </Box>
                    <Box position={"absolute"} right={"15%"} top={"15%"}>

                        <Image src={aboutCardTopImage} width={"254px"} height={"254px"} rounded={"md"} shadow={"base"} fit={"cover"}></Image>
                    </Box>
                </Box>
                <Spacer />
            </HStack>

        </Box>
    )
};
export default AboutCard;