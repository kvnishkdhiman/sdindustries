"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, fullWidth = true, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("w-full", fullWidth && "max-w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground"
          >
            {label}
            {props.required && <span className="text-[#E4572E] ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-2.5 border rounded-[4px] text-sm bg-white",
            "transition-all duration-200",
            "focus:outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-[#E4572E] focus:border-[#E4572E] focus:ring-[#E4572E]"
              : "border-[#E0E0E0]",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-[#E4572E]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, fullWidth = true, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("w-full", fullWidth && "max-w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground"
          >
            {label}
            {props.required && <span className="text-[#E4572E] ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full px-4 py-2.5 border rounded-[4px] text-sm bg-white resize-y min-h-[100px]",
            "transition-all duration-200",
            "focus:outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-[#E4572E] focus:border-[#E4572E] focus:ring-[#E4572E]"
              : "border-[#E0E0E0]",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-xs text-[#E4572E]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, fullWidth = true, placeholder, options, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("w-full", fullWidth && "max-w-full")}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground"
          >
            {label}
            {props.required && <span className="text-[#E4572E] ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-2.5 border rounded-[4px] text-sm bg-white appearance-none",
            "transition-all duration-200",
            "focus:outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-[#E4572E] focus:border-[#E4572E] focus:ring-[#E4572E]"
              : "border-[#E0E0E0]",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-xs text-[#E4572E]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${selectId}-helper`} className="mt-1.5 text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";