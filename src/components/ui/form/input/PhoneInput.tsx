import React, { useState, useCallback } from "react";
import { useCountryCodes } from "@/modules/authentication/hooks/useCountryCodes";
import { TInputField } from "@/components/ui/form/input/TInputField";
import { PhoneInputValue } from "@/modules/authentication/types/phoneInput";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/form/select/TSelect";
import WarningIcon from "@/svgs/WarningIcon";
import { usePhoneInput } from "@/modules/authentication/hooks/usePhoneInput";

type PhoneInputProps = {
  value: PhoneInputValue;
  onChange: (value: PhoneInputValue) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const {
    countryCodes,
    selectedCountry,
    validationError,
    handleCountryChange,
    handlePhoneNumberChange,
    error,
  } = usePhoneInput(value, onChange);

  return (
    <div className="mt-4 w-full space-y-2">
      <div className="flex items-center w-full gap-2">
        <div className="flex-1 basis-30 w-[30%]">
          <Select value={selectedCountry} onValueChange={handleCountryChange}>
            <SelectTrigger>
              <SelectValue>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      countryCodes.find((c) => c.code === selectedCountry)?.flag
                    }
                    className="w-6 h-3"
                    crossOrigin="anonymous"
                    loading="lazy"
                  />
                  {selectedCountry}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((country, ind) => (
                <SelectItem key={ind} value={country.code}>
                  <div className="flex items-center gap-2">
                    <img
                      src={country.flag}
                      className="w-6 h-3"
                      crossOrigin="anonymous"
                    />
                    {country.code}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-2 basis-70 w-[70%]">
          <TInputField
            type="tel"
            className="my-0"
            value={value.phoneNumber}
            onChange={handlePhoneNumberChange}
            error={validationError ? true : false}
          />
        </div>
      </div>

      {validationError && (
        <div className="flex items-center gap-2">
          <WarningIcon className="h-7 w-7 text-red-800" />
          <p className="text-red-800 body-3-regular">{validationError}</p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 ">
          <WarningIcon className="h-7 w-7 text-red-800" />
          <p className="text-red-800 body-3-regular">{error}aasdasdasd</p>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;