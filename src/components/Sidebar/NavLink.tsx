import React, { ElementType, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
  children?: ReactNode;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath === href ? true : false;

  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest} minH="2.2rem">
        <Icon
          as={icon}
          p="0.5rem"
          w="2.2rem"
          h="2.2rem"
          borderRadius="50%"
          color={isActive ? "primary.500" : "white"}
          bg={isActive ? "gray.800" : "transparent"}
        />
        <Text ml="1rem">{children}</Text>
      </ChakraLink>
    </Link>
  );
}
