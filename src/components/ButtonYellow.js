import {Button} from "@chakra-ui/react";

const ButtonYellow = (props) => {
    return (
        <Button 
        onClick={event =>  window.location.href=`/${props.urlEndpoint}`} 
        rounded={"md"} 
        bgColor={"#F4CE14"} 
        >
            {props.buttonText}
        </Button>
    );
};

export default ButtonYellow;