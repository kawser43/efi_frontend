"use client";

import PayoutFormMain from "@/components/payouts/payout-form-main";
import { Button } from "@/components/ui/button";
import ButtonLoader from "@/components/ui/ButtonLoader";
import { useToast } from "@/hooks/use-toast";
import http from "@/lib/http";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

/* Schema Validation */
const formSchema = yup.object({
  capital: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Capital must be a number"),

  tax: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Tax must be a number"),

  partial: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Partial must be a number"),

  profit: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Profit must be a number"),

  available_amount_after_tax: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Available amount must be a number"),

  payout_actual: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Payout actual must be a number"),

  payout_actual_transfer: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Transfer amount must be a number"),

  transfer_currency: yup.string().nullable(),

  exchange_rate: yup
    .number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Exchange rate must be a number"),

  payout_status: yup.string().nullable(),

  purpose: yup.string().nullable(),

  payout_date: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("Invalid date format"),

  platform: yup.string().nullable(),

  investment_status: yup.string().nullable(),
});
/* End of Schema Validation */

export default function AddPayout() {
  const {id} = useParams();
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {

    console.log('data', data)
    try {
      const {
        data: { status, message },
      } = await http.post(`/payouts/${id}`, data);
      toast({
        title: message,
        variant: status ? "success" : "destructive",
      });
      if (status) {
        router.push(`/payouts/${id}`);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || error.message;
      console.error(errMsg);
      toast({
        title: errMsg,
        variant: "destructive",
      });
    }
  };

  console.log('Errors', errors);
  console.log("isSubmitting", isSubmitting);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-start">
          <h1 className="text-2xl text-slate-800 font-semibold mb-6">
            Add Payout
          </h1>
          <div>
            <Button type="submit" className="w-[120px]" disabled={isSubmitting}>
              {isSubmitting ? <ButtonLoader /> : "Add Payout"}
            </Button>
          </div>
        </div>
        <div className=" w-full rounded-lg p-6 shadow-md border border-slate-200">
          <PayoutFormMain
            register={register}
            control={control}
            errors={errors}
            setValue={setValue}
          />
        </div>
      </form>
    </div>
  );
}
