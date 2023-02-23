import { Text, Image } from "@chakra-ui/react";

export default function IconHeader() {
    return (
        <>
            <Text textStyle={"Bold"} fontSize={"50px"} color={"#657EFF"}>
                2
            </Text>
            <Image
                w={"40px"}
                h={"40px"}
                src="/Icons/201Icon.svg"
                alignSelf={"center"}
                mx={"-4px"}
                alt={"201Icon"}
            />
            <Text textStyle={"Bold"} fontSize={"50px"} color={"#657EFF"}>
                1web
            </Text>
        </>
    );
}
