import axios from 'axios';
import { links_general } from '../constants';

export const loadIpv6 = async () => {
  const { data } = await axios.get(links_general.ipv6);
  return data;
};
