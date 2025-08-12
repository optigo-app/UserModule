import React from "react";
import { Box, Button, Checkbox, Collapse, Divider, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography, useTheme } from "@mui/material";
import { FormField, InputWithIcon, Select } from "../Ui";
import { ChevronRight, ChevronRightIcon, DollarSign, Percent } from "lucide-react";

export default function BrokerageComp({ commissionStructure, setCommissionStructure, commissionAmounts, setCommissionAmounts, showCommissionCalculation, setShowCommissionCalculation }) {
    const theme = useTheme();
    const options = [
        { id: "diamond", label: "Diamond Value", icon: "💎" },
        { id: "stone", label: "Stone Value", icon: "🔮" },
        { id: "metal", label: "Metal Value", icon: "🥇" },
        { id: "labour", label: "Labour Charges", icon: "🔨" },
        { id: "total", label: "Total Amount", icon: "💰" },
    ];
    return (
        <Grid container rowSpacing={0} columnSpacing={2}>
            <Grid item size={{ xs: 12, sm: 12 }}>
                <FormField label="Assign Broker" tooltip="Select the broker for this customer">
                    <Select placeholder="Choose broker">
                        <option value="john">John Smith</option>
                        <option value="sarah">Sarah Johnson</option>
                        <option value="jenis">Jenis</option>
                        <option value="shivam">Shivam</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid item size={{ xs: 12 }}>
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Commission Structure
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        How commission is calculated
                    </Typography>

                    <RadioGroup
                        value={commissionStructure}
                        onChange={(e) => setCommissionStructure(e.target.value)}
                    >
                        <Grid container spacing={2}>
                            {[
                                {
                                    value: "fixed",
                                    label: "Fixed Amount",
                                    description: "Set dollar amount per transaction",
                                },
                                {
                                    value: "percentage",
                                    label: "Percentage",
                                    description: "Percentage of transaction value",
                                },
                                {
                                    value: "criteria",
                                    label: "Criteria-based",
                                    description: "Based on specific conditions",
                                },
                            ]?.map(({ value, label, description }) => (
                                <Grid item size={{ xs: 12, sm: 4 }} key={value}>
                                    <Paper
                                        variant="outlined"
                                        sx={{
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            boxShadow:"none",
                                            "&:hover": {
                                                bgcolor: "action.hover",
                                                borderColor: "primary.main"
                                            },
                                            ...(commissionStructure === value && {
                                                borderColor: "primary.main",
                                                bgcolor: "primary.50",
                                            }),
                                        }}
                                        onClick={() => setCommissionStructure(value)}
                                    >
                                        <FormControlLabel
                                            value={value}
                                            control={<Radio />}
                                            label={
                                                <Box>
                                                    <Typography variant="body1" fontWeight="medium">
                                                        {label}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {description}
                                                    </Typography>
                                                </Box>
                                            }
                                            sx={{
                                                m: 0,
                                                p: 2,
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "flex-start",
                                                "& .MuiFormControlLabel-label": {
                                                    pl: 1,
                                                    width: "100%"
                                                }
                                            }}
                                        />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </RadioGroup>
                </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
                <FormField label="Fixed Commission Amount" tooltip="Fixed dollar amount per transaction">
                    <InputWithIcon
                        type="number"
                        icon={DollarSign}
                        placeholder="0.00"
                        disabled={commissionStructure !== "fixed"}
                        value={commissionAmounts.fixedAmount}
                        onChange={(e) => setCommissionAmounts(prev => ({ ...prev, fixedAmount: e.target.value }))}
                    />
                </FormField>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
                <FormField label="Percentage Commission Rate" tooltip="Percentage rate for commission calculation">
                    <InputWithIcon
                        type="number"
                        icon={Percent}
                        placeholder="0.00"
                        disabled={commissionStructure !== "percentage"}
                        value={commissionAmounts.percentageRate}
                        onChange={(e) => setCommissionAmounts(prev => ({ ...prev, percentageRate: e.target.value }))}
                    />
                </FormField>
            </Grid>
            <Grid item size={{ xs: 12, sm: 12 }}>
                <Box>
                    <button
                        type="button"
                        onClick={() => setShowCommissionCalculation(!showCommissionCalculation)}
                        className="toggle-button"
                        style={{marginBottom:'15px'}}
                    >
                        <ChevronRight
                            className={`toggle-icon ${showCommissionCalculation ? "rotate" : ""}`}
                        />
                        <span>Commission Calculation</span>
                        <span className="toggle-subtext">
                            (Click to {showCommissionCalculation ? "hide" : "show"})
                        </span>
                    </button>

                    <Collapse in={showCommissionCalculation}>
                        <Box
                            sx={{
                                mt: 1,
                                p: 2,
                                bgcolor: theme.palette.action.hover,
                                borderRadius: 1,
                                fontSize: "0.875rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 1,
                                }}
                            >
                                <Typography variant="body2">Transaction Amount:</Typography>
                                <Typography variant="body2" fontWeight="medium">$1,000.00</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 1,
                                    textTransform: "capitalize",
                                }}
                            >
                                <Typography variant="body2">Commission Structure:</Typography>
                                <Typography variant="body2" fontWeight="medium">{commissionStructure}</Typography>
                            </Box>

                            {commissionStructure === "fixed" && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Typography variant="body2">Fixed Amount:</Typography>
                                    <Typography variant="body2" fontWeight="medium">
                                        ${commissionAmounts.fixedAmount || "0.00"}
                                    </Typography>
                                </Box>
                            )}

                            {commissionStructure === "percentage" && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Typography variant="body2">Commission Rate:</Typography>
                                    <Typography variant="body2" fontWeight="medium">
                                        {commissionAmounts.percentageRate || "0"}%
                                    </Typography>
                                </Box>
                            )}

                            <Divider sx={{ my: 1 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 1,
                                }}
                            >
                                <Typography variant="body2">Calculated Commission:</Typography>
                                <Typography variant="body2" fontWeight="medium">
                                    {commissionStructure === "fixed"
                                        ? `$${commissionAmounts.fixedAmount || "0.00"}`
                                        : commissionStructure === "percentage"
                                            ? `$${(1000 * parseFloat(commissionAmounts.percentageRate || "0") / 100).toFixed(2)}`
                                            : "$0.00"
                                    }
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: theme.palette.success.main,
                                    fontWeight: "medium",
                                }}
                            >
                                <Typography variant="body2">Final Commission:</Typography>
                                <Typography variant="body2">
                                    {commissionStructure === "fixed"
                                        ? `$${commissionAmounts.fixedAmount || "0.00"}`
                                        : commissionStructure === "percentage"
                                            ? `$${(1000 * parseFloat(commissionAmounts.percentageRate || "0") / 100).toFixed(2)}`
                                            : "$0.00"
                                    }
                                </Typography>
                            </Box>
                        </Box>
                    </Collapse>
                </Box>
            </Grid>
            <Grid>
                <FormField label="Commission Applicable On" tooltip="Select transaction components for commission calculation">
                    <Grid container spacing={2}>
                        {options.map(({ id, label, icon }) => (
                            <Grid item size={{ xs: 6, sm: 4 }} key={id}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        px: 1,
                                        py: 0.5,
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: '8px',
                                        cursor: "pointer",
                                        "&:hover": {
                                            bgcolor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Checkbox id={id} />
                                    <label htmlFor={id} style={{ cursor: "pointer", userSelect: "none" }}>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            fontWeight={500}
                                            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                                        >
                                            <span>{icon}</span> {label}
                                        </Typography>
                                    </label>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </FormField>
            </Grid>
        </Grid>
    );
}