import { Text, Box, HStack, VStack, Image, Spacer, Flex } from "@chakra-ui/react";
import ButtonYellow from "./ButtonYellow";

const SpecialsSection = () => {
    return (
        <Box height={"984px"} margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box>
                        <Text fontSize={"18pt"}>
                            Specials
                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <ButtonYellow buttonText={"Menu"} urlEndpoint={"menu"} />
                    </Box>
                    <Spacer />
                </Flex>

            </VStack>
        </Box>
    );
};
export default SpecialsSection;