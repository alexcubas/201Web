import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ButtonContact from "./ButtonContact";
import IconHeader from "./IconHeader";
import NavBar from "./NavBar";

export default function HeaderComponent() {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xlg: false,
    });
    const controls = useAnimation();
    useEffect(() => {
        controls.start({
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
    });
    return (
        <Flex
            h={"100px"}
            w={"100%"}
            align={"center"}
            justify={"space-between"}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={controls}
        >
            <Flex>
                <IconHeader />
            </Flex>
            <Flex
                gap={"40px"}
                fontSize={"20px"}
                color="gray"
                textStyle={"Bold"}
                display={isWideVersion ? "none" : "flex"}
            >
                <NavBar />
            </Flex>
            <Flex display={isWideVersion ? "none" : "flex"}>
                <ButtonContact />
            </Flex>
        </Flex>
    );
}
