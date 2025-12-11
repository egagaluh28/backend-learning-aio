# SuperApps Starter API - Documentation & Testing Files

## 📁 Files Overview

### 📚 Documentation

- **[API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md)** - Complete API documentation with all endpoints, request/response formats, and data models

### 🔧 Postman Collections

- **[SuperApps-Starter-API.postman_collection.json](./postman/SuperApps-Starter-API.postman_collection.json)** - Complete API collection for testing all endpoints
- **[SuperApps-Starter-API-Sample-Data.postman_collection.json](./postman/SuperApps-Starter-API-Sample-Data.postman_collection.json)** - Collection with pre-filled sample data for quick testing
- **[SuperApps-Starter-API.postman_environment.json](./postman/SuperApps-Starter-API.postman_environment.json)** - Environment variables for Postman
- **[README.md](./postman/README.md)** - Detailed guide for using Postman collections

## 🚀 Quick Start

### 1. Import to Postman

1. Open Postman
2. Import both collection files and the environment file
3. Select the "SuperApps Starter API Environment"
4. Make sure your API server is running on `http://localhost:3000`

### 2. Choose Testing Approach

#### Option A: Manual Testing

Use the main collection `SuperApps-Starter-API.postman_collection.json` for:

- Individual endpoint testing
- Custom data testing
- Complete CRUD operations testing

#### Option B: Quick Setup with Sample Data

Use the sample data collection `SuperApps-Starter-API-Sample-Data.postman_collection.json` for:

- Quick setup with realistic data
- End-to-end testing scenario
- Demonstration purposes

## 📋 API Endpoints Summary

### Master Data Management

| Module           | Endpoints              | Description                       |
| ---------------- | ---------------------- | --------------------------------- |
| **Company**      | GET, POST, PUT, DELETE | Company management                |
| **Department**   | GET, POST, PUT, DELETE | Hierarchical department structure |
| **Education**    | GET, POST, PUT, DELETE | Education level management        |
| **Gender**       | GET, POST, PUT, DELETE | Gender options                    |
| **Level**        | GET, POST, PUT, DELETE | Employee levels/grades            |
| **Site**         | GET, POST, PUT, DELETE | Office locations                  |
| **Social Media** | GET, POST, PUT, DELETE | Social media platforms            |

### Employee Management

| Module                    | Endpoints              | Description                                   |
| ------------------------- | ---------------------- | --------------------------------------------- |
| **Employee**              | GET, PUT               | Employee profile management with photo upload |
| **Employee Documents**    | GET, POST, PUT, DELETE | Document attachments                          |
| **Employee Education**    | GET, POST, PUT, DELETE | Education history                             |
| **Employee Experience**   | GET, POST, PUT, DELETE | Work experience                               |
| **Employee Skills**       | GET, POST, PUT, DELETE | Skills and competencies                       |
| **Employee Social Media** | GET, POST, PUT, DELETE | Social media accounts                         |
| **Employee ComBen**       | GET, POST, PUT, DELETE | Compensation & benefits                       |

## 🎯 Testing Scenarios

### Scenario 1: Complete Setup

1. **Setup Master Data** (Step 1 in sample collection)
   - Create genders, education levels, companies, departments, etc.
2. **Employee Management**
   - Update employee profiles with complete information
3. **Employee Related Data**
   - Add education history, work experience, skills, etc.
4. **Verification**
   - Verify all data through GET requests

### Scenario 2: Individual Module Testing

1. Pick any module from the main collection
2. Test CREATE → READ → UPDATE → DELETE operations
3. Verify response formats and error handling

## 🔍 Response Format

All APIs follow this standard format:

```json
{
  "success": true/false,
  "message": "Response message",
  "data": "actual response data or error details"
}
```

## 🛠️ Features Tested

- ✅ CRUD Operations for all entities
- ✅ File upload (employee photos)
- ✅ Hierarchical data (departments)
- ✅ Foreign key relationships
- ✅ Soft delete functionality
- ✅ Error handling
- ✅ Data validation

## 📝 Notes

- Make sure your database is properly set up before testing
- Server should be running on port 3000 (or update environment variables)
- File upload requires proper directory permissions
- Some operations require existing data (use sample data collection first)

## 🔗 Related Files

- **Database Schema**: `prisma/schema1.prisma`
- **Server Configuration**: `src/server.ts`
- **Route Files**: `src/routes/v1/`
- **Utilities**: `src/utils/`, `src/tools/`

Happy Testing! 🎉
