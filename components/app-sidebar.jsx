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
  List
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
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
        title: "Listing Items",
        url: "#",
        icon: List,
        isActive: true,
        items: [
          {
            title: "Campaign List",
            url: "/campaigns",
          },
          {
            title: "Investor List",
            url: "/investors",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        title: "Site info",
        url: "#",
        icon: SquareTerminal,
        items: [
          {
            title: "General",
            url: "#",
          },
        ],
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
          className="flex gap-2 bg-sidebar-accent text-sidebar-accent-foreground px-2 py-1">
          <div
            className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GaugeCircle className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              EFI Dashboard
            </span>
            <span className="truncate text-xs">Admin</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {menuGroup.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
