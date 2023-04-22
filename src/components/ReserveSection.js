import { useFormik } from "formik";
import {
    Text,
    Box,
    VStack,
    Spacer,
    Flex,
    HStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Image,
    Textarea,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import ButtonYellow from "./ButtonYellow";
import formImage from '../images/restaurant.jpg';

const ReserveSection = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            comment: ''

        },
        // onSubmit: (values) => {
        //     submit('', values);
        // },

        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            email: Yup.string().email().required('Invalid email address'),
            comment: Yup.string(),
        }),
    });

    return (
        <Box margin={"80px 188px"}>
            <VStack>
                <Flex width={"100%"}>
                    <Box width={"300px"}>
                        <Text fontSize={"18pt"}>
                            Reserve a Table
                        </Text>
                    </Box>
                    <Spacer />
                </Flex>
                <Spacer />
                <HStack width={"100%"}>
                    <Box width={"50%"} left={"0px"} position={"relative"}>

                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4} width={"100%"}>
                                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                    <FormLabel htmlFor="firstName">Name</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        {...formik.getFieldProps("firstName")}
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                                    <FormLabel htmlFor="comment">Your message</FormLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        height={100}
                                        {...formik.getFieldProps("comment")}
                                    />
                                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                                </FormControl>
                                <Button
                                    type={"submit"}
                                    width={"full"}
                                    rounded={"md"}
                                    bgColor={"#F4CE14"}
                                    color={"black"}
                                >
                                    Submit
                                </Button>
                            </VStack>
                        </form>

                    </Box>
                    <Box width={"50%"} padding={"5%"}>
                        <Image src={formImage} rounded={"md"} />
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
};
export default ReserveSection;