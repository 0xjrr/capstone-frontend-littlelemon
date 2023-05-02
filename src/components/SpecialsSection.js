import { Text, Box, VStack, Spacer, Flex, Center, SimpleGrid } from "@chakra-ui/react";
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
                <Box width={"100%"}>
                    <SimpleGrid
                        minChildWidth={"306px"}
                        spacing={"10px"}
                        spacingY={"40px"}
                    >
                        {menuItems.map(item => {
                            return (
                                <Spacer key={item.name}>
                                    <CardSpecial key={item.name} itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemImage={item.image} />
                                </Spacer>
                            );
                        }
                        )}

                    </SimpleGrid>
                </Box>
            </VStack>
        </Box>
    );
};
export default SpecialsSection;