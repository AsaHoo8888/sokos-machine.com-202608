"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, SelectHTMLAttributes } from "react";
import PhoneInput, { getCountryCallingCode, isPossiblePhoneNumber, isSupportedCountry } from "react-phone-number-input";
import type { Country, Value } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

type PhoneCountrySelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> & {
  value?: Country;
  onChange: (country?: Country) => void;
  options: Array<{ value?: Country; label: string; divider?: boolean }>;
  iconComponent: ElementType;
};

function PhoneCountrySelect({ value, onChange, options, iconComponent: Icon, ...props }: PhoneCountrySelectProps) {
  return (
    <div className="PhoneInputCountry gap-2 border-r border-slate-300 pr-3">
      <select
        {...props}
        className="PhoneInputCountrySelect"
        onChange={(event) => onChange(event.target.value as Country)}
        value={value || "ZZ"}
      >
        {options.map((option) => (
          <option disabled={option.divider} key={option.value || "ZZ"} value={option.value || "ZZ"}>
            {option.label}{option.value ? ` +${getCountryCallingCode(option.value)}` : ""}
          </option>
        ))}
      </select>
      {value && <Icon aria-hidden="true" country={value} />}
      {value && <span aria-hidden="true" className="whitespace-nowrap">+{getCountryCallingCode(value)}</span>}
      <span aria-hidden="true" className="PhoneInputCountrySelectArrow" />
    </div>
  );
}

export function ContactPhoneInput() {
  const [country, setCountry] = useState<Country>("CN");
  const [value, setValue] = useState<Value>();
  const container = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    async function detectCountry() {
      try {
        const response = await fetch("https://api.country.is/", {
          signal: controller.signal,
          credentials: "omit",
          referrerPolicy: "no-referrer",
        });
        if (!response.ok) return;
        const data: unknown = await response.json();
        if (!data || typeof data !== "object" || !("country" in data)) return;
        const code = data.country;
        if (typeof code === "string" && isSupportedCountry(code) && !interacted.current) {
          setCountry(code as Country);
        }
      } catch {
        // IP lookup is optional; keep the default and allow manual country selection.
      } finally {
        clearTimeout(timeout);
      }
    }

    void detectCountry();
    const form = container.current?.closest("form");
    const reset = () => setValue(undefined);
    form?.addEventListener("reset", reset);
    return () => {
      controller.abort();
      clearTimeout(timeout);
      form?.removeEventListener("reset", reset);
    };
  }, []);

  useEffect(() => {
    container.current?.querySelector<HTMLInputElement>('input[type="tel"]')?.setCustomValidity(
      value && isPossiblePhoneNumber(value) ? "" : "Enter a phone number for the selected country.",
    );
  }, [value]);

  return (
    <div className="w-full" onFocusCapture={() => { interacted.current = true; }} ref={container}>
      <PhoneInput
        addInternationalOption={false}
        autoComplete="tel"
        className="contact-phone min-h-11 rounded-sm border border-slate-300 bg-white px-3 text-base font-normal text-[#07111f] focus-within:border-primary focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary"
        countrySelectComponent={PhoneCountrySelect}
        countrySelectProps={{ "aria-label": "Phone country" }}
        defaultCountry={country}
        flags={flags}
        id="contact-phone"
        onChange={setValue}
        required
        value={value}
      />
      <input name="phone" type="hidden" value={value || ""} />
    </div>
  );
}
