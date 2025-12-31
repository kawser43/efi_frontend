"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export const columns = [
  {
    accessorKey: "campaign_name",
    header: "Campaign Name",
  },
  {
    accessorKey: "investor_name",
    header: "Investor Name",
  },
  {
    accessorKey: "investor_email",
    header: "Investor Email",
  },
  {
    accessorKey: "reinvestment_status",
    header: "Reinvestment Status",
    cell: ({ row }) => (
      <p className="text-center">{row.original.reinvestment_status}</p>
    ),
  },
  {
    accessorKey: "transaction_date",
    header: "Transaction Date",
    cell: ({ row }) => (
      <p className="text-center">{row.original.transaction_date}</p>
    ),
  },
  {
    accessorKey: "invested_amount_idr",
    header: "Invested Amount (IDR)",
    cell: ({ row }) => (
      <p className="text-right">{row.original.invested_amount_idr}</p>
    ),
  },
  {
    accessorKey: "roi_percentage",
    header: "ROI",
    cell: ({ row }) => (
      <p className="text-center">{row.original.roi_percentage}%</p>
    ),
  },

  {
    accessorKey: "profit_margin_idr",
    header: "Profit Margin (IDR)",
    cell: ({ row }) => (
      <p className="text-right">{row.original.profit_margin_idr}</p>
    ),
  },

  {
    accessorKey: "total_return_after_tax_idr",
    header: "Total Return After Tax (IDR)",
    cell: ({ row }) => (
      <p className="text-right">{row.original.total_return_after_tax_idr}</p>
    ),
  },
  {
    accessorKey: "remaining_capital_idr",
    header: "Remaining Capital (IDR)",
    cell: ({ row }) => (
      <p className="text-right">{row.original.remaining_capital_idr}</p>
    ),
  },

  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/payouts/${row.original.id}`}>View</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];