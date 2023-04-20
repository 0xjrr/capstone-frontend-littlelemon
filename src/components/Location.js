import { Text, VStack} from "@chakra-ui/react";

const Location = (props) => {
    return (
    <VStack align={"right"} color={props.color}>
        <Text fontSize={"40pt"}>
            Little Lemon
        </Text>
        <Text fontSize={"18pt"}>
            Chicago
        </Text>
    </VStack>
    );
};
export default Location;