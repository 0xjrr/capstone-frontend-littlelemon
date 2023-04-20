import { Text, Box, VStack, Image, Spacer, Flex } from "@chakra-ui/react";

const CardSpecial = (props) => {
    return(
        <Box height={"660px"} width={"306px"} bgColor={"#D0D0D0"} rounded={"md"}>
            <VStack>
                <Image src={props.itemImage} rounded={"md"}/> 
                <Flex width={"80%"}>
                    <Text>
                        {props.itemName}
                    </Text>
                    <Spacer />
                    <Text color={"#EE9972"}>
                        ${props.itemPrice}
                    </Text>
                </Flex>
                <Text>
                    {props.itemDescription}
                </Text>
                <Box>
                    <Text>
                        <a href="/order">Order</a>
                    </Text>
                </Box>
            </VStack>

        </Box>
    );
};
export default CardSpecial;