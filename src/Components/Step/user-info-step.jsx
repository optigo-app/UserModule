import React, { useState, useRef } from 'react';
import {
  User,
  Mail,
  Calendar,
  Phone,
  MapPin,
  BookOpen,
  Star,
  Camera,
  Upload,
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Plus,
  X,
  Trash2,
} from 'lucide-react';
import { FormField, Input, Textarea, Button, SectionDivider, InputWithIcon, Select, Badge, CollapsibleSection } from '../Ui';
import { Grid } from '@mui/material';
import UserProfileForm from '../ShortCutComponent/UserProfileForm';


export default function UserInfoStep({
  expandedSections,
  selectedTrades,
  onToggleSection,
  onAddTrade,
  onRemoveTrade,
}) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setPhotoError('Please select a valid image file (JPG, PNG, or GIF)');
      return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setPhotoError('File size must be less than 5MB');
      return;
    }

    setProfilePhoto(file);
    setPhotoError(null);

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    setPhotoPreview(null);
    setPhotoError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTakePhoto = () => {
    fileInputRef.current?.click();
  };
  function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} Bytes`;
    else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    else return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Account Info */}
      <CollapsibleSection
        isOpen={expandedSections.accountInfo}
        onToggle={() => onToggleSection('accountInfo')}
        icon={User}
        gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
        title="Account Information"
        subtitle="Login credentials and basic account setup"
        fieldCount="4 fields"
      >
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField
              label="User Email/ID"
              required
              tooltip="This will be used as the primary login credential. Make sure it's a valid email address."
            >
              <InputWithIcon
                icon={Mail}
                type="email"
                placeholder="user@company.com"
              />
            </FormField>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField
              label="User Code"
              tooltip="Unique identifier - leave blank for auto-generation based on name and timestamp"
            >
              <div style={{ display: 'flex', gap: 8 }}>
                <Input
                  placeholder="AUTO-GENERATED"
                  style={{ flex: 1 }}
                />
              </div>
            </FormField>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField label="Joining Date" tooltip="When this customer account was created">
              <InputWithIcon
                icon={Calendar}
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </FormField>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField label="Reference By" tooltip="Person or entity who referred this customer">
              <InputWithIcon
                icon={User}
                placeholder="Enter name or ID"
              />
            </FormField>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField label="Reference User Code" tooltip="Code of the referring user if applicable">
              <Input placeholder="If applicable" />
            </FormField>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormField label="Assigned Broker" tooltip="Select a broker to handle this customer's account">
              <Select
                placeholder="Select broker (optional)"
                options={[
                  { value: "broker1", label: "John Smith - Premium Broker • 5+ years" },
                  { value: "broker2", label: "Sarah Johnson - Senior Broker • 8+ years" },
                ]}
              />
            </FormField>
          </Grid>
        </Grid>

      </CollapsibleSection>

      {/* Personal Info */}
      <CollapsibleSection
        isOpen={expandedSections.personalInfo}
        onToggle={() => onToggleSection('personalInfo')}
        icon={User}
        gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
        title="Personal Details"
        subtitle="Contact information and personal preferences"
        fieldCount="12+ fields"
      >
        <UserProfileForm
          fileInputRef={fileInputRef}
          handleFileSelect={handleFileSelect}
          handleTakePhoto={handleTakePhoto}
          photoError={photoError}
          photoPreview={photoPreview}
          setPhotoPreview={setPhotoPreview}
          setProfilePhoto={setProfilePhoto}
          profilePhoto={profilePhoto}
          formatFileSize={formatFileSize}
        />
      </CollapsibleSection>
    </div>
  );
}