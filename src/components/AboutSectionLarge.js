import { Text, Box, VStack, Spacer, Flex, Center } from "@chakra-ui/react";
import ButtonYellow from "./ButtonYellow";

const SpecialsSection = () => {
    return (
        <Box margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box width={"300px"}>
                        <Text fontSize={"18pt"}>
                            About
                        </Text>
                    </Box>
                    <Spacer />
                    <Box >
                        <Center>
                            <ButtonYellow buttonText={"Menu"} urlEndpoint={"menu"} />
                        </Center>
                    </Box>
                </Flex>
                <Spacer />

                <Text>
                    Welcome to Little Lemon, a charming Mediterranean restaurant that will transport you to the sunny shores of the Mediterranean. Our restaurant is dedicated to bringing you the freshest and most authentic Mediterranean cuisine possible. Our dishes are crafted with the finest ingredients, expertly seasoned with a blend of herbs and spices that will tantalize your taste buds.

                    Our cozy and intimate restaurant is perfect for a romantic date or a small gathering with friends and family. We take pride in our warm and friendly service, ensuring that every guest feels at home when dining with us. Whether you're craving our savory falafel wrap, our delicious chicken shawarma, or our mouthwatering seafood paella, we guarantee that you'll be impressed with our delectable menu offerings.

                    At Little Lemon, we believe that good food should be enjoyed by everyone, and that's why we offer vegetarian and gluten-free options to cater to all dietary needs. Come dine with us and experience the flavors of the Mediterranean, right here in the heart of the city.
                </Text>
            </VStack>
        </Box>
    );
};
export default SpecialsSection;