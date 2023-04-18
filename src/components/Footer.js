import React from "react";
import { Box, Flex, Spacer, VStack, Image, HStack, Text, List, ListItem } from "@chakra-ui/react";
import footerLogo from "../images/Asset 20@4x.png"
import links from "../data/links";

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
                            <Text fontSize={"24px"}>
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
                    <Box p='4'>
                        <VStack align={"left"}>
                            <Text fontSize={"24px"}>
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
                            <Text fontSize={"24px"}>
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
