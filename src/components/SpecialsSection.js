import { Text, Box, HStack, VStack, Image, Spacer, Flex } from "@chakra-ui/react";
import ButtonYellow from "./ButtonYellow";
import CardSpecial from "./CardSpecial";
import menuItems from "../data/menuItems";

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
                <HStack>
                    {menuItems.map(item => <CardSpecial itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemImage={item.image}/>)}
                </HStack>
            </VStack>
        </Box>
    );
};
export default SpecialsSection;