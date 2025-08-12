import React from "react";
import { Grid, Box, Card, CardContent, CardHeader, Typography, Alert } from "@mui/material";
import { CreditCard, Shield } from "lucide-react";
import { FormField, Input, InputWithIcon, Select, Badge, CollapsibleSection } from "../Ui";

const BankingStep = ({ expandedSections, onToggleSection }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Banking Information Section */}
            <CollapsibleSection
                title="Banking Information"
                subtitle="Secure financial account details"
                expanded={expandedSections.bankingInfo}
                isOpen={expandedSections.bankingInfo}
                onToggle={() => onToggleSection("bankingInfo")}
                icon={CreditCard}
                gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                fieldCount="2 options"
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Alert severity="info" icon={<CreditCard size={18} />}>
                        <strong>Secure Banking:</strong> All banking information is encrypted and stored securely. This
                        information is used for payment processing and financial transactions.
                    </Alert>

                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="Bank Name" required tooltip="Full name of the bank">
                                    <Input placeholder="e.g., Chase Bank" />
                                </FormField>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="Branch Name" required tooltip="Specific branch location">
                                    <Input placeholder="e.g., Downtown Branch" />
                                </FormField>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="Account Holder Name" required tooltip="Name as it appears on bank records">
                                    <Input placeholder="Full name on account" />
                                </FormField>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="Account Type">
                                    <Select
                                        placeholder="Select account type"
                                        options={[
                                            { value: "savings", label: "💰 Savings Account" },
                                            { value: "current", label: "🏢 Current/Checking Account" },
                                            { value: "cc", label: "💳 Cash Credit Account" },
                                            { value: "od", label: "📊 Overdraft Account" },
                                        ]}
                                    />
                                </FormField>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="Account Number" required tooltip="Your bank account number">
                                    <Input type="password" placeholder="Enter account number" />
                                </FormField>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormField label="IFSC/Routing Code" required tooltip="Bank's routing or IFSC code">
                                    <Input placeholder="e.g., CHASE0001234" />
                                </FormField>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 3, p: 2, bgcolor: "grey.100", borderRadius: 2 }}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                <Shield size={20} color="#1976d2" />
                                <Box>
                                    <Typography variant="subtitle2">Security Notice</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Your banking information is protected with bank-level encryption. We never store complete
                                        account numbers in plain text.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CollapsibleSection>
        </Box>
    );
};
export default BankingStep;
