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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
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

          <FormField
            label="User Code"
            tooltip="Unique identifier - leave blank for auto-generation based on name and timestamp"
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <Input
                placeholder="AUTO-GENERATED"
                style={{ flex: 1 }}
              />
              <Button variant="outline" size="sm">
                <RefreshCw size={16} />
              </Button>
            </div>
          </FormField>

          <FormField label="Joining Date" tooltip="When this customer account was created">
            <InputWithIcon
              icon={Calendar}
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </FormField>

          <FormField label="Reference By" tooltip="Person or entity who referred this customer">
            <InputWithIcon
              icon={User}
              placeholder="Enter name or ID"
            />
          </FormField>

          <FormField label="Reference User Code" tooltip="Code of the referring user if applicable">
            <Input placeholder="If applicable" />
          </FormField>

          <FormField label="Assigned Broker" tooltip="Select a broker to handle this customer's account">
            <Select
              placeholder="Select broker (optional)"
              options={[
                { value: "broker1", label: "John Smith - Premium Broker • 5+ years" },
                { value: "broker2", label: "Sarah Johnson - Senior Broker • 8+ years" },
              ]}
            />

          </FormField>
        </div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Name Fields */}
          <div>
            <SectionDivider icon={User} title="Full Name" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <FormField label="First Name" required>
                <Input placeholder="John" />
              </FormField>
              <FormField label="Middle Name">
                <Input placeholder="Optional" />
              </FormField>
              <FormField label="Last Name" required>
                <Input placeholder="Doe" />
              </FormField>
            </div>
          </div>

          {/* Address Fields */}
          <div>
            <SectionDivider icon={MapPin} title="Address Information" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                <FormField label="City">
                  <Input placeholder="New York" />
                </FormField>
                <FormField label="Area/District">
                  <Input placeholder="Manhattan" />
                </FormField>
                <FormField label="Zip/Postal Code">
                  <Input placeholder="10001" />
                </FormField>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px'
              }}>
                <FormField label="State/Province">
                  <Select
                    placeholder="Select state"
                    options={[
                      { value: "ca", label: "California" },
                      { value: "ny", label: "New York" },
                      { value: "tx", label: "Texas" },
                      { value: "fl", label: "Florida" },
                    ]}
                  />

                </FormField>
                <FormField label="Country">
                  <Select
                    placeholder="Select country"
                    options={[
                      { value: "us", label: "🇺🇸 United States" },
                      { value: "in", label: "🇮🇳 India" },
                      { value: "uk", label: "🇬🇧 United Kingdom" },
                      { value: "ca", label: "🇨🇦 Canada" },
                    ]}
                  />
                </FormField>
              </div>

              <FormField label="Full Address">
                <Textarea
                  placeholder="Enter complete address including street, building number, etc."
                  rows={3}
                />
              </FormField>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <SectionDivider icon={Phone} title="Contact Information" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <FormField label="Country Code">
                <Select
                  placeholder="+1"
                  options={[
                    { value: "+1", label: "+1 (US/CA)" },
                    { value: "+91", label: "+91 (India)" },
                    { value: "+44", label: "+44 (UK)" },
                    { value: "+61", label: "+61 (Australia)" },
                  ]}
                />
              </FormField>
              <FormField label="Mobile Number" required>
                <InputWithIcon
                  icon={Phone}
                  placeholder="123-456-7890"
                />
              </FormField>
              <FormField label="Telephone">
                <Input placeholder="Optional landline" />
              </FormField>
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <SectionDivider icon={Calendar} title="Personal Details" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              <FormField label="Date of Birth">
                <InputWithIcon
                  icon={Calendar}
                  type="date"
                />
              </FormField>
              <FormField label="Marital Status">
                <Select
                  placeholder="Select status"
                  options={[
                    { value: "single", label: "Single" },
                    { value: "married", label: "Married" },
                    { value: "divorced", label: "Divorced" },
                    { value: "widowed", label: "Widowed" },
                  ]}
                />
              </FormField>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <SectionDivider icon={BookOpen} title="Additional Information" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <FormField label="Religion">
                <Input placeholder="Optional" />
              </FormField>
              <FormField label="Festival Preference">
                <Input placeholder="Optional" />
              </FormField>
              <FormField label="Profession">
                <Input placeholder="e.g., Business Owner" />
              </FormField>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <SectionDivider icon={Camera} title="Profile Photo" />
            <FormField label="Upload Photo" tooltip="Profile photo for identification purposes">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Upload buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload size={16} />
                    Choose File
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleTakePhoto}
                  >
                    <Camera size={16} />
                    Take Photo
                  </Button>
                </div>

                {/* Error message */}
                {photoError && (
                  <div style={{
                    fontSize: '14px',
                    color: '#dc2626',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '6px',
                    padding: '12px'
                  }}>
                    {photoError}
                  </div>
                )}

                {/* Photo preview */}
                {photoPreview && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h5 style={{ fontSize: '14px', fontWeight: '500', color: '#374151', margin: 0 }}>
                        Photo Preview
                      </h5>
                    </div>

                    <div style={{ position: 'relative', display: 'inline-block', width: '128px', }}>
                      <img
                        src={photoPreview}
                        alt="Profile preview"
                        style={{
                          width: '128px',
                          height: '128px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: '2px solid #e5e7eb',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                        }}
                      />

                      {/* Delete Icon */}
                      <button
                        onClick={() => {
                          setPhotoPreview(null);
                          setProfilePhoto(null);
                        }}
                        aria-label="Remove photo"
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          background: '#ef4444',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                        }}
                      >
                        <Trash2 />
                      </button>

                      {profilePhoto && (
                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                          File: {profilePhoto.name} ({formatFileSize(profilePhoto.size)})
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                  Supported formats: JPG, PNG, GIF (Max 5MB)
                </p>
              </div>
            </FormField>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}