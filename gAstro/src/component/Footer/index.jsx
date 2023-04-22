import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Textarea,
  Button,
  ButtonGroup,
  GridItem,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import "./Footer.css";
import astroLogo from "../../assets/footericon.svg";
import paytm from "../../assets/paytm.svg";
import razorpay from "../../assets/razorpay.svg";

import strip from "../../assets/strip.svg";

export default function Footer() {
  return (
    <Box maxW={"100%"} mx={"auto"}>
      <Container as={Stack}>
        <SimpleGrid
          templateColumns={{ sm: "6fr  ", md: "1fr 0.6fr 0.6fr 1fr" }}
          spacing={6}
        >
          <Stack spacing={6}>
            <Box>
              <img src={astroLogo} alt="astro logo" />
            </Box>
            <Text fontSize={"sm"}>
              About Guruji s2 to 3 lines what guruji do and how it works About
              Guruji s2 to 3 lines what guruji do and how it works
            </Text>
            <Box
              maxW={"282px"}
              border={"1px solid black"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              columnGap={{ base: "5px", sm: "10px", md: "22px" }}
            >
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>{" "}
                </li>
              </ul>
            </Box>

            <Box>
              <h3>Trusted & Seals</h3>
              <Box>
                <a href="#">
                  <img src="" alt="" />
                </a>
                <a href="#">
                  <img src={razorpay} alt="" />
                </a>
                <img src={paytm} alt="" />
              </Box>
              <div>
                <a href="#">
                  <img src={strip} alt="" />
                </a>
              </div>
            </Box>
          </Stack>
          <SimpleGrid
            direction={"row"}
            templateColumns={{ sm: "1fr 1fr" }}
            spacing={6}
          >
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading>Company</Heading>
              <Link href={"#"}>Home </Link>

              <Link href={"#"}> Privacy Policy</Link>
              <Link href={"#"}>T &C</Link>
              <Link href={"#"}> Varied Payment</Link>
            </GridItem>
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading>Support</Heading>
              <Link href={"#"}>Home </Link>

              <Link href={"#"}> Privacy Policy</Link>
              <Link href={"#"}>T &C</Link>
              <Link href={"#"}> Varied Payment</Link>
            </GridItem>

            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading>Collaborate</Heading>
              <Link href={"#"}>Clever Tap</Link>
              <Link href={"#"}>Exotel</Link>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}> Quora</Link>
              <Link href={"#"}>Google</Link>
              <Link href={"#"}>Youtube</Link>
            </GridItem>
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading>Important Link</Heading>
              <Link href={"#"}> Tarot Reader</Link>
              <Link href={"#"}>Vedic Astrology </Link>
              <Link href={"#"}>Palmistry </Link>
              <Link href={"#"}> Gemology</Link>
              <Link href={"#"}>Vastu</Link>
              <Link href={"#"}>Numerology</Link>
            </GridItem>
          </SimpleGrid>
          <Stack display={"flex"} flexDirection={"column"} align={"flex-start"}>
            <Heading fontWeight="light">Stay up to date</Heading>
            <Stack direction={"column"}>
              <Input
                placeholder={"Your  Name"}
                type="name"
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <Input
                placeholder={"Mail ID"}
                type="email"
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />

              <Textarea
                border={"1px solid black"}
                minHeight="80px"
                placeholder={"Write Query"}
              />
              <Button colorScheme="teal" variant="solid" size="lg">
                Button
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
