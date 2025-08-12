import React from "react";
import { HelpCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { Tooltip, Typography, Box } from "@mui/material";

export const FormField = ({
  label,
  required = false,
  tooltip,
  error,
  success,
  children,
  className = "",
}) => {
  return (
    <Box className={className} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {/* Label Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: "text.primary" }}
          component="label"
        >
          {label}
          {required && <Typography component="span" color="error" ml={0.5}>*</Typography>}
        </Typography>

        {tooltip && (
          <Tooltip title={tooltip} arrow placement="top">
            <HelpCircle
              size={16}
              style={{
                color: "#9ca3af",
                cursor: "help",
                transition: "color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7367f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            />
          </Tooltip>
        )}

        {success && <CheckCircle2 size={16} color="#22c55e" />}
      </Box>

      {/* Field Input */}
      <Box sx={{ position: "relative" }}>{children}</Box>

      {/* Error Message */}
      {error && (
        <Typography
          variant="caption"
          color="error"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            animation: "slideIn 0.2s ease",
            "@keyframes slideIn": {
              from: { transform: "translateX(-4px)", opacity: 0 },
              to: { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <AlertCircle size={12} />
          {error}
        </Typography>
      )}
    </Box>
  );
};
