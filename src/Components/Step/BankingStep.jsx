import React, { useState } from "react";
import { Grid, Box, Typography, IconButton, Button, Radio, Divider } from "@mui/material";
import { CreditCard, Shield, Trash2, PlusCircle } from "lucide-react";
import { FormField, Input, Select, CollapsibleSection } from "../Ui";

const BankingStep = ({ expandedSections, onToggleSection }) => {
  const [accounts, setAccounts] = useState([
    {
      bankName: "",
      branchName: "",
      holderName: "",
      accountType: "",
      accountNumber: "",
      ifscCode: "",
      isPrimary: true, // first one is primary by default
    },
  ]);

  // Handle field change
  const handleChange = (index, field, value) => {
    setAccounts((prev) =>
      prev.map((acc, i) =>
        i === index ? { ...acc, [field]: value } : acc
      )
    );
  };

  // Add new account
  const addAccount = () => {
    setAccounts((prev) => [
      ...prev,
      {
        bankName: "",
        branchName: "",
        holderName: "",
        accountType: "",
        accountNumber: "",
        ifscCode: "",
        isPrimary: false,
      },
    ]);
  };

  // Remove account
  const removeAccount = (index) => {
    setAccounts((prev) => prev.filter((_, i) => i !== index));
  };

  // Set primary account
  const setPrimary = (index) => {
    setAccounts((prev) =>
      prev.map((acc, i) => ({ ...acc, isPrimary: i === index }))
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <CollapsibleSection
        title="Banking Information"
        subtitle="Secure financial account details"
        expanded={expandedSections.bankingInfo}
        isOpen={expandedSections.bankingInfo}
        onToggle={() => onToggleSection("bankingInfo")}
        icon={CreditCard}
        gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        fieldCount={`${accounts.length} accounts`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {accounts.map((account, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  Bank Account {index + 1}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Radio
                    checked={account.isPrimary}
                    onChange={() => setPrimary(index)}
                    value={index}
                    name="primary-account"
                    color="primary"
                  />
                  <Typography variant="body2" color="text.secondary">
                    Primary
                  </Typography>
                  {accounts.length > 1 && (
                    <IconButton size="small" onClick={() => removeAccount(index)} color="error">
                      <Trash2 size={18} />
                    </IconButton>
                  )}
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid container rowSpacing={0} columnSpacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="Bank Name" required>
                    <Input
                      placeholder="e.g., Chase Bank"
                      value={account.bankName}
                      onChange={(e) => handleChange(index, "bankName", e.target.value)}
                    />
                  </FormField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="Branch Name" required>
                    <Input
                      placeholder="e.g., Downtown Branch"
                      value={account.branchName}
                      onChange={(e) => handleChange(index, "branchName", e.target.value)}
                    />
                  </FormField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="Account Holder Name" required>
                    <Input
                      placeholder="Full name on account"
                      value={account.holderName}
                      onChange={(e) => handleChange(index, "holderName", e.target.value)}
                    />
                  </FormField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="Account Type">
                    <Select
                      placeholder="Select account type"
                      options={[
                        { value: "savings", label: "💰 Savings Account" },
                        { value: "current", label: "🏢 Current/Checking Account" },
                        { value: "cc", label: "💳 Cash Credit Account" },
                        { value: "od", label: "📊 Overdraft Account" },
                      ]}
                      value={account.accountType}
                      onChange={(val) => handleChange(index, "accountType", val)}
                    />
                  </FormField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="Account Number" required>
                    <Input
                      type="password"
                      placeholder="Enter account number"
                      value={account.accountNumber}
                      onChange={(e) => handleChange(index, "accountNumber", e.target.value)}
                    />
                  </FormField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField label="IFSC/Routing Code" required>
                    <Input
                      placeholder="e.g., CHASE0001234"
                      value={account.ifscCode}
                      onChange={(e) => handleChange(index, "ifscCode", e.target.value)}
                    />
                  </FormField>
                </Grid>
              </Grid>
            </Box>
          ))}

          {/* Add Account Button */}
          <Button
            variant="outlined"
            startIcon={<PlusCircle size={18} />}
            onClick={addAccount}
          >
            Add Another Bank
          </Button>

          {/* Security Notice */}
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
      </CollapsibleSection>
    </Box>
  );
};

export default BankingStep;
