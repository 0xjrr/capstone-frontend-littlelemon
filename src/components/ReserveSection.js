import React, { useEffect, useState } from "react";
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
    Select,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import formImage from '../images/restaurant.jpg';
import { submitAPI, fetchAPI } from "../hooks/api"


const ReserveSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const [reserved, setReserved] = useState("Reserve")
    const [reservedLocked, setReservedLocked] = useState(false)
    const [timeSlots, setTimeSlots] = useState(['Select date',])
    const [dateField, setDateField] = useState('')
    const [timeFieldLocked, setTimeFieldLocked] = useState(true)


    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            comment: '',
            dateTime: '',
            numberGuests: '',
        },
        onSubmit: (values) => {
            submit('', values);
            submitAPI(values);

        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required.'),
            email: Yup.string().email().required('Invalid email address.'),
            comment: Yup.string(),
            dateTime: Yup.string().required('Required.'),
            numberGuests: Yup.number().min(1, 'Number should be greater or equal to 1.').max(10, 'For larger groups, call us.').required('Required. Number should be between 1 and 10. For larger groups, call us.')
        }),
    });

    const handleDateFieldChange = (event) => {
        formik.handleChange(event)
        setDateField(event.target.value)
    }
    useEffect(() => {
        console.log('Field' + dateField)
        if (dateField !== '') {
            let dateObject = new Date(dateField)
            console.log(dateObject)
            const slots = fetchAPI(dateObject)
            console.log(slots)
            setTimeSlots(slots)
            setTimeFieldLocked(false)
        }
    }, [dateField])

    useEffect(() => {
        const resetFormFunc = () => {
            setReserved("Successfully Reserved!")
            setReservedLocked(true)
            setTimeSlots(['Select date',])
            setTimeFieldLocked(true)
            setDateField('')
            formik.resetForm();
        }
        if (response) {
            if (response.type === "success") {
                resetFormFunc()            
            } else {
                setReserved("Try again!")
            }
        }
    }, [response]);

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
                            <VStack spacing={8} width={"100%"}>
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
                                <FormControl isInvalid={formik.touched.numberGuests && formik.errors.numberGuests}>
                                    <FormLabel htmlFor="numberGuests">Number of People</FormLabel>
                                    <Input
                                        id="numberGuests"
                                        name="numberGuests"
                                        type="number"
                                        {...formik.getFieldProps("numberGuests")}
                                    />
                                    <FormErrorMessage>{formik.errors.numberGuests}</FormErrorMessage>
                                </FormControl>
                                <HStack width={"100%"}>

                                    <FormControl isInvalid={formik.touched.dateTime && formik.errors.dateTime}>
                                        <FormLabel htmlFor="dateTime">Date</FormLabel>
                                        <Input
                                            id="dateTime"
                                            name="dateTime"
                                            type="date"
                                            {...formik.getFieldProps("dateTime")}
                                            value={dateField}
                                            onChange={handleDateFieldChange}
                                        />
                                        <FormErrorMessage>{formik.errors.dateTime}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={formik.touched.reserveTime && formik.errors.reserveTime}>
                                        <FormLabel htmlFor="reserveTime">Time</FormLabel>
                                        <Select
                                            id="reserveTime"
                                            name="reserveTime"
                                            disabled={timeFieldLocked}
                                            {...formik.getFieldProps("reserveTime")}
                                        >
                                            {timeSlots.map((timeSlot) => <option key={timeSlot} value={timeSlot}>{timeSlot}</option>)}
                                        </Select>
                                        <FormErrorMessage>{formik.errors.reserveTime}</FormErrorMessage>
                                    </FormControl>
                                </HStack>
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
                                    isLoading={isLoading}
                                    isDisabled={reservedLocked}
                                >
                                    {reserved}
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