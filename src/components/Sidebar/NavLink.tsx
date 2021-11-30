import { ElementType } from "react";
import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children?: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="1.2rem" />
      <Text ml="1rem">{children}</Text>
    </Link>
  );
}
