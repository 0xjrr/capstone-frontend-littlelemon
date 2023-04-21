import { Text, Box, HStack, VStack, Spacer, Flex, SimpleGrid } from "@chakra-ui/react";
import CardSpecial from "./CardSpecial";
import menuItems from "../data/menuItems";

const MenuSection = () => {
    return (
        <Box margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box width={"300px"}>
                        <Text fontSize={"18pt"}>
                            Menu
                        </Text>
                    </Box>
                </Flex>
                <Spacer />
                <Box width={"100%"}>
                <SimpleGrid 
                    minChildWidth={"306px"} 
                    spacing={"10px"}
                    spacingY={"40px"}
                    >
                    {menuItems.map(item => <CardSpecial itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemImage={item.image} />)}
                </SimpleGrid>
                    </Box>
            </VStack>
        </Box>
    );
};
export default MenuSection;