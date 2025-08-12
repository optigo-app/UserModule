import React, { useState } from "react";
import {
    Box,
    Grid,
} from "@mui/material";
import {
    FileText,
    Truck,
    Star,
} from "lucide-react"
import { FormField, Select, CollapsibleSection, Textarea } from "../Ui";
import { OptionGrid } from "../Ui/OptionGrid";

const CompanyStep = ({
    companyType,
    onCompanyTypeChange,
    expandedSections,
    onToggleSection,
}) => {
    const shippingOptions = [
        { value: "courier", label: "🚚 Courier Service" },
        { value: "hand", label: "🤝 Hand Delivery" },
        { value: "post", label: "📮 Postal Service" },
        { value: "express", label: "⚡ Express Delivery" }
    ];
    const certificationOptions = [
        { id: "hallmark", label: "Hallmark Certification", icon: "🏆" },
        { id: "diamondWt", label: "Diamond Weight", icon: "💎" },
        { id: "pcs", label: "Piece Count", icon: "🔢" },
        { id: "stamping", label: "Quality Stamping", icon: "✅" },
    ];
    const [shippingMethod, setShippingMethod] = useState("");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Company Selection */}
            <CollapsibleSection
                isOpen={expandedSections.companySelection}
                onToggle={() => onToggleSection("companySelection")}
                icon={Truck}
                gradient="linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(29, 78, 216) 100%)"
                title="Shipping Preferences"
                subtitle="Default shipping and delivery settings"
                fieldCount="1 field"
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <FormField label="Default Shipping Method">
                        <Select
                            options={shippingOptions}
                            placeholder="Select shipping method"
                            value={shippingMethod}
                            onChange={(e) => setShippingMethod(e.target.value)}
                        />
                    </FormField>

                </Box>
            </CollapsibleSection>
            <CollapsibleSection
                isOpen={expandedSections.qualityCertification}
                onToggle={() => onToggleSection("qualityCertification")}
                icon={Star}
                gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                title="Quality & Certification"
                subtitle="Quality assurance and certification preferences"
                fieldCount="6 field"
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <FormField label="Stamping & Hallmarking Preferences">
                        <OptionGrid options={certificationOptions} />
                    </FormField>
                    <FormField label="Preferred Certification">
                        <Select
                            options={shippingOptions}
                            placeholder="Select certification authority"
                            value={shippingMethod}
                            onChange={(e) => setShippingMethod(e.target.value)}
                        />
                    </FormField>

                </Box>
            </CollapsibleSection>

            <CollapsibleSection
                isOpen={expandedSections.specialInstructions}
                onToggle={() => onToggleSection("specialInstructions")}
                icon={FileText}
                gradient="linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(124, 58, 237) 100%)"
                title="Special Instructions"
                subtitle="Department-specific instructions and notes"
                fieldCount="5 field"
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{sm:12, md:6}}>
                            <FormField label="Office Instructions" tooltip="Instructions for office staff">
                                <Textarea
                                    id="officeInstructions"
                                    placeholder="Special handling instructions for office staff..."
                                    rows={3}
                                />
                            </FormField>
                        </Grid>
                        <Grid  size={{sm:12, md:6}}>
                            <FormField label="User Instructions" tooltip="Instructions for system users">
                                <Textarea id="userInstructions" placeholder="Guidelines for system users..." rows={3} />
                            </FormField>
                        </Grid>
                        <Grid  size={{sm:12, md:6}}>
                            <FormField label="Customer Instructions" tooltip="Instructions visible to customer">
                                <Textarea id="customerInstructions" placeholder="Information to display to customer..." rows={3} />
                            </FormField>
                        </Grid>
                        <Grid  size={{sm:12, md:6}}>
                            <FormField label="Admin Instructions" tooltip="Instructions for administrators">
                                <Textarea id="adminInstructions" placeholder="Administrative notes and instructions..." rows={3} />
                            </FormField>
                        </Grid>
                        <Grid  size={{sm:12}}>
                            <FormField label="General Notes" tooltip="Any other important information">
                                <Textarea
                                    id="otherInstructions"
                                    placeholder="Additional notes, special requirements, or important information..."
                                    rows={4}
                                />
                            </FormField>
                        </Grid>
                    </Grid>
                </Box>
            </CollapsibleSection>

        </Box>
    );
};

export default CompanyStep;