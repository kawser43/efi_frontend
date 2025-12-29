"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export const columns = [
  {
    accessorKey: "name",
    header: "Investor Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact_owner",
    header: "Contact Owner",
  },
  {
    accessorKey: "become_investor_at",
    header: "Become Investor",
  },
  {
    accessorKey: "last_engaged_at",
    header: "Last Engaged",
  },

  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "is_unworked",
    header: "Is Unworked",
    cell: ({ row }) => (
      <p className="text-center">{row.original.is_unworked}</p>
    ),
  },
  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href={`/investors/${row.original.id}`}>View</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];