import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../images/navlogo.png"
import links from "../data/links";

const Header = () => {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="white"
        >
            <Box
            margin="0 auto"
            >
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                    margin={"0 80px"}
                >
                    <nav>
                        <HStack spacing={8}>
                            <Image src={logo} alt="Logo" height={"60px"} />
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            {links.map(link =>
                            <Box rounded={"md"} padding={"5px"}>
                                <a key={link.anchor} href={link.url}> {link.name}</a>
                            </Box>)
                            }
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;