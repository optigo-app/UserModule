import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
  Chip,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlLabel as MuiFormControlLabel,
  Radio,
  Button,
  Typography,
} from "@mui/material";
import {
  Package,
  DollarSign,
  Calendar,
  User,
} from "lucide-react";
import "../../Styles/PackagesStep.scss";
import { CollapsibleSection } from "../Ui";
import PricePolicyComponent from "../ShortCutComponent/PricePolicyComponent";
import TearmsPackage from "../ShortCutComponent/TearmsPackage";
import BrokerageComp from "../ShortCutComponent/BrokrageComp";

export default function PackagesStep({ expandedSections, onToggleSection }) {
  const [commissionStructure, setCommissionStructure] = useState("percentage");
  const [commissionAmounts, setCommissionAmounts] = useState({
    fixedAmount: "",
    percentageRate: "2.5"
  });
  const [showCommissionCalculation, setShowCommissionCalculation] = useState(false);

  return (
    <div className="packages-step">

      {/* Price Policy */}
      <CollapsibleSection
        isOpen={expandedSections.pricePolicy}
        onToggle={() => onToggleSection("pricePolicy")}
        icon={DollarSign}
        gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
        title="Price Policy"
        subtitle="Pricing structure and discount configuration"
        fieldCount="7 fields"
      >
        <PricePolicyComponent />

      </CollapsibleSection>

      {/* Terms & Packages */}
      <CollapsibleSection
        isOpen={expandedSections.termsPackages}
        onToggle={() => onToggleSection("termsPackages")}
        icon={Package}
        gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
        title="Terms & Packages"
        subtitle="E-catalog access and policy terms"
        fieldCount="3 fields"
      >
        <TearmsPackage />

      </CollapsibleSection>

      {/* Brokerage Configuration */}
      <CollapsibleSection
        isOpen={expandedSections.brokerageConfig}
        onToggle={() => onToggleSection("brokerageConfig")}
        icon={User}
        gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
        title="Brokerage Configuration"
        subtitle="Commission and brokerage terms"
        fieldCount="3 sections"
      >
        <BrokerageComp commissionStructure={commissionStructure} setCommissionStructure={setCommissionStructure} commissionAmounts={commissionAmounts} 
        setCommissionAmounts={setCommissionAmounts} showCommissionCalculation={showCommissionCalculation} setShowCommissionCalculation={setShowCommissionCalculation} />

      </CollapsibleSection>
    </div>
  );
}
