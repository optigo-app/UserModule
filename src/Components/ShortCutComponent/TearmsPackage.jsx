import React from "react";
import { Grid } from "@mui/material";
import { FormField, Select } from "../Ui";

export default function TearmsPackage() {
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="E-Catalog Package" tooltip="Digital catalog access level">
                    <Select
                        placeholder="Select package level"
                        options={[
                            { value: "usd", label: "📦 Basic Package" },
                            { value: "inr", label: "⭐ Premium Package" },
                            { value: "eur", label: "🏢 Enterprise Package" },
                            { value: "gbp", label: "🎯 Custom Package" },
                        ]}
                    />
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Select adhoc access" tooltip="Allow one-time catalog purchases">
                    <Select
                        placeholder="Select adhoc access"
                        options={[
                            { value: "usd", label: "✅ Enabled" },
                            { value: "inr", label: "❌ Disabled" },
                        ]}
                    />
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Select policy duration" tooltip="Duration of the pricing policy">
                    <Select
                        placeholder="Select policy duration"
                        options={[
                            { value: "est", label: "📅 Monthly (30 days)" },
                            { value: "pst", label: "📊 Quarterly (90 days)" },
                            { value: "ist", label: "📈 Half-Yearly (180 days)" },
                            { value: "gmt", label: "🗓️ Yearly (365 days)" },
                        ]}
                    />
                </FormField>
            </Grid>
        </Grid>
    );
}
