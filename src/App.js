import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

// Define styled components

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
  padding: 40px 20px 20px 20px;
  overflow-y: none; // Enable scrolling within this section
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const UploadSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem 40px;
    width: 80%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #2c3e50;
`;

const InvoicePreview = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const Select = styled.select`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Opaque background
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  max-width: 500px;
`;

const states = [
  { value: "AL", name: "Alabama" },
  { value: "AK", name: "Alaska" },
  { value: "AZ", name: "Arizona" },
  { value: "AR", name: "Arkansas" },
  { value: "CA", name: "California" },
  { value: "CO", name: "Colorado" },
  { value: "CT", name: "Connecticut" },
  { value: "DE", name: "Delaware" },
  { value: "FL", name: "Florida" },
  { value: "GA", name: "Georgia" },
  { value: "HI", name: "Hawaii" },
  { value: "ID", name: "Idaho" },
  { value: "IL", name: "Illinois" },
  { value: "IN", name: "Indiana" },
  { value: "IA", name: "Iowa" },
  { value: "KS", name: "Kansas" },
  { value: "KY", name: "Kentucky" },
  { value: "LA", name: "Louisiana" },
  { value: "ME", name: "Maine" },
  { value: "MD", name: "Maryland" },
  { value: "MA", name: "Massachusetts" },
  { value: "MI", name: "Michigan" },
  { value: "MN", name: "Minnesota" },
  { value: "MS", name: "Mississippi" },
  { value: "MO", name: "Missouri" },
  { value: "MT", name: "Montana" },
  { value: "NE", name: "Nebraska" },
  { value: "NV", name: "Nevada" },
  { value: "NH", name: "New Hampshire" },
  { value: "NJ", name: "New Jersey" },
  { value: "NM", name: "New Mexico" },
  { value: "NY", name: "New York" },
  { value: "NC", name: "North Carolina" },
  { value: "ND", name: "North Dakota" },
  { value: "OH", name: "Ohio" },
  { value: "OK", name: "Oklahoma" },
  { value: "OR", name: "Oregon" },
  { value: "PA", name: "Pennsylvania" },
  { value: "RI", name: "Rhode Island" },
  { value: "SC", name: "South Carolina" },
  { value: "SD", name: "South Dakota" },
  { value: "TN", name: "Tennessee" },
  { value: "TX", name: "Texas" },
  { value: "UT", name: "Utah" },
  { value: "VT", name: "Vermont" },
  { value: "VA", name: "Virginia" },
  { value: "WA", name: "Washington" },
  { value: "WV", name: "West Virginia" },
  { value: "WI", name: "Wisconsin" },
  { value: "WY", name: "Wyoming" },
];

function App() {
  const [customerName, setCustomerName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // Added state for file
  const [invoicePreview, setInvoicePreview] = useState(null); // Added state for invoice preview
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle file upload
  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalVisible(true); // Show the modal
    setInvoicePreview(
      `Invoice for ${customerName}, Address: ${street}, ${city}, ${state}, ${zipCode}`
    );
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="app">
      <AppContainer>
        {/* <Title>Invoice Generator</Title> */}
        <UploadSection>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="file-upload">Upload CSV File:</Label>
            <Input id="file-upload" type="file" onChange={handleFileUpload} />
            <Label>Customer Name:</Label>
            <Input
              type="text"
              placeholder="Enter Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <Label>Street:</Label>
            <Input
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Label>City:</Label>
            <Input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Label>State:</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.name}
                </option>
              ))}
            </Select>
            <Label>Zip Code:</Label>
            <Input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Button type="submit">Generate Invoice</Button>
          </Form>
        </UploadSection>
      </AppContainer>
      <ModalBackdrop show={isModalVisible} onClick={handleCloseModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {invoicePreview && <InvoicePreview>{invoicePreview}</InvoicePreview>}
        </ModalContent>
      </ModalBackdrop>
    </div>
  );
}

export default App;
