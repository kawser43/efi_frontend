"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CURRENCIES = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];

export default function PayoutFormMain({ register, control, errors, setValue }) {

    
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Capital */}
        <div>
          <label htmlFor="capital" className="block text-sm font-medium mb-2">
            Remaining Capital Amount
          </label>
          <Input
            id="capital"
            type="text"
            placeholder="Enter capital amount"
            {...register("capital")}
          />
          {errors.capital && (
            <p className="text-sm text-red-500 mt-1">
              {errors.capital.message}
            </p>
          )}
        </div>

        {/* Tax */}
        <div>
          <label htmlFor="tax" className="block text-sm font-medium mb-2">
            Tax
          </label>
          <Input
            id="tax"
            type="text"
            placeholder="Enter tax amount"
            {...register("tax")}
          />
          {errors.tax && (
            <p className="text-sm text-red-500 mt-1">{errors.tax.message}</p>
          )}
        </div>

        {/* Partial */}
        <div>
          <label htmlFor="partial" className="block text-sm font-medium mb-2">
            Partial Amount
          </label>
          <Input
            id="partial"
            type="text"
            placeholder="Enter partial amount"
            {...register("partial")}
          />
          {errors.partial && (
            <p className="text-sm text-red-500 mt-1">
              {errors.partial.message}
            </p>
          )}
        </div>

        {/* Profit */}
        <div>
          <label htmlFor="profit" className="block text-sm font-medium mb-2">
            Profit
          </label>
          <Input
            id="profit"
            type="text"
            placeholder="Enter profit amount"
            {...register("profit")}
          />
          {errors.profit && (
            <p className="text-sm text-red-500 mt-1">{errors.profit.message}</p>
          )}
        </div>

        {/* Available Amount After Tax */}
        <div>
          <label
            htmlFor="available_amount_after_tax"
            className="block text-sm font-medium mb-2"
          >
            Available Amount After Tax
          </label>
          <Input
            id="available_amount_after_tax"
            type="text"
            placeholder="Enter available amount after tax"
            {...register("available_amount_after_tax")}
          />
          {errors.available_amount_after_tax && (
            <p className="text-sm text-red-500 mt-1">
              {errors.available_amount_after_tax.message}
            </p>
          )}
        </div>

        {/* Payout Actual */}
        <div>
          <label
            htmlFor="payout_actual"
            className="block text-sm font-medium mb-2"
          >
            Payout Actual
          </label>
          <Input
            id="payout_actual"
            type="text"
            placeholder="Enter payout actual amount"
            {...register("payout_actual")}
          />
          {errors.payout_actual && (
            <p className="text-sm text-red-500 mt-1">
              {errors.payout_actual.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="payout_actual_transfer"
            className="block text-sm font-medium mb-2"
          >
            Payout Actual Transfer
          </label>
          <Input
            id="payout_actual_transfer"
            type="text"
            placeholder="Type transfer amount"
            {...register("payout_actual_transfer")}
          />
          {errors.payout_actual_transfer && (
            <p className="text-sm text-red-500 mt-1">
              {errors.payout_actual_transfer.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="transfer_currency"
            className="block text-sm font-medium mb-2"
          >
            Transfer Currency
          </label>
          <Controller
            name="transfer_currency"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select transfer currency" />
                </SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.transfer_currency && (
            <p className="text-sm text-red-500 mt-1">
              {errors.transfer_currency.message}
            </p>
          )}
        </div>

        {/* Exchange Rate */}
        <div>
          <label
            htmlFor="exchange_rate"
            className="block text-sm font-medium mb-2"
          >
            Exchange Rate
          </label>
          <Input
            id="exchange_rate"
            type="text"
            placeholder="Enter exchange rate"
            {...register("exchange_rate")}
          />
          {errors.exchange_rate && (
            <p className="text-sm text-red-500 mt-1">
              {errors.exchange_rate.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="payout_status"
            className="block text-sm font-medium mb-2"
          >
            Payout Status
          </label>
          <Controller
            name="payout_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payout status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                  <SelectItem value="Hold">Hold</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.payout_status && (
            <p className="text-sm text-red-500 mt-1">
              {errors.payout_status.message}
            </p>
          )}
        </div>

        {/* Purpose */}
        <div className="lg:col-span-2">
          <label htmlFor="purpose" className="block text-sm font-medium mb-2">
            Purpose
          </label>
          <Input id="purpose" type="text" {...register("purpose")} />
          {errors.purpose && (
            <p className="text-sm text-red-500 mt-1">
              {errors.purpose.message}
            </p>
          )}
        </div>

        {/* Payout Date */}
        <div>
          <label
            htmlFor="payout_date"
            className="block text-sm font-medium mb-2"
          >
            Payout Date
          </label>
          <Input id="payout_date" type="date" {...register("payout_date")} />
          {errors.payout_date && (
            <p className="text-sm text-red-500 mt-1">
              {errors.payout_date.message}
            </p>
          )}
        </div>

        {/* Platform */}
        <div>
          <label htmlFor="platform" className="block text-sm font-medium mb-2">
            Platform
          </label>
          <Controller
            name="platform"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wallex">Wallex</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.platform && (
            <p className="text-sm text-red-500 mt-1">
              {errors.platform.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="investment_status"
            className="block text-sm font-medium mb-2"
          >
            Investment Status
          </label>
          <Controller
            name="investment_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select investment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.investment_status && (
            <p className="text-sm text-red-500 mt-1">
              {errors.investment_status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
