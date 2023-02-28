import {
    Flex,
    Text,
    Button,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function MainContentMobile() {
    const defaultAlign = {
        base: "center",
        sm: "center",
        md: "center",
        lg: "start",
        xlg: "start",
    };

    const controls = useAnimation();
    const controlsImage = useAnimation();
    const controlsImage1 = useAnimation();
    useEffect(() => {
        controls.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
        controlsImage.start({
            y: [0, 10, 0, -10, 0],
            x: [0, -10, 0, -10, 0],
            transition: {
                duration: 8,
                ease: "easeOut",
                times: [0, 0.3],
                repeat: Infinity,
                repeatDelay: 1,
            },
        });
        controlsImage1.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
    });
    return (
        <Flex>
            <Flex w={"100%"} direction={"column"} align={"center"}>
                <Flex
                    as={motion.div}
                    animate={controlsImage1}
                    initial={{ y: 150, opacity: 0 }}
                >
                    <Flex as={motion.div} animate={controlsImage}>
                        <Image
                            w={{ base: "300px", sm: "500px", md: "600px" }}
                            h={{ base: "300px", sm: "500px", md: "600px" }}
                            alt={"Website-Creator image"}
                            src="Website-Creator.png"
                        />
                    </Flex>
                </Flex>

                <Flex
                    // h={"150px"}
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                    my={"15px"}
                >
                    <TypeAnimation
                        sequence={[
                            "Soluções criativas para seus problemas web!",
                            2000,
                            () => {},
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        speed={30}
                        style={{
                            fontSize: "25px",
                            width: "350px",
                            fontFamily: "Poppins",
                            color: "#657EFF",
                            fontWeight: "700",
                            textAlign: "center",
                        }}
                    />
                </Flex>

                <Flex
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                    align={"center"}
                >
                    <Text
                        w={"90%"}
                        textStyle={"Regular"}
                        fontSize={"16px"}
                        textColor={"gray"}
                        mb={"20px"}
                        textAlign={{
                            base: "center",
                            sm: "center",
                            md: "center",
                            lg: "start",
                            xlg: "start",
                        }}
                    >
                        Soluções pra você ou para o seu negócio utilizando as
                        mais novas tecnologias de programação disponíveis no
                        mercado.
                    </Text>
                    <Button
                        borderRadius={"20px"}
                        bg={"blue"}
                        textColor={"white"}
                        w={"95%"}
                        h={"62px"}
                        fontSize={"25px"}
                        mb={"20px"}
                    >
                        Quero vender mais!
                    </Button>
                    <Button
                        borderRadius={"20px"}
                        border={"2px solid #657EFF"}
                        textColor={"blue"}
                        w={"95%"}
                        h={"62px"}
                        fontSize={"20px"}
                    >
                        Quero falar pelo WhatsApp
                    </Button>
                </Flex>
            </Flex>
            {/* <Flex
                as={motion.div}
                animate={controlsImage1}
                initial={{ y: 150, opacity: 0 }}
            >
                <Flex
                    mt={"50px"}
                    as={motion.div}
                    animate={controlsImage}
                    display={{
                        base: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                        xlg: "flex",
                    }}
                >
                    <Image
                        w={"600px"}
                        h={"600px"}
                        alt={"Website-Creator image"}
                        src="Website-Creator.png"
                    />
                </Flex>
            </Flex> */}
        </Flex>
    );
}
