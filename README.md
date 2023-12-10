```markdown
Automated Data Processing Web App
├── public
│ ├── index.html # Entry point for the web app
│ └── favicon.ico # Favicon for the web app
├── src
│ ├── components
│ │ ├── DataUpload.js # Component for uploading CSV files
│ │ └── InvoiceDisplay.js # Component to display the processed invoice
│ ├── App.js # Main React application file
│ ├── App.css # CSS for the App component
│ └── index.js # Root JavaScript file for React
├── functions # Firebase Cloud Functions for serverless backend processing
│ ├── index.js # Main file for Cloud Functions
│ └── invoiceGenerator.js # Handles the generation of invoices from CSV data
├── package.json # Manages dependencies and scripts for the frontend
├── .firebaserc # Firebase project configuration
├── firebase.json # Configures Firebase services
└── README.md # Documentation for the web app
```

# Invoice Generator App

## Architecture

### Frontend

- Built with **React**
- Hosted on **Firebase Hosting**
- Key files:
  - `public/index.html`: Main HTML page
  - `src/DataUpload.js`: Upload CSV data
  - `src/InvoiceDisplay.js`: Display invoices

### Backend

- **Firebase Cloud Functions**
  - `functions/index.js`
  - `functions/invoiceGenerator.js`: Generates invoice content

### Configuration

- `package.json`: Frontend dependencies
- `.firebaserc` & `firebase.json`: Firebase configuration
- `README.md`: Documentation

## Summary

Key technologies:

- React (Frontend)
- Firebase Hosting (Frontend hosting)
- Firebase Cloud Functions (Backend)

Core files/components:

- Data Upload
- Invoice Display
- Cloud Functions for processing & generation
