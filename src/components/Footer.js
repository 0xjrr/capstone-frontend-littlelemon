import React from "react";
import { Box, Flex, Spacer, VStack, Image, HStack, Text, List, ListItem } from "@chakra-ui/react";
import footerLogo from "../images/Asset 20@4x.png"

const links = [
    {
        name: "Home",
        url: "/#home",
        anchor: "home",
    },
    {
        name: "About",
        url: "/#about",
        anchor: "about",
    },
    {
        name: "Menu",
        url: "/#menu",
        anchor: "menu",
    },
    {
        name: "Reservations",
        url: "/#reserve",
        anchor: "reserve",
    },
    {
        name: "Order online",
        url: "/#order",
        anchor: "order",
    },
    {
        name: "Login",
        url: "/#login",
        anchor: "login",
    },
];

const Footer = () => {
    return (
        <Box backgroundColor="#D9D9D9">
            <footer>
                <Flex
                    margin={"0 188px"}
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    height={"256px"}
                >
                    <Box p='4'>
                        <Image src={footerLogo} width={"124px"} height={"auto"} />
                    </Box>
                    <Spacer />
                    <Box p='4' color={"black"}>
                        <VStack align={"left"}>
                            <Text>
                                Navigation
                            </Text>
                            <List>
                                {
                                    links.map(link =>
                                        <ListItem>
                                            <a key={link.anchor} href={link.url}> {link.name}</a>
                                        </ListItem>)
                                }
                            </List>
                        </VStack>
                    </Box>
                    <Spacer />
                    <Box p='4' bg='red.400'>
                        Box 1
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                        Box 2
                    </Box>
                </Flex>
            </footer>
        </Box>
    );
};
export default Footer;
