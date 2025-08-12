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
                    >
                        <option value="usd">📦 Basic Package</option>
                        <option value="inr">⭐ Premium Package</option>
                        <option value="eur">🏢 Enterprise Package</option>
                        <option value="gbp">🎯 Custom Package</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Select adhoc access" tooltip="Allow one-time catalog purchases">
                    <Select
                        placeholder="Select adhoc access"
                    >
                        <option value="usd">✅ Enabled</option>
                        <option value="inr">❌ Disabled</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Select policy duration" tooltip="Duration of the pricing policy">
                    <Select
                        placeholder="Select policy duration"
                    >
                        <option value="est">📅 Monthly (30 days)</option>
                        <option value="pst">📊 Quarterly (90 days)</option>
                        <option value="ist">📈 Half-Yearly (180 days)</option>
                        <option value="gmt">🗓️ Yearly (365 days)</option>
                    </Select>
                </FormField>
            </Grid>
        </Grid>
    );
}
