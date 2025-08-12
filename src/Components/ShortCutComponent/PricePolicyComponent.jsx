import React from 'react'
import { FormField, InputWithIcon } from '../Ui'
import { DollarSign } from 'lucide-react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'

const PricePolicyComponent = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <FormField label="Diamond Price" tooltip="Base price per carat for diamonds">
                        <InputWithIcon
                            icon={DollarSign}
                            placeholder="0.00"
                        />
                    </FormField>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <FormField label="Color Stone Price" tooltip="Price per carat for colored gemstones">
                        <InputWithIcon
                            icon={DollarSign}
                            placeholder="0.00"
                        />
                    </FormField>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <FormField label="Labour Charges" tooltip="Manufacturing and crafting charges">
                        <InputWithIcon
                            icon={DollarSign}
                            placeholder="0.00"
                        />
                    </FormField>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <FormField label="Setting Charges" tooltip="Stone setting and mounting charges">
                        <InputWithIcon
                            icon={DollarSign}
                            placeholder="0.00"
                        />
                    </FormField>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12 }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        p={2}
                        border={1}
                        borderColor="grey.300"
                        borderRadius={2}
                    >
                        <FormControlLabel
                            control={<Checkbox id="excludePremium" />}
                            label={
                                <Box>
                                    <Typography variant="body1" fontWeight="medium">
                                        Exclude Premium Design Charges
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Skip additional charges for premium or designer pieces
                                    </Typography>
                                </Box>
                            }
                        />
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default PricePolicyComponent