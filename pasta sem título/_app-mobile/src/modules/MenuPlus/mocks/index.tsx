import React from "react";

import Purchase from "@shared/assets/svg/plus/purchase.svg";
import Settings from "@shared/assets/svg/plus/settings.svg";
import Password from "@shared/assets/svg/plus/lock_.svg";
import Ligth from "@shared/assets/svg/plus/mon.svg";
import Out from "@shared/assets/svg/plus/out.svg";
import Bell from "@shared/assets/svg/plus/bell.svg";

export const _items_menu = [
  {
    id: 0,
    title: "Compras",
    icon: <Purchase />,
    routes: "",
  },
  {
    id: 1,
    title: "Configurações",
    icon: <Settings />,
    routes: "",
  },
  {
    id: 2,
    title: "Notificações",
    icon: <Bell />,
    routes: "",
  },
  {
    id: 3,
    title: "Senha de acesso",
    icon: <Password />,
    routes: "",
  },
  {
    id: 4,
    title: "Claro/Escuro",
    icon: <Ligth />,
    routes: "",
  },
  {
    id: 5,
    title: "Sair",
    icon: <Out />,
    routes: "",
  },
];
