import { Text, Box, HStack, VStack, Image } from "@chakra-ui/react";
const HeroSection = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <VStack>
                    <Text fontSize={"53px"}>
                        Little Lemon
                    </Text>
                </VStack>
            </HStack>

        </Box>
    )
};
export default HeroSection;