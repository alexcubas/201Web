import { Flex, Image, Text } from "@chakra-ui/react";

type AboutBoxType = {
    image: string;
    text: string;
    name: string;
    about: string;
};

export default function AboutBoxMob({
    image,
    text,
    about,
    name,
}: AboutBoxType) {
    return (
        <Flex
            position={"relative"}
            h={"280px"}
            w={"90%"}
            bg={"white"}
            borderRadius={"20px"}
            shadow={"-14px 14px 14px 3px #0000000F"}
            align={"center"}
            justify={"center"}
            gap={"10px"}
            direction={"column"}
        >
            <Flex
                w={"105px"}
                h={"105px"}
                border={"1px solid #bcc7ff"}
                borderRadius={"50%"}
                display={"grid"}
                placeItems={"center"}
                // margin={"0 auto .5rem"}
            >
                <Image
                    w={"96px"}
                    borderRadius={"50%"}
                    src={image}
                    alt={image}
                    // w={"140px"}
                    h={"96px"}
                    objectPosition={
                        image === "/Images/aboutImages/muriloPhoto.png"
                            ? "0px -10px"
                            : "0px 0px"
                    }
                    objectFit={"cover"}
                />
            </Flex>
            <Flex direction={"column"} textAlign={"center"}>
                <Text textStyle={"Bold"} fontSize={"20px"}>
                    {name}
                </Text>
                <Text textStyle={"Regular"} fontSize={"12px"}>
                    {about}
                </Text>
            </Flex>
            <Flex
                textColor={"gray"}
                direction={"column"}
                align={"center"}
                // w={"150px"}
                px={"10px"}
                gap={"15px"}
            >
                <Text
                    textStyle={"Light"}
                    textAlign={"center"}
                    fontSize={"15px"}
                    fontStyle={"italic"}
                    textColor={"#151932"}
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    );
}
