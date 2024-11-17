"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import EmailInput from "./EmailInput";
import PhoneInputComponent from "./PhoneInput";
import postUserData from "@/app/cors/Services/User";
interface FormValues {
  email: string;
  phone_number: string;
}
interface FormErrors {
  email?: string;
  phoneNumber?: string;
  backend?: string;
}
const validateEmail = (
  email: string,
  t: (key: string) => string
): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? null : t("emailError");
};
const validatePhoneNumber = (
  phoneNumber: string,
  t: (key: string) => string
): string | null => {
  return phoneNumber ? null : t("phoneNumberRequired");
};
export default function UserRegister() {
  const t = useTranslations("UserRegister");
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    phone_number: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    const emailError = validateEmail(formValues.email, t);
    if (emailError) {
      errors.email = emailError;
    }
    const phoneError = validatePhoneNumber(formValues.phone_number, t);
    if (phoneError) {
      errors.phoneNumber = phoneError;
    }
    return errors;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await postUserData(formValues);
        if (response.isSuccess) {
          router.push(`/thank-you`);
        } else {
          setFormErrors({
            backend: response.errorMessage || t("backendError"),
          });
        }
      } catch (error) {
        setFormErrors({ backend: t("backendError") });
      }
    }
  };

  return (
    <div className="bg-white p-6 border-gray-300  mb-4">
      <h2 className="font-bold text-xl">{t("title")}</h2>
      <form onSubmit={handleSubmit}>
        <EmailInput
          value={formValues.email}
          error={formErrors.email}
          onChange={(value) => setFormValues({ ...formValues, email: value })}
          placeholder={t("email")}
        />

        <PhoneInputComponent
          value={formValues.phone_number}
          error={formErrors.phoneNumber}
          onChange={(value) =>
            setFormValues({ ...formValues, phone_number: value })
          }
        />

        {formErrors.backend && (
          <p className="text-red-500 text-sm mt-1">{formErrors.backend}</p>
        )}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-yellow-400 text-black font-bold py-6 px-14 rounded-full text-xl"
          >
            {t("subscribe")}
          </Button>
        </div>
      </form>
    </div>
  );
}
