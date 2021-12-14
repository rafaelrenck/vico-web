import { Stack } from "@chakra-ui/react";
import { RiHome2Line, RiPhoneLine } from "react-icons/ri";
import { BiBone, BiVial, BiBox } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'


export function SidebarNav() {
  return (
    <Stack spacing="3rem" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiHome2Line} href="/">Página inicial</NavLink>
        <NavLink icon={RiPhoneLine} href="/extensions">Ramais e telefones úteis</NavLink>
        <NavLink icon={BiBone} href="https://pacs.hsvosorio.com.br/">Animati Pacs</NavLink>
        <NavLink icon={BiVial} href="http://laudos.fontanalaboratorioclinico.com.br/webscola/">Laboratório Fontana</NavLink>
        <NavLink icon={BiBox} href="/repository">Repositório de Documentos</NavLink>
      </NavSection>
      <NavSection title="Faturamento">
        <NavLink icon={AiOutlinePaperClip} href="/billing">Anexar Documentos</NavLink>
      </NavSection>
    </Stack>
  );
}
