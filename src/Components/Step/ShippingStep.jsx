import React, { useState } from 'react'
import "../../Styles/shipping-step.scss"
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    Checkbox,
    Button,
    Grid,
    IconButton,
    FormControlLabel,
    Box,
} from "@mui/material";
import {
    Truck,
    DollarSign,
    User,
    Phone,
    CheckCircle2,
    Check,
    Zap,
    ChevronDown,
    ChevronRight,
    Plus,
    Edit,
    Print,
    Trash2,
    Printer,
    Lock,
    Unlock,
    MapPin,
} from "lucide-react"
import { Badge, CollapsibleSection, FormField, Input, Select, Textarea } from '../Ui';
import ShippingAddressesList from '../ShortCutComponent/ShippingAddressesList';
import ShippingAddressForm from '../ShortCutComponent/ShippingAddressForm';
import CurrReginoal from '../ShortCutComponent/CurrReginoal';
import RegistrationComplete from '../ShortCutComponent/RegistrationComplete';


const ShippingStep = ({ expandedSections, onToggleSection }) => {
    const [shippingAddresses, setShippingAddresses] = useState([
        {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            address: "123 Main Street, Apt 4B",
            country: "US",
            state: "NY",
            city: "New York",
            zipCode: "10001",
            mobile: "+1-555-123-4567",
            isDefault: true,
            isLocked: false,
        },
    ]);

    const [editingAddress, setEditingAddress] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);

    const addNewAddress = () => {
        const newAddress = {
            id: Date.now().toString(),
            firstName: "",
            lastName: "",
            address: "",
            country: "",
            state: "",
            city: "",
            zipCode: "",
            mobile: "",
            isDefault: false,
            isLocked: false,
        };
        setEditingAddress(newAddress);
        setIsAddingNew(true);
    };

    const editAddress = (address) => {
        setEditingAddress(address);
        setIsAddingNew(false);
    };

    const saveAddress = (address) => {
        if (address.isDefault) {
            setShippingAddresses((prev) =>
                prev.map((addr) => ({ ...addr, isDefault: false }))
            );
        }

        if (isAddingNew) {
            setShippingAddresses((prev) => [...prev, address]);
        } else {
            setShippingAddresses((prev) =>
                prev.map((addr) => (addr.id === address.id ? address : addr))
            );
        }

        setEditingAddress(null);
        setIsAddingNew(false);
    };

    const deleteAddress = (id) => {
        setShippingAddresses((prev) => prev.filter((addr) => addr.id !== id));
    };

    const toggleLock = (id) => {
        setShippingAddresses((prev) =>
            prev.map((addr) =>
                addr.id === id ? { ...addr, isLocked: !addr.isLocked } : addr
            )
        );
    };

    const setDefault = (id) => {
        setShippingAddresses((prev) =>
            prev.map((addr) => ({ ...addr, isDefault: addr.id === id }))
        );
    };

    const printLabel = (address) => {
        console.log("Printing label for:", address);
        alert(`Printing shipping label for ${address.firstName} ${address.lastName}`);
    };
    return (
        <div className='shipping-step'>
            {/* Price Policy */}
            <CollapsibleSection
                isOpen={expandedSections.shippingConfig}
                onToggle={() => onToggleSection("shippingConfig")}
                icon={Truck}
                gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
                title="Shipping Configuration"
                subtitle="Multiple shipping addresses and delivery settings"
                fieldCount={`${shippingAddresses.length} shipping addresses`}
            >
                <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Shipping Addresses</Typography>
                    <Button
                        variant="contained"
                        startIcon={<Plus size={18} />}
                        onClick={addNewAddress}
                        color="primary"
                    >
                        Add New Address
                    </Button>
                </Box>

                <ShippingAddressesList
                    addresses={shippingAddresses}
                    onEdit={editAddress}
                    onDelete={deleteAddress}
                    onToggleLock={toggleLock}
                    onPrint={printLabel}
                    onSetDefault={setDefault}
                />

                <ShippingAddressForm
                    address={editingAddress}
                    setAddress={setEditingAddress}
                    onSave={saveAddress}
                    onCancel={() => {
                        setEditingAddress(null);
                        setIsAddingNew(false);
                    }}
                    isAddingNew={isAddingNew}
                />
            </CollapsibleSection>

            {/* Terms & Packages */}
            <CollapsibleSection
                isOpen={expandedSections.termsPackages}
                onToggle={() => onToggleSection("termsPackages")}
                icon={DollarSign}
                gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                title="Currency & Regional Settings"
                subtitle="Currency preferences and regional configurations"
                fieldCount="5 fields"
            >
                <CurrReginoal />
            </CollapsibleSection>

            {/* Brokerage Configuration */}
            <CollapsibleSection
                isOpen={expandedSections.brokerageConfig}
                onToggle={() => onToggleSection("brokerageConfig")}
                icon={CheckCircle2}
                gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                title="Ready to Complete"
                subtitle="Final review and completion summary"
                fieldCount="summary"
            >
                <RegistrationComplete shippingAddresses={shippingAddresses} />
            </CollapsibleSection>
        </div>
    )
}

export default ShippingStep