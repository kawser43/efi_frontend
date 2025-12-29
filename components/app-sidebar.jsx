import * as React from "react"
import {
  AudioWaveform,
  BookDashed,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  GaugeCircle,
  Map,
  PieChart,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  User,
  ListCheck,
  List,
  Cog
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import useAuthStore from "@/lib/auth-store"
import { Avatar } from "@radix-ui/react-avatar"
import Link from "next/link"
// This is sample data.

const menuGroup = [
  {
    label: "Reports",
    items: [
      {
        title: "Campaign List",
        url: "/campaigns",
        icon: PieChart,
      },
      {
        title: "Investor List",
        url: "/investors",
        icon: List,
      },
      {
        title: "Transactions",
        url: "/transactions",
        icon: List,
      },
      {
        title: "Deals",
        url: "/deals",
        icon: List,
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        title: "General",
        url: "#",
        icon: Cog,
      },
    ],
  },
];

export function AppSidebar({
  ...props
}) {
  const user = useAuthStore(state => state.user)
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          href="/"
          className="flex gap-2 bg-sidebar-accent text-sidebar-accent-foreground px-2 py-1"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GaugeCircle className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">EFI Dashboard</span>
            <span className="truncate text-xs">Admin</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        {menuGroup.map((group) => (
          <div key={group.label} className="mb-4">
            {/* Group label */}
            <p className="px-2 mb-2 text-xs font-semibold uppercase text-slate-400">
              {group.label}
            </p>

            {/* Menu items */}
            <div className="space-y-1 pl-4">
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-sidebar-accent"
                >
                  <item.icon className="size-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
