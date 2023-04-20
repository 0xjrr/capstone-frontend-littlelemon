import { Text, Box, HStack, VStack, Image, Spacer, Flex, Center } from "@chakra-ui/react";
import ButtonYellow from "./ButtonYellow";
import CardSpecial from "./CardSpecial";
import menuItems from "../data/menuItems";

const SpecialsSection = () => {
    return (
        <Box height={"984px"} margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box width={"300px"}>
                        <Text fontSize={"18pt"}>
                            Specials
                        </Text>
                    </Box>
                    <Spacer />
                    <Box width={"297px"}>
                        <Center>
                            <ButtonYellow buttonText={"Menu"} urlEndpoint={"menu"} />
                        </Center>
                    </Box>
                    <Spacer />
                </Flex>
                <Spacer />

                <HStack
                    overflowX="scroll"
                    width={"100%"}
                    sx={{
                        "::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    {menuItems.map(item => <CardSpecial itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemImage={item.image} />)}
                </HStack>
            </VStack>
        </Box>
    );
};
export default SpecialsSection;