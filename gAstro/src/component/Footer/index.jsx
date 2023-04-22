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
} from "@chakra-ui/react";
import { ReactNode } from "react";
import "./Footer.css";
import astroLogo from "../../assets/footericon.svg";

export default function LargeWithNewsletter() {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
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
            <Stack direction={"row"} spacing={6}></Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Company</Heading>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Support</Heading>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
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
