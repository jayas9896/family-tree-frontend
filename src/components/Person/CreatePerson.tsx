// src/components/Person/CreatePerson.tsx
import { useState } from 'react';
import { post } from '@aws-amplify/api-rest';

export function CreatePerson() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await post({
                apiName: 'FamilyTreeAPI', 
                path: '/api/person', 
                options: {
                body: formData,
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization will be automatically added by Amplify
                }
            }});
            console.log('Person created:', response);
            // Clear form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error creating person:', error);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="First Name"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Last Name"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Email"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Phone"
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>
                    Create Person
                </button>
            </form>
        </div>
    );
}

// Inline styles
const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box' as const
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

export default CreatePerson;

