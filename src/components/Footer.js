import React from "react";
import { Box, Flex, Spacer, VStack, Image, Text, List, ListItem } from "@chakra-ui/react";
import footerLogo from "../images//footerlogo.png"
import links from "../data/links";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box backgroundColor="#D9D9D9">
            <footer>
                <Flex
                    margin={"0 188px"}
                    alignItems={"start"}
                    height={"256px"}
                    color={"black"}
                >
                    <Box p='4'>
                        <Image src={footerLogo} width={"124px"} height={"auto"} />
                    </Box>
                    <Spacer />
                    <Box p='4'>
                        <VStack align={"left"}>
                            <Text fontSize={"18pt"}>
                                Navigation
                            </Text>
                            <VStack align={"left"}>
                                <Link key="home" to={"/"}> Home</Link>
                                <Link key="about" to={"/about"}> About</Link>
                                <Link key="menu" to={"/menu"}> Menu</Link>
                                <Link key="reserve" to={"/reserve"}> Reservations</Link>

                                {/* {
                                    links.map(link =>
                                        <ListItem key={link.anchor}>
                                            <Link key={link.anchor} to={link.url}> {link.name}</Link>
                                        </ListItem>)
                                } */}
                            </VStack>
                        </VStack>
                    </Box>
                    <Spacer />
                    <Box p='4'>
                        <VStack align={"left"}>
                            <Text fontSize={"18pt"}>
                                Location
                            </Text>
                            <List>
                                <ListItem>
                                    Street Name
                                </ListItem>
                                <ListItem>
                                    Phone
                                </ListItem>
                                <ListItem>
                                    Mail
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>
                    <Spacer />
                    <Box p='4'>
                        <VStack align={"left"}>
                            <Text fontSize={"18pt"}>
                                Socials
                            </Text>
                            <List>
                                <ListItem>
                                    IG
                                </ListItem>
                                <ListItem>
                                    FB
                                </ListItem>
                                <ListItem>
                                    YT
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>
                </Flex>
            </footer>
        </Box>
    );
};
export default Footer;
