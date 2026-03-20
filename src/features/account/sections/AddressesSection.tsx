import { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';
import { AddressCard } from '../components/AddressCard';
import { EmptyState } from '../components/EmptyState';
import { AccountButton } from '../components/AccountButton';
import { AddressFormModal } from '../components/AddressFormModal';
import { DeleteConfirmModal } from '../components/DeleteConfirmModal';
import { FormAlert } from '../components/FormAlert';
import { CustomerAddress } from '../types';
import { useCustomerAddresses } from '../hooks';

export function AddressesSection() {
  const { addresses, isLoading, isSaving, error, createAddress, editAddress, removeAddress, makeDefaultAddress } =
    useCustomerAddresses();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<CustomerAddress | null>(null);
  const [deletingAddressId, setDeletingAddressId] = useState<string | null>(null);

  const handleAddAddress = async (address: Omit<CustomerAddress, 'id' | 'isDefault'>) => {
    await createAddress(address);
    setIsAddModalOpen(false);
  };

  const handleEditAddress = (address: CustomerAddress) => {
    setEditingAddress(address);
  };

  const handleUpdateAddress = async (updatedAddress: CustomerAddress) => {
    await editAddress(updatedAddress);
    setEditingAddress(null);
  };

  const handleDeleteAddress = (addressId: string) => {
    setDeletingAddressId(addressId);
  };

  const confirmDeleteAddress = async () => {
    if (deletingAddressId) {
      await removeAddress(deletingAddressId);
      setDeletingAddressId(null);
    }
  };

  const handleSetDefault = async (addressId: string) => {
    await makeDefaultAddress(addressId);
  };

  return (
    <div>
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2
            style={{
              fontSize: '22px',
              lineHeight: '30px',
              fontWeight: '600',
              color: '#101828',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Saved Addresses
          </h2>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: '#667085',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginTop: '4px'
            }}
          >
            Manage your shipping and billing addresses
          </p>
        </div>

        {addresses.length > 0 && (
          <AccountButton
            variant="primary"
            size="md"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus size={16} />
            Add address
          </AccountButton>
        )}
      </div>

      {error && (
        <div style={{ marginBottom: '16px' }}>
          <FormAlert type="error">{error}</FormAlert>
        </div>
      )}

      {isLoading ? (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
          }}
        >
          <p
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: '#667085',
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0
            }}
          >
            Loading addresses...
          </p>
        </div>
      ) : addresses.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '16px'
          }}
        >
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={handleEditAddress}
              onDelete={handleDeleteAddress}
              onSetDefault={handleSetDefault}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '12px',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
          }}
        >
          <EmptyState
            icon={<MapPin size={32} />}
            title="No addresses saved"
            description="Add a shipping address to make checkout faster and easier."
            action={
              <AccountButton variant="primary" size="md" onClick={() => setIsAddModalOpen(true)}>
                <Plus size={16} />
                Add address
              </AccountButton>
            }
          />
        </div>
      )}

      {/* Add Address Modal */}
      {isAddModalOpen && (
        <AddressFormModal
            onClose={() => setIsAddModalOpen(false)}
            onSave={handleAddAddress}
          />
        )}

      {/* Edit Address Modal */}
      {editingAddress && (
        <AddressFormModal
          address={editingAddress}
          onClose={() => setEditingAddress(null)}
          onSave={handleUpdateAddress}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deletingAddressId && (
        <DeleteConfirmModal
          title="Delete address"
          description="Are you sure you want to delete this address? This action cannot be undone."
          onConfirm={() => void confirmDeleteAddress()}
          onCancel={() => setDeletingAddressId(null)}
        />
      )}

      {isSaving && (
        <div style={{ marginTop: '16px' }}>
          <FormAlert type="info">Saving address changes...</FormAlert>
        </div>
      )}
    </div>
  );
}
