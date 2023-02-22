import { Flex, Image, Text } from "@chakra-ui/react";

type BlockMainContentType = {
    title: string;
    text: string;
    image: string;
};

export default function BlockMainContent({
    image,
    text,
    title,
}: BlockMainContentType) {
    return (
        <Flex
            direction={"column"}
            w={"500px"}
            h={"400px"}
            align={"center"}
            justify={"center"}
            bg={"white"}
            paddingX={"70px"}
            gap={"20px"}
            borderRadius={"20px"}
            boxShadow={"-14px 14px 14px 3px #0000000F"}
        >
            <Image src={image} w={"80px"} h={"80px"} />
            <Text textColor={"black"} textStyle={"Bold"} fontSize={"30px"}>
                {title}
            </Text>
            <Text
                textColor={"gray"}
                textStyle={"Regular"}
                fontSize={"20px"}
                textAlign={"center"}
            >
                {text}
            </Text>
        </Flex>
    );
}
