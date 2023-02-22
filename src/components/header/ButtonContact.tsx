import { Button } from "@chakra-ui/react";

export default function ButtonContact() {
    return (
        <>
            <Button
                bg={"blue"}
                borderRadius={"20px"}
                boxShadow={"0px 0px 21px 8px #0000001F"}
                textColor={"white"}
                fontSize={"25px"}
                textStyle={"Bold"}
                w={"270px"}
                h={"62px"}
                _hover={{ boxShadow: "0px 0px 23px 9px #0000002F" }}
            >
                Fale com a gente!
            </Button>
        </>
    );
}
