import * as React from "react";
import WarningIcon from "@/svgs/WarningIcon";
import { cn } from "@/lib/utils";

const TInputField = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    error?: boolean;
    errorMessage?: string;
  }
>(({ className, type, error, errorMessage, ...props }, ref) => {
  return (
    <div className="space-y-1">
      <input
        type={type}
        className={cn(
          "flex w-[100%] my-4 font-customFustat bg-primary-white body-1-medium h-11 rounded-m border  px-5 py-6 text-functional-100 shadow-sm transition-colors placeholder:text-functional-500 focus-visible:border-none focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50 ",
          error
            ? "border-red-800 focus-visible:ring-red-800"
            : "border-functional-500 focus-visible:ring-brand-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && errorMessage && (
        <div className="flex items-center gap-2">
          <WarningIcon className="h-5 w-5 text-red-800" />
          <p className="text-red-800 body-3-regular">{errorMessage}</p>
        </div>
      )}
    </div>
  );
});
TInputField.displayName = "TInputField";

export { TInputField };
