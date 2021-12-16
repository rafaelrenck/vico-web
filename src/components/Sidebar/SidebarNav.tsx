import { Stack, Box } from "@chakra-ui/react";
import { RiHome2Line, RiPhoneLine } from "react-icons/ri";
import { BiBone, BiVial, BiBox } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

const AnimatiIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 32 32" height="1.2rem" width="2.2rem"><path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M7.181 30.809c-1.367 0-2.735.008-4.103-.002-2.647-.021-3.541-1.438-2.366-3.762C4.113 20.326 7.518 13.611 10.92 6.893c.449-.889.877-1.789 1.33-2.676.231-.453.36-1.011 1.038-1.035.714-.023 1.013.473 1.272.997 1.605 3.222 3.071 6.524 4.846 9.648 1.126 1.978.996 3.571-.096 5.487-1.836 3.225-3.444 6.578-5.097 9.902-.559 1.126-1.36 1.603-2.615 1.603-1.47 0-2.944-.01-4.417-.01z"/><path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M31.84 12.173c.047 6.134-4.943 11.23-10.836 11.142-1.27-.02-1.484-.376-.883-1.457.683-1.232 1.254-2.529 1.931-3.768.666-1.221.581-2.349-.054-3.576-1.874-3.631-3.645-7.314-5.53-10.939-.573-1.101-.316-1.509.811-1.878C24.457-.666 31.781 4.581 31.84 12.173z"/></svg>
);

const FontanaIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 32 32" height="1.2rem" width="2.2rem"><path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M14.678 0h.096c.699.164 1.4.129 2.099 0h.19c.058.11.163.073.252.079 1.759.127 3.442.559 5.056 1.262 1.013.442 1.979.965 2.971 1.712h-1.298c-1.367 0-2.734.004-4.102-.002-.327-.001-.518.156-.563.46-.045.295.111.532.399.548.63.035.679.423.678.917-.009 2.957-.011 5.914.001 8.871a3.151 3.151 0 0 1-.557 1.83c-2.391 3.578-4.765 7.166-7.144 10.751-.429.646-.391 1.117.174 1.644.577.537 1.259.841 2.065.84 3.259-.003 6.518-.001 9.776-.001h.477c-.03.072-.035.104-.053.12-.047.042-.098.08-.15.115-4.447 2.945-9.243 3.657-14.271 1.917-7.471-2.584-11.74-9.9-10.512-17.735C1.257 6.975 6.365 1.633 12.652.375c.674-.134 1.351-.25 2.026-.375zM31.949 17.747c-.227.41-.18.879-.278 1.317a22.532 22.532 0 0 1-.528 1.995c-.17.022-.188-.098-.234-.167-1.205-1.81-2.408-3.621-3.612-5.433-.251-.378-.405-.786-.405-1.247.002-3.179.001-6.357.002-9.536 0-.075.009-.15.018-.293.52.403.91.851 1.29 1.305 2.05 2.45 3.274 5.26 3.652 8.436.009.076-.007.162.097.188-.002 1.146-.002 2.291-.002 3.435z"/></svg>
);

export function SidebarNav() {
  return (
    <Stack spacing="3rem" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiHome2Line} href="/">Página inicial</NavLink>
        <NavLink icon={RiPhoneLine} href="/extensions">Ramais</NavLink>
        <NavLink icon={AnimatiIcon} href="https://pacs.hsvosorio.com.br/">Animati PACS</NavLink>
        <NavLink icon={FontanaIcon} href="http://laudos.fontanalaboratorioclinico.com.br/webscola/">Laboratório Fontana</NavLink>
        <NavLink icon={BiBox} href="/repository">Repositório de Documentos</NavLink>
      </NavSection>
      <NavSection title="Faturamento">
        <NavLink icon={AiOutlinePaperClip} href="/billing">Anexar Documentos</NavLink>
      </NavSection>
    </Stack>
  );
}
