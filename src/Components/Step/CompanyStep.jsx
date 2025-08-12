import React, { useState } from "react";
import {
  Box,
  Grid,
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
import CompanySelection from "../ShortCutComponent/CompanySelection";
import ExistingCompanySelector from "../ShortCutComponent/ExistingCompanySelector";

const CompanyStep = ({
  expandedSections,
  onToggleSection,
}) => {
  const [companyType, setCompanyType] = useState("existing");
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
        <CompanySelection companyType={companyType} onCompanyTypeChange={setCompanyType} />
        {companyType === "existing" && <ExistingCompanySelector />}
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
            <Grid container rowSpacing={0} columnSpacing={2}>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Name" required>
                  <Input placeholder="Enter company name" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Company Type">
                  <Select
                    placeholder="Select type"
                    options={[
                      { value: "pvt", label: "Private Limited Company" },
                      { value: "llp", label: "Limited Liability Partnership" },
                      { value: "partnership", label: "Partnership Firm" },
                      { value: "sole", label: "Sole Proprietorship" },
                    ]}
                  />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Tax Type">
                  <Select
                    placeholder="Select tax type"
                    options={[
                      { value: "gst", label: "GST Registered" },
                      { value: "vat", label: "VAT Registered" },
                      { value: "none", label: "Not Registered" },
                    ]}
                  />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 6 }}>
                <FormField label="Tax Scheme">
                  <Select
                    placeholder="Select scheme"
                    options={[
                      { value: "regular", label: "Regular Scheme" },
                      { value: "composition", label: "Composition Scheme" },
                    ]}
                  />
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container rowSpacing={0} columnSpacing={2}>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="City">
                  <Input placeholder="City name" />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="State/Province">
                  <Select
                    placeholder="Select state"
                    options={[
                      { value: "ca", label: "California" },
                      { value: "ny", label: "New York" },
                      { value: "tx", label: "Texas" },
                    ]}
                  />
                </FormField>
              </Grid>
              <Grid item size={{ sm: 12, md: 4 }}>
                <FormField label="Country">
                  <Select
                    placeholder="Select country"
                    options={[
                      { value: "us", label: "🇺🇸 United States" },
                      { value: "in", label: "🇮🇳 India" },
                      { value: "uk", label: "🇬🇧 United Kingdom" },
                    ]}
                  />
                </FormField>
              </Grid>
            </Grid>

            <Grid container rowSpacing={0} columnSpacing={2}>
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

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormField label="Address Line 1">
                <Input placeholder="Street address, building number" />
              </FormField>
              <FormField label="Address Line 2">
                <Input placeholder="Apartment, suite, unit, etc. (optional)" />
              </FormField>
            </Box>

            <Grid container rowSpacing={0} columnSpacing={2}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container rowSpacing={0} columnSpacing={2}>
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

            <Grid container rowSpacing={0} columnSpacing={2}>
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
                  <Select
                    placeholder="Select enterprise type"
                    options={[
                      { value: "micro", label: "Micro Enterprise" },
                      { value: "small", label: "Small Enterprise" },
                      { value: "medium", label: "Medium Enterprise" },
                      { value: "large", label: "Large Enterprise" },
                    ]}
                  />
                </FormField>
              </Grid>
            </Grid>
            <Grid container rowSpacing={0} columnSpacing={2}>
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