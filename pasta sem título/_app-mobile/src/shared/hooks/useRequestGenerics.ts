import { links_general } from "@shared/constants";
import axios from "axios";

export const loadIpv6 = async () => {
  const { data } = await axios.get(links_general.ipv6);
  return data;
};
