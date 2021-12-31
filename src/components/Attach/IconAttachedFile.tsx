import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaSignature } from "react-icons/fa";
import { useQuery } from "react-query";
import { api } from "../../services/api";

type IconAttachedFileProps = {
  fia: string;
};

export function IconAttachedFile({ fia }: IconAttachedFileProps) {
  const { isLoading, data } = useQuery(
    `${fia}-hasScan`,
    async () => {
      const { data } = await api.get(`sigh/archive/${fia}`);
      return data.fileExists;
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return (
    <IconButton
      fia={fia}
      aria-label="Enviar arquivo"
      icon={<FaSignature />}
      colorScheme="black"
      fontSize="1.2rem"
      isRound
      disabled={!data}
      isLoading={isLoading}
    />
  );
}
