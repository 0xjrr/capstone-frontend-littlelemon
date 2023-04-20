import { Text, Box, VStack, Image, Spacer, Flex, HStack } from "@chakra-ui/react";

const CardSpecial = (props) => {
    return (
        <Box height={"660px"} width={"306px"} minWidth={"306px"} bgColor={"#D0D0D0"} rounded={"md"}>
            <VStack height={"100%"}>
                <Image src={props.itemImage} rounded={"md"} fit={"cover"} height={"200px"} width={"100%"} />
                <Flex width={"80%"}>
                    <Text fontWeight={"bold"}>
                        {props.itemName}
                    </Text>
                    <Spacer />
                    <Text color={"#EE9972"} fontWeight={"bold"}>
                        ${props.itemPrice}
                    </Text>
                </Flex>
                <Box width={"80%"}>

                    <Text align={"left"}>
                        {props.itemDescription}
                    </Text>
                </Box>
                <Spacer />
                <Box position={"relative"} bottom={"10px"} width={"80%"}>
                    <HStack color="#495E57" fontWeight={"bold"}>
                        <Spacer />
                        <a href="/order" align="left">Order</a>
                    </HStack>
                </Box>
            </VStack>

        </Box>
    );
};
export default CardSpecial;