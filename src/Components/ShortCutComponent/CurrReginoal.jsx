import React from "react";
import { Grid } from "@mui/material";
import { FormField, Select } from "../Ui";

export default function CurrReginoal() {
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Primary Currency" tooltip="Main currency for transactions">
                    <Select
                        placeholder="Select primary currency"
                    >
                        <option value="usd">💵 USD - US Dollar</option>
                        <option value="inr">🇮🇳 INR - Indian Rupee</option>
                        <option value="eur">🇪🇺 EUR - Euro</option>
                        <option value="gbp">🇬🇧 GBP - British Pound</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Secondary Currency" tooltip="Alternative currency for pricing">
                    <Select
                        placeholder="Select secondary currency"
                    >
                        <option value="none">❌ No Secondary Currency</option>
                        <option value="usd">💵 USD - US Dollar</option>
                        <option value="inr">🇮🇳 INR - Indian Rupee</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Time Zone" tooltip="Customer's local time zone">
                    <Select
                        placeholder="Select time zone"
                    >
                        <option value="est">🇺🇸 EST - Eastern Time</option>
                        <option value="pst">🇺🇸 PST - Pacific Time</option>
                        <option value="ist">🇮🇳 IST - India Time</option>
                        <option value="gmt">🇬🇧 GMT - Greenwich Time</option>
                    </Select>
                </FormField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <FormField label="Date Format" tooltip="Preferred date display format">
                    <Select
                        placeholder="Select date format"
                    >
                        <option value="mm/dd/yyyy">📅 MM/DD/YYYY</option>
                        <option value="dd/mm/yyyy">📅 DD/MM/YYYY</option>
                        <option value="yyyy-mm-dd">📅 YYYY-MM-DD</option>
                    </Select>
                </FormField>
            </Grid>
        </Grid>
    );
}
