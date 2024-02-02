import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  unit?: string; // Optional unit prop to display the unit inside the input
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, unit, style, ...props }, ref) => {
    const inputStyle = {
      ...style,
      paddingRight: unit ? "3rem" : "1rem",
    };

    return (
      <div className="relative flex items-center w-full">
        {" "}
        {/* Make the wrapper relative */}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          style={inputStyle}
          ref={ref}
          {...props}
        />
        {unit && (
          <span className="absolute right-3 text-sm text-muted-foreground pointer-events-none">
            {" "}
            {/* Position the unit inside the input */}
            {unit}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
