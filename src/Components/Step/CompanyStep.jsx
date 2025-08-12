import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  AlertTitle,
  Box,
  Grid,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Building2,
  MapPin,
  Phone,
  Shield,
  DollarSign,
} from "lucide-react";
import { FormField, Input, InputWithIcon, Select, CollapsibleSection } from "../Ui";

const CompanyStep = ({
  companyType,
  onCompanyTypeChange,
  expandedSections,
  onToggleSection,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Company Selection */}
      <CollapsibleSection
        isOpen={expandedSections.companySelection}
        onToggle={() => onToggleSection("companySelection")}
        icon={Building2}
        gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        title="Company Selection"
        subtitle="Choose existing or create new company"
        fieldCount="2 options"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Alert severity="info" sx={{ borderColor: "warning.main", bgcolor: "warning.50" }}>
            <AlertTitle sx={{ fontWeight: 600 }}>Company Setup</AlertTitle>
            Choose to link an existing company or create a new one. All business-related
            transactions will be associated with this company.
          </Alert>

          <Card variant="outlined" sx={{ border: "2px dashed", borderColor: "grey.300" }}>
            <CardHeader
              avatar={<Building2 size={20} />}
              title="Company Selection"
              subheader="Choose how you want to set up the company information"
            />
            <CardContent>
              <RadioGroup
                value={companyType}
                onChange={(e) => onCompanyTypeChange(e.target.value)}
              >
                <Grid container spacing={2}>
                  <Grid item size={{ sm: 12, md: 6 }}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "action.hover" },
                        border: companyType === "existing" ? "2px solid" : "1px solid",
                        borderColor: companyType === "existing" ? "primary.main" : "grey.300",
                      }}
                    >
                      <FormControlLabel
                        value="existing"
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Select Existing Company
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Link to a company already in the system
                            </Typography>
                          </Box>
                        }
                        sx={{ margin: 0, alignItems: "flex-start" }}
                      />
                    </Card>
                  </Grid>
                  <Grid item size={{ sm: 12, md: 6 }}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "action.hover" },
                        border: companyType === "new" ? "2px solid" : "1px solid",
                        borderColor: companyType === "new" ? "primary.main" : "grey.300",
                      }}
                    >
                      <FormControlLabel
                        value="new"
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Create New Company
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Set up a completely new company profile
                            </Typography>
                          </Box>
                        }
                        sx={{ margin: 0, alignItems: "flex-start" }}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </RadioGroup>
            </CardContent>
          </Card>

          {companyType === "existing" && (
            <Card>
              <CardHeader title="Select Existing Company" />
              <CardContent>
                <FormField label="Company" required>
                  <Select placeholder="Search and select company..." >
                    <MenuItem value="company1">
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          ABC Jewelers Ltd.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          GST: 123456789 • New York
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value="company2">
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          XYZ Diamonds Inc.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          GST: 987654321 • California
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormField>
              </CardContent>
            </Card>
          )}
        </Box>
      </CollapsibleSection>

      {/* Basic Company Info */}
      {companyType === "new" && (
        <CollapsibleSection
          isOpen={expandedSections.basicCompanyInfo}
          onToggle={() => onToggleSection("basicCompanyInfo")}
          icon={Building2}
          gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
          title="Basic Company Information"
          subtitle="Company details and registration"
          fieldCount="4 fields"
        >
          <Box>
            <Grid container spacing={3}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Name" required>
                  <Input placeholder="Enter company name" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Type">
                  <Select placeholder="Select type" >
                    <MenuItem value="pvt">Private Limited Company</MenuItem>
                    <MenuItem value="llp">Limited Liability Partnership</MenuItem>
                    <MenuItem value="partnership">Partnership Firm</MenuItem>
                    <MenuItem value="sole">Sole Proprietorship</MenuItem>
                  </Select>
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Tax Type">
                  <Select placeholder="Select tax type" >
                    <MenuItem value="gst">GST Registered</MenuItem>
                    <MenuItem value="vat">VAT Registered</MenuItem>
                    <MenuItem value="none">Not Registered</MenuItem>
                  </Select>
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Tax Scheme">
                  <Select placeholder="Select scheme" >
                    <MenuItem value="regular">Regular Scheme</MenuItem>
                    <MenuItem value="composition">Composition Scheme</MenuItem>
                  </Select>
                </FormField>
              </Grid>
            </Grid>
          </Box>
        </CollapsibleSection>
      )}

      {/* Address Information */}
      {companyType === "new" && (
        <CollapsibleSection
          isOpen={expandedSections.companyAddress}
          onToggle={() => onToggleSection("companyAddress")}
          icon={MapPin}
          gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
          title="Company Address"
          subtitle="Business location and contact details"
          fieldCount="8+ fields"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="City">
                  <Input placeholder="City name" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="State/Province">
                  <Select placeholder="Select state" >
                    <MenuItem value="ca">California</MenuItem>
                    <MenuItem value="ny">New York</MenuItem>
                    <MenuItem value="tx">Texas</MenuItem>
                  </Select>
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="Country">
                  <Select placeholder="Select country" >
                    <MenuItem value="us">🇺🇸 United States</MenuItem>
                    <MenuItem value="in">🇮🇳 India</MenuItem>
                    <MenuItem value="uk">🇬🇧 United Kingdom</MenuItem>
                  </Select>
                </FormField>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Area/District">
                  <Input placeholder="Area or district" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Postal/Zip Code">
                  <Input placeholder="Postal code" />
                </FormField>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormField label="Address Line 1">
                <Input placeholder="Street address, building number" />
              </FormField>
              <FormField label="Address Line 2">
                <Input placeholder="Apartment, suite, unit, etc. (optional)" />
              </FormField>
            </Box>

            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Mobile">
                  <InputWithIcon
                    icon={Phone}
                    type="number"
                    placeholder="Mobile number"
                  />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Telephone">
                  <Input placeholder="Landline number" />
                </FormField>
              </Grid>
            </Grid>
          </Box>
        </CollapsibleSection>
      )}

      {/* Tax & Registration Details */}
      {companyType === "new" && (
        <CollapsibleSection
          isOpen={expandedSections.taxRegistration}
          onToggle={() => onToggleSection("taxRegistration")}
          icon={Shield}
          gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
          title="Tax & Registration Details"
          subtitle="Tax numbers and compliance information"
          fieldCount="8+ fields"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="GST Number" tooltip="Goods and Services Tax registration number">
                  <Input placeholder="e.g., 22AAAAA0000A1Z5" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="PAN Number" tooltip="Permanent Account Number">
                  <Input placeholder="e.g., ABCDE1234F" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="VAT Number">
                  <Input placeholder="VAT registration number" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Service Tax">
                  <Input placeholder="Service tax number" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="CST Number">
                  <Input placeholder="Central Sales Tax number" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="TAN Number">
                  <Input placeholder="Tax Deduction Account Number" />
                </FormField>
              </Grid>
            </Grid>

            <Divider />

            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Credit Limit" tooltip="Maximum credit amount allowed">
                  <InputWithIcon
                    icon={DollarSign}
                    type="number"
                    placeholder="0.00"
                  />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Enterprise Type">
                  <Select placeholder="Select enterprise type" >
                    <MenuItem value="micro">Micro Enterprise</MenuItem>
                    <MenuItem value="small">Small Enterprise</MenuItem>
                    <MenuItem value="medium">Medium Enterprise</MenuItem>
                    <MenuItem value="large">Large Enterprise</MenuItem>
                  </Select>
                </FormField>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="CIN Number">
                  <Input placeholder="Corporate Identity Number" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Aadhaar Number">
                  <Input placeholder="12-digit Aadhaar number" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="MSME Number">
                  <Input placeholder="MSME registration number" />
                </FormField>
              </Grid>
            </Grid>
          </Box>
        </CollapsibleSection>
      )}
    </Box>
  );
};

export default CompanyStep;