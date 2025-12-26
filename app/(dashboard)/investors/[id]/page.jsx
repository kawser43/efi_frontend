"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import http from "@/lib/http"
import { TableLoader } from "@/components/layouts/TableLoader"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useParams } from "next/navigation"

export default function InvestorsDetailPage() {
    const { toast } = useToast()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [pageData, setPageData] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [pageSize, setPageSize] = useState(20) // Default value, will be updated from API

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const { data: { status, data, message } } = await http.get(`investors/${id}`)

                if (status) {
                    setPageData(data)
                } else {
                    toast({
                        title: message,
                        variant: "destructive"
                    })
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || error.message
                toast({
                    title: errMsg,
                    variant: "destructive"
                })
            } finally {
                setIsLoading(false)
            }
        }

        fetchPageData()
    }, [])

    if (isLoading) {
        return (
            <div className="container mx-auto py-10">
                <TableLoader rows={12} columns={2} />
            </div>
        )
    }

    return (
      <div className="w-full">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl text-slate-800 font-semibold mb-6">
            Investor Details
          </h1>
        </div>

        <div className="w-full md:w-1/2">
          <Table>
            <TableBody>
              {pageData ? pageData?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium whitespace-nowrap">{item.key}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
}