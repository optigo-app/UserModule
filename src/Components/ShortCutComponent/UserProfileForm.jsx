// UserProfileForm.jsx
import React from "react";
import { Grid, Button } from "@mui/material";
import {
  User,
  MapPin,
  Phone,
  Calendar,
  BookOpen,
  Camera,
  Upload,
  Trash2,
} from "lucide-react";
import {
  FormField,
  Input,
  InputWithIcon,
  Select,
  Textarea,
  SectionDivider,
} from "../Ui"; // Adjust import paths as needed

const UserProfileForm = ({
  fileInputRef,
  handleFileSelect,
  handleTakePhoto,
  photoError,
  photoPreview,
  setPhotoPreview,
  setProfilePhoto,
  profilePhoto,
  formatFileSize,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Name Fields */}
      <div>
        <SectionDivider icon={User} title="Full Name" />
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="First Name" required>
              <Input placeholder="John" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Middle Name">
              <Input placeholder="Optional" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Last Name" required>
              <Input placeholder="Doe" />
            </FormField>
          </Grid>
        </Grid>
      </div>

      {/* Address Fields */}
      <div>
        <SectionDivider icon={MapPin} title="Address Information" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Grid container rowSpacing={0} columnSpacing={2}>
            <Grid size={{xs:12, sm:6, md:4}}>
              <FormField label="City">
                <Input placeholder="New York" />
              </FormField>
            </Grid>
            <Grid size={{xs:12, sm:6, md:4}}>
              <FormField label="Area/District">
                <Input placeholder="Manhattan" />
              </FormField>
            </Grid>
            <Grid size={{xs:12, sm:6, md:4}}>
              <FormField label="Zip/Postal Code">
                <Input placeholder="10001" />
              </FormField>
            </Grid>
          </Grid>

          <Grid container rowSpacing={0} columnSpacing={2}>
            <Grid size={{xs:12, sm:6}}>
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
            </Grid>
            <Grid size={{xs:12, sm:6}}>
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
            </Grid>
          </Grid>

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
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid size={{xs:12, sm:6, md:4}}>
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
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Mobile Number" required>
              <InputWithIcon icon={Phone} placeholder="123-456-7890" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Telephone">
              <Input placeholder="Optional landline" />
            </FormField>
          </Grid>
        </Grid>
      </div>

      {/* Personal Details */}
      <div>
        <SectionDivider icon={Calendar} title="Personal Details" />
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid size={{xs:12, sm:6}}>
            <FormField label="Date of Birth">
              <InputWithIcon icon={Calendar} type="date" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6}}>
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
          </Grid>
        </Grid>
      </div>

      {/* Additional Information */}
      <div>
        <SectionDivider icon={BookOpen} title="Additional Information" />
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Religion">
              <Input placeholder="Optional" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Festival Preference">
              <Input placeholder="Optional" />
            </FormField>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <FormField label="Profession">
              <Input placeholder="e.g., Business Owner" />
            </FormField>
          </Grid>
        </Grid>
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
            style={{ display: "none" }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Upload buttons */}
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="outlined" onClick={() => fileInputRef.current?.click()}>
                <Upload size={16} />
                Choose File
              </Button>
              <Button variant="outlined" onClick={handleTakePhoto}>
                <Camera size={16} />
                Take Photo
              </Button>
            </div>

            {/* Error message */}
            {photoError && (
              <div
                style={{
                  fontSize: 14,
                  color: "#dc2626",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 6,
                  padding: 12,
                }}
              >
                {photoError}
              </div>
            )}

            {/* Photo preview */}
            {photoPreview && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h5
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#374151",
                      margin: 0,
                    }}
                  >
                    Photo Preview
                  </h5>
                </div>

                <div style={{ position: "relative", display: "inline-block", width: 128 }}>
                  <img
                    src={photoPreview}
                    alt="Profile preview"
                    style={{
                      width: 128,
                      height: 128,
                      objectFit: "cover",
                      borderRadius: 8,
                      border: "2px solid #e5e7eb",
                      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
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
                      position: "absolute",
                      top: -8,
                      right: -8,
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Trash2 />
                  </button>

                  {profilePhoto && (
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                      File: {profilePhoto.name} ({formatFileSize(profilePhoto.size)})
                    </div>
                  )}
                </div>
              </div>
            )}
            <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
              Supported formats: JPG, PNG, GIF (Max 5MB)
            </p>
          </div>
        </FormField>
      </div>
    </div>
  );
};

export default UserProfileForm;
