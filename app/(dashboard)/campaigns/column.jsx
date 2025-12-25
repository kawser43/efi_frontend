"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

export const columns = [
  {
    accessorKey: "project_name",
    header: "Campaign Name",
  },
  {
    accessorKey: "number_of_transactions",
    header: "Number of Transactions",
    cell: ({ row }) => (
      <p className="text-center">{row.original.number_of_transactions}</p>
    ),
  },
  {
    accessorKey: "crowdfunded_amount",
    header: () => <p className="text-right">Crowdfunded</p>,
    cell: ({ row }) => (
      <p className="text-right">{row.original.crowdfunded_amount}</p>
    ),
  },
  {
    accessorKey: "withdrawn_amount",
    header: () => <p className="text-right">Withdrawn</p>,
    cell: ({ row }) => (
      <p className="text-right">{row.original.withdrawn_amount}</p>
    ),
  },
  {
    accessorKey: "available_amount",
    header: () => <p className="text-right">Available</p>,
    cell: ({ row }) => (
      <p className="text-right">{row.original.available_amount}</p>
    ),
  },
  {
    accessorKey: "payout_process",
    header: "Payout Process",
    cell: ({ row }) => (
      <p className="text-center">{row.original.payout_process}</p>
    ),
  },
];