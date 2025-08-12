import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Grid,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { Edit, Check } from "lucide-react";
import { FormField, Input, Textarea, Select } from "../Ui";

export default function ShippingAddressForm({
    address,
    setAddress,
    onSave,
    onCancel,
    isAddingNew,
}) {
    if (!address) return null;

    return (
        <Card variant="outlined" sx={{ mt: 4 }}>
            <CardHeader
                title={
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <Edit size={20} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                {isAddingNew ? "Add New Address" : "Edit Address"}
                            </Typography>
                        </Grid>
                    </Grid>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="First Name" required>
                            <Input
                                placeholder="John"
                                value={address.firstName}
                                onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
                            />
                        </FormField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="Last Name" required>
                            <Input
                                placeholder="Doe"
                                value={address.lastName}
                                onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12 }}>
                        <FormField label="Full Address" required>
                            <Textarea
                                rows={3}
                                placeholder="Enter complete address including street, building number, etc."
                                value={address.address}
                                onChange={(e) => setAddress({ ...address, address: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="Country" required>
                            <Select
                                value={address.country}
                                onChange={(e) => setAddress({ ...address, country: e.target.value })}
                                placeholder="Select country"
                            >
                                <option value="us">🇺🇸 United States</option>
                                <option value="in">🇮🇳 India</option>
                                <option value="uk">🇬🇧 United Kingdom</option>
                                <option value="ca">🇨🇦 Canada</option>
                            </Select>
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="State/Province" required>
                            <Select
                                value={address.state}
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                placeholder="Select state"
                            >
                                <option value="ca">California</option>
                                <option value="ny">New York</option>
                                <option value="tx">Texas</option>
                                <option value="fl">Florida</option>
                            </Select>
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="City" required>
                            <Input
                                placeholder="New York"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="Area/District">
                            <Input
                                placeholder="Manhattan"
                                value={address.area || ""}
                                onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="Zip/Postal Code" required>
                            <Input
                                placeholder="10001"
                                value={address.zipCode}
                                onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormField label="Mobile Number" required>
                            <Input
                                type="number"
                                placeholder="Enter mobile number"
                                value={address.mobile}
                                onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
                            />
                        </FormField>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={address.isDefault}
                                    onChange={(e) => setAddress({ ...address, isDefault: e.target.checked })}
                                />
                            }
                            label="Set as default shipping address"
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", mt: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<Check size={18} />}
                    onClick={() => onSave(address)}
                >
                    Save Address
                </Button>
                <Button variant="outlined" onClick={onCancel}>
                    {isAddingNew ? "Cancel Add" : "Cancel"}
                </Button>
            </CardActions>
        </Card>
    );
}
