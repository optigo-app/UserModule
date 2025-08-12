"use client";

import React, { useState, useEffect, lazy, useMemo } from "react";
import { Box, Card, CardContent, Typography, Container, Paper } from "@mui/material";
import { steps } from "../../Components/Data/constants";
import Stepper from "../../Components/Stepper/StepperComp";
import { FormHeaderSection } from "../../Components/Header/FormHeaderSection";
import { FormHeader } from "../../Components/Header/form-header";
import FormNavigation from "../../Components/Home/form-navigation";
import FormFooter from "../../Components/Footer/form-footer";

const StepComponents = {
  1: lazy(() => import("../../Components/Step/user-info-step")),
  2: lazy(() => import("../../Components/Step/CompanyStep")),
  3: lazy(() => import("../../Components/Step/BankingStep")),
  4: lazy(() => import("../../Components/Step/PreferencesStep")),
  5: lazy(() => import("../../Components/Step/DocumentsStep")),
  6: lazy(() => import("../../Components/Step/NotificationsStep")),
  7: lazy(() => import("../../Components/Step/PackagesStep")),
  8: lazy(() => import("../../Components/Step/ShippingStep")),
};

export default function CustomerForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedTrades: [],
    emailAlerts: [],
    mobileAlerts: [],
    companyType: "new",
  });
  const [expandedSections, setExpandedSections] = useState({
    accountInfo: true,
    personalInfo: true,
    companySelection: true,
    basicCompanyInfo: true,
    companyAddress: true,
    taxRegistration: true,
    bankingInfo: true,
    shippingPreferences: true,
    qualityCertification: true,
    specialInstructions: true,
    requiredDocuments: true,
    optionalDocuments: true,
    additionalDocuments: false,
    emailNotifications: true,
    smsNotifications: true,
    notificationPreferences: true,
    pricePolicy: true,
    termsPackages: true,
    brokerageConfig: true,
    shippingConfig: true,
    currencyRegional: true,
    completionSummary: true,
});
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [animatingStep, setAnimatingStep] = useState(null);

  const currentStepInfo = steps[currentStep - 1];

  // Auto-save effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoSaving(true);
      setTimeout(() => {
        setIsAutoSaving(false);
        setLastSaved(new Date());
      }, 1500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [formData]);

  // Toggle expand
  const toggleSection = (section) =>
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));

  // Step Navigation
  const goToStep = (stepId) => {
    setAnimatingStep(currentStep);
    setTimeout(() => {
      setCurrentStep(stepId);
      setAnimatingStep(null);
    }, 300);
  };

  const nextStep = () => {
    setAnimatingStep(currentStep);
    setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    setTimeout(() => {
      if (currentStep < steps.length) setCurrentStep(currentStep + 1);
      setAnimatingStep(null);
    }, 300);
  };

  const prevStep = () => {
    setAnimatingStep(currentStep);
    setTimeout(() => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
      setAnimatingStep(null);
    }, 300);
  };

  // Transition style memoized
  const transitionStyle = useMemo(
    () => ({
      transition: "all 0.3s ease",
      opacity: animatingStep === currentStep ? 0 : 1,
      transform: animatingStep === currentStep ? "translateX(10px)" : "translateX(0)",
    }),
    [animatingStep, currentStep]
  );

  // Render Step
  const renderStepContent = () => {
    const StepComponent = StepComponents[currentStep];
    if (!StepComponent) {
      return (
        <Typography variant="h4" sx={{ fontWeight: 500, color: "#1f2937" }}>
          Thank you for your registration!
        </Typography>
      );
    }
    return (
      <Box sx={transitionStyle}>
        <StepComponent
          expandedSections={expandedSections}
          onToggleSection={toggleSection}
          {...formData}
          setFormData={setFormData}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      {/* Prototype Badge */}
      <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 50 }}>
        <Paper
          sx={{
            background: "linear-gradient(to right, #fb923c, #ef4444)",
            color: "#fff",
            fontWeight: 500,
            px: 2,
            py: 0.5,
            borderBottomLeftRadius: "8px",
            boxShadow: 3,
          }}
        >
          In Development
        </Paper>
      </Box>

      <Container sx={{ py: 6 }}>
        <FormHeaderSection isAutoSaving={isAutoSaving} lastSaved={lastSaved} />

        <Box mt={4}>
          <Stepper
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={goToStep}
          />
        </Box>

        <Card sx={{ minHeight: 700, boxShadow: 4 }}>
          <FormHeader
            currentStepInfo={currentStepInfo}
            currentStep={currentStep}
            showHelp={showHelp}
            onToggleHelp={() => setShowHelp((prev) => !prev)}
          />
          <CardContent>{renderStepContent()}</CardContent>
        </Card>

        <Box mt={4}>
          <FormNavigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onPrevious={prevStep}
            onNext={nextStep}
            onSaveDraft={() => console.log("Saving draft...")}
            onComplete={() => console.log("Completing registration...")}
          />
        </Box>

        <Box mt={4}>
          <FormFooter />
        </Box>
      </Container>
    </Box>
  );
}
