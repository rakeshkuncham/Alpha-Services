# Alpha Service - 24/7 Service Management Platform

![Alpha Service Logo](./public/alpha-service-logo.svg)

## Overview

Alpha Service is a comprehensive full-stack service management platform that connects users with verified service providers for various needs including food delivery, groceries, medicine, transport, and more. Built with modern web technologies, it provides a seamless experience for both customers and service providers.

## Author

**Rakesh Kuncham**  
📧 Email: rakeshkuncham777@gmail.com  
🔗 LinkedIn: [Connect with Rakesh](https://linkedin.com/in/rakeshkuncham)

## 🚀 Features

### For Users
- **Service Booking**: Book various services including food delivery, grocery delivery, medicine delivery, and transportation
- **Real-time Tracking**: Track your orders and service requests in real-time
- **Multiple Payment Options**: Support for UPI, credit/debit cards, and digital wallets
- **Order History**: View complete history of all your service requests
- **Profile Management**: Manage personal information and preferences
- **24/7 Support**: Round-the-clock customer support

### For Service Providers
- **Dashboard Management**: Comprehensive dashboard to manage orders and customers
- **Order Notifications**: Real-time notifications for new service requests
- **Earnings Tracking**: Monitor earnings and completed services
- **Service Area Mapping**: Define and manage service coverage areas
- **Customer Management**: Handle customer interactions and feedback
- **Performance Analytics**: Track service performance and ratings

### Admin Features
- **User Management**: Manage both customers and service providers
- **Service Provider Verification**: Approve and verify service providers
- **Order Monitoring**: Monitor all orders and transactions
- **Analytics Dashboard**: Comprehensive analytics and reporting
- **Payment Management**: Handle payment processing and disputes

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet & React-Leaflet** - Interactive maps for location services
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Sequelize ORM** - Database object-relational mapping
- **SQLite** - Lightweight database for development
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
alpha-service/
├── backend/                    # Backend API server
│   ├── src/
│   │   ├── config/            # Database and app configuration
│   │   ├── controllers/       # Route controllers
│   │   ├── middleware/        # Authentication and validation middleware
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   └── server.js         # Main server file
│   ├── .env                  # Environment variables
│   └── package.json          # Backend dependencies
├── frontend/                  # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── contexts/        # React contexts
│   │   ├── data/           # Static data and configurations
│   │   └── utils/          # Utility functions
│   └── package.json         # Frontend dependencies
├── docs/                     # Documentation files
├── public/                   # Static assets
├── src/                      # Main application source
│   ├── components/          # Shared components
│   │   ├── auth/           # Authentication components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── orders/         # Order management components
│   │   ├── payments/       # Payment components
│   │   └── map/           # Map and location components
│   ├── pages/              # Application pages
│   ├── contexts/           # React context providers
│   └── data/              # Application data
├── package.json            # Root dependencies
└── README.md              # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakeshkuncham/alpha-service.git
   cd alpha-service
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database Configuration
   DATABASE_URL=sqlite:./database.sqlite
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   ```

4. **Database Setup**
   ```bash
   cd backend
   npm run migrate  # Run database migrations
   npm run seed     # Seed initial data (optional)
   cd ..
   ```

5. **Start the application**
   
   **Development Mode:**
   ```bash
   # Start backend server (Terminal 1)
   cd backend
   npm run dev
   
   # Start frontend development server (Terminal 2)
   npm run dev
   ```
   
   **Production Mode:**
   ```bash
   # Build the application
   npm run build
   
   # Start production server
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📱 Application Features

### User Registration & Authentication
- Secure user registration with email verification
- JWT-based authentication system
- Role-based access control (User, Service Provider, Admin)
- Password reset functionality with OTP verification

### Service Management
- **Food Delivery**: Order from restaurants with real-time tracking
- **Grocery Delivery**: Fresh groceries with scheduled delivery
- **Medicine Delivery**: 24/7 medicine delivery with prescription upload
- **Transportation**: Bike taxi, cab service, and auto rickshaw booking
- **Goods Transport**: Reliable goods transportation with insurance

### Payment Integration
- Multiple payment methods (UPI, Cards, Digital Wallets)
- Secure payment processing
- Transaction history and receipts
- Refund and dispute management

### Real-time Features
- Live order tracking with GPS integration
- Real-time notifications for order updates
- Chat support system
- Push notifications for mobile devices

### Analytics & Reporting
- User behavior analytics
- Service provider performance metrics
- Revenue and transaction reports
- Customer satisfaction tracking

## 🔧 API Documentation

### Authentication Endpoints
```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/logout       # User logout
POST /api/auth/reset        # Password reset
```

### User Endpoints
```
GET  /api/users/profile     # Get user profile
PUT  /api/users/profile     # Update user profile
GET  /api/users/orders      # Get user orders
```

### Service Endpoints
```
GET  /api/services          # Get all services
GET  /api/services/:id      # Get service details
POST /api/orders            # Create new order
GET  /api/orders/:id        # Get order details
PUT  /api/orders/:id        # Update order status
```

### Payment Endpoints
```
POST /api/payments/process  # Process payment
GET  /api/payments/history  # Payment history
POST /api/payments/refund   # Process refund
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run frontend tests
cd frontend && npm test

# Run backend tests
cd backend && npm test

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- **Unit Tests**: Component and function testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full application workflow testing

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build

# The built files will be in the 'dist' directory
```

### Deployment Options

1. **Netlify/Vercel** (Frontend)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Heroku** (Full Stack)
   - Create Heroku app
   - Set environment variables
   - Deploy using Git or GitHub integration

3. **AWS/DigitalOcean** (VPS)
   - Set up server with Node.js
   - Configure reverse proxy (Nginx)
   - Set up SSL certificates
   - Configure database (PostgreSQL/MySQL for production)

### Environment Variables (Production)
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=your_production_database_url
JWT_SECRET=your_secure_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_SERVICE_API_KEY=your_email_service_key
```

## 🤝 Contributing

We welcome contributions to Alpha Service! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please:

1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce (for bugs)
4. Add relevant labels and screenshots

## 📞 Support & Contact

For support, questions, or collaboration opportunities:

- **Email**: rakeshkuncham777@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/rakeshkuncham/alpha-service/issues)
- **LinkedIn**: [Rakesh Kuncham](https://linkedin.com/in/rakeshkuncham)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Leaflet for the interactive maps
- All open-source contributors who made this project possible

## 📈 Roadmap

### Upcoming Features
- [ ] Mobile application (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Voice ordering capability
- [ ] AI-powered service recommendations
- [ ] Blockchain-based payment system
- [ ] IoT integration for smart delivery

### Version History
- **v1.0.0** - Initial release with core features
- **v1.1.0** - Added payment integration
- **v1.2.0** - Enhanced dashboard and analytics
- **v2.0.0** - Mobile app and advanced features (planned)

---

**Built with ❤️ by Rakesh Kuncham**

*Alpha Service - Connecting people with services, 24/7*