import { Text, Box, HStack, VStack, Spacer, Flex, Center } from "@chakra-ui/react";
import ButtonYellow from "./ButtonYellow";
import CardSpecial from "./CardSpecial";
import menuItems from "../data/specialsItems";

const SpecialsSection = () => {
    return (
        <Box margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box width={"300px"}>
                        <Text fontSize={"18pt"}>
                            Specials
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

                <HStack
                    width={"100%"}
                    spacing={"5%"}
                >
                    {menuItems.map(item => {
                        return (
                            <Spacer key={item.name}>
                                <CardSpecial key={item.name} itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemImage={item.image} />
                            </Spacer>
                            );
                        }
                    )};

                </HStack>
            </VStack>
        </Box>
    );
};
export default SpecialsSection;