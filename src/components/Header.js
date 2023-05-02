import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../images/navlogo.png"
import { Link } from "react-router-dom";

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
            height={"124px"}
            alignItems={"center"}
            style={{ zIndex: 1 }}
        >
            <Box
                margin={"0 188px"}
            >
                <HStack
                    px={0}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <Box height={"60px"}>
                            <Link to={"/"} height={"100%"}>
                                <Image src={logo} alt="Logo" height={"100%"} width={"100%"} />
                            </Link>
                        </Box>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Link key="home" to={"/"}> Home</Link>
                            <Link key="about" to={"/about"}> About</Link>
                            <Link key="menu" to={"/menu"}> Menu</Link>
                            <Link key="reserve" to={"/reserve"}> Reservations</Link>
                            {/* {links.map(link =>
                                <Box rounded={"md"} padding={"5px"} key={link.anchor}>
                                    <Link key={link.anchor} to={link.url}> {link.name}</Link>
                                </Box>)
                            } */}
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;