"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export const columns = [
  {
    accessorKey: "deal_record_id",
    header: "Record ID",
  },
  {
    accessorKey: "deal_name",
    header: "Deal Name",
  },
  {
    accessorKey: "amount_sgd",
    header: "Amount",
    cell: ({ row }) => (
      <div>
        <p>Amount (SGD): {row.original.amount_sgd}</p>
        <p>Amount (IDR): {row.original.amount_idr}</p>
        <p>Profit (IDR): {row.original.profit_idr}</p>
      </div>
    ),
  },
  {
    header: "Weighted Amount",
    cell: ({ row }) => (
      <div>
        <p>Weighted Amount: {row.original.weighted_amount}</p>
        <p>Company Currency: {row.original.weighted_amount_company_currency}</p>
      </div>
    ),
  },
  {
    accessorKey: "investor_name_at_transaction",
    header: "Investor Name",
  },
  {
    accessorKey: "associated_contact",
    header: "Associated Contact",
  },

  {
    accessorKey: "deal_created_at",
    header: "Deal Date",
    cell: ({ row }) => (
      <div>
        <p>Deal Created: {row.original.deal_created_at}</p>
        <p>Deal Close: {row.original.deal_close_at}</p>
      </div>
    ),
  },
];