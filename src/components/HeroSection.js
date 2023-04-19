
import { Text, Box, HStack, VStack, Image } from "@chakra-ui/react";
import Location from "./Location";
const HeroSection = () => {
    return (
        <Box bgColor={"#495E57"} height={"512px"} >
            <HStack margin={"0 188px"}>
                <Location />
            </HStack>

        </Box>
    )
};
export default HeroSection;