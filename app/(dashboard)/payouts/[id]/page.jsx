"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import http from "@/lib/http"
import { TableLoader } from "@/components/layouts/TableLoader"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useParams } from "next/navigation"
import { Button, buttonVariants } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default function InvestorsDetailPage() {
    const { toast } = useToast()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [pageData, setPageData] = useState(null)

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const { data: { status, data, message } } = await http.get(`payouts/${id}`)

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
    }, []);

    const payoutTitles = [
      "1st Payout",
      "2nd Payout",
      "3rd Payout",
      "4th Payout",
    ];

    if (isLoading) {
        return (
            <div className="container mx-auto py-10">
                <TableLoader rows={12} columns={2} />
            </div>
        )
    }

     if (!pageData) {
       return (
         <div className="container mx-auto py-20 flex justify-center items-center">
          <Table>
           <TableRow>
             <TableCell colSpan={2} className="h-24 text-center">
               No data found!             
              </TableCell>
           </TableRow>
          </Table>
         </div>
       );
     }

    return (
      <div className="w-full">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl text-slate-800 font-semibold mb-6">
            Payout Details
          </h1>
        </div>

        <div className="w-full grid grid-cols-7 gap-x-20">
          {/* Payout details */}
          <div className="col-span-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Item</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>Deal ID</TableCell>
                  <TableCell>{pageData?.deal_id}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Investor Name</TableCell>
                  <TableCell>{pageData?.investor_name ?? "—"}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell>{pageData?.project_name ?? "—"}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Reinvestment</TableCell>
                  <TableCell>{pageData?.reinvestment_status}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Transaction Date</TableCell>
                  <TableCell>{pageData?.transaction_date ?? "—"}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Invested Amount (SGD)</TableCell>
                  <TableCell>{pageData?.invested_amount_sgd}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Invested Amount (IDR)</TableCell>
                  <TableCell>{pageData?.invested_amount_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>ROI Percentage</TableCell>
                  <TableCell>{pageData?.roi_percentage}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Profit Margin (IDR)</TableCell>
                  <TableCell>{pageData?.profit_margin_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Estimated Tax (IDR)</TableCell>
                  <TableCell>{pageData?.estimated_tax_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Profit After Tax (IDR)</TableCell>
                  <TableCell>{pageData?.profit_margin_after_tax_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Agency Fee (%)</TableCell>
                  <TableCell>{pageData?.agency_fee_percentage}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Agency Fee (IDR)</TableCell>
                  <TableCell>{pageData?.agency_fee_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Estimated Payout Before Tax (IDR)</TableCell>
                  <TableCell>
                    {pageData?.estimated_payout_before_tax_idr}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Estimated Payout After Tax (IDR)</TableCell>
                  <TableCell>
                    {pageData?.estimated_payout_after_tax_idr}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    Estimated Payout After Tax & Agency Fee (IDR)
                  </TableCell>
                  <TableCell>
                    {pageData?.estimated_payout_after_tax_and_agency_fee_idr}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Remaining Capital (IDR)</TableCell>
                  <TableCell>{pageData?.remaining_capital_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Remaining Profit After Tax (IDR)</TableCell>
                  <TableCell>
                    {pageData?.remaining_profit_after_tax_idr}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Total Return After Tax (IDR)</TableCell>
                  <TableCell>{pageData?.total_return_after_tax_idr}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Actual ROI After Tax (%)</TableCell>
                  <TableCell>
                    {pageData?.actual_roi_after_tax_percentage}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Payout transactions */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium mb-4">Transactions</h2>
              <div>
                <Link
                  href={`/payouts/${id}/add`}
                  className={buttonVariants({
                    variant: "default",
                    className: "flex items-center gap-x-1",
                  })}
                >
                  <PlusIcon className="w-4 h-4" /> Add
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              {pageData?.transactions?.length > 0 ? (
                pageData?.transactions?.map((transaction, i) => (
                  <div className="flex flex-col gap-y-2">
                    <h4 className="font-semibold text-slate-500">
                      {payoutTitles[i]}
                    </h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Value</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        <TableRow key={transaction.id}>
                          <TableCell>Capital</TableCell>
                          <TableCell>{transaction.capital}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Tax</TableCell>
                          <TableCell>{transaction.tax}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Partial</TableCell>
                          <TableCell>{transaction.partial}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Profit</TableCell>
                          <TableCell>{transaction.profit}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Available Amount After Tax</TableCell>
                          <TableCell>
                            {transaction.available_amount_after_tax}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Payout Actual</TableCell>
                          <TableCell>
                            {transaction.payout_actual} {transaction.currency}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Payout Actual (Transfer)</TableCell>
                          <TableCell>
                            {transaction.payout_actual_transfer}{" "}
                            {transaction.transfer_currency}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Exchange Rate</TableCell>
                          <TableCell>{transaction.exchange_rate}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Payout Status</TableCell>
                          <TableCell className="capitalize">
                            {transaction.payout_status}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Purpose</TableCell>
                          <TableCell>{transaction.purpose}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Payout Date</TableCell>
                          <TableCell>
                            {transaction.payout_date ?? "—"}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Platform</TableCell>
                          <TableCell>{transaction.platform}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Investment Status</TableCell>
                          <TableCell className="capitalize">
                            {transaction.investment_status}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}