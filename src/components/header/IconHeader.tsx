import { Text, Image, useBreakpointValue } from "@chakra-ui/react";

export default function IconHeader() {
    const versionMob = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xlg: false,
    });
    return (
        <>
            <Text
                textStyle={"Bold"}
                fontSize={versionMob ? "38px" : "50px"}
                color={"#657EFF"}
            >
                2
            </Text>
            <Image
                w={versionMob ? "30px" : "40px"}
                h={versionMob ? "30px" : "40px"}
                src="/Icons/201Icon.svg"
                alignSelf={"center"}
                mx={"-4px"}
                alt={"201Icon"}
            />
            <Text
                textStyle={"Bold"}
                fontSize={versionMob ? "38px" : "50px"}
                color={"#657EFF"}
            >
                1web
            </Text>
        </>
    );
}
