# Tel Aviv Vet Clinics - Technical Specification Document

## 1. Project Overview

**Project Name:** Tel Aviv District Vet Clinics Status Platform  
**Project Manager:** Dima Levin  
**Date:** February 2026  
**Version:** 1.0

### 1.1 Business Goals
- Enable pet owners to quickly locate available veterinary clinics in real-time
- Empower clinics to self-manage their availability and service information
- Improve accessibility to veterinary care through visual map interface

### 1.2 Target Users
- **Primary:** Pet owners in Tel Aviv district seeking veterinary services
- **Secondary:** Veterinary clinic staff managing availability status

---

## 2. Functional Requirements

### 2.1 Public User Interface (Pet Owners)
| Req ID | Description | Priority |
|--------|-------------|----------|
| FR-01 | Display interactive map of all vet clinics | Must Have |
| FR-02 | Show real-time open/closed status per clinic | Must Have |
| FR-03 | Display available services per clinic | Must Have |
| FR-04 | Filter clinics by service type | Should Have |
| FR-05 | Filter by open/closed status | Should Have |
| FR-06 | Display clinic details (address, phone, hours) | Must Have |
| FR-07 | Mobile-responsive design | Must Have |

### 2.2 Clinic Management Interface
| Req ID | Description | Priority |
|--------|-------------|----------|
| CM-01 | Simple authentication for clinic staff | Must Have |
| CM-02 | Update open/closed status toggle | Must Have |
| CM-03 | Update available services checklist | Must Have |
| CM-04 | Update contact information | Should Have |
| CM-05 | Set regular operating hours | Should Have |

---

## 3. Technical Architecture

### 3.1 Technology Stack
- **Frontend:** React.js with Tailwind CSS
- **Map Integration:** Google Maps API / Leaflet.js (open source)
- **Data Storage:** Browser LocalStorage (MVP) / Future: REST API + Database
- **Hosting:** Static hosting (Netlify/Vercel for demo)

### 3.2 Data Model

#### Clinic Entity
```javascript
{
  id: "string (uuid)",
  name: "string",
  address: "string",
  coordinates: {
    lat: "number",
    lng: "number"
  },
  phone: "string",
  email: "string",
  isOpen: "boolean",
  operatingHours: {
    sunday: { open: "HH:MM", close: "HH:MM" },
    monday: { open: "HH:MM", close: "HH:MM" },
    // ... etc
  },
  services: ["string array"],
  lastUpdated: "ISO timestamp"
}
```

#### Available Services List
- Emergency Care
- Surgery
- Vaccination
- Dental Care
- X-Ray/Imaging
- Laboratory Tests
- Grooming
- Pet Hotel

### 3.3 API Endpoints (Future Phase)
```
GET    /api/clinics              - Get all clinics
GET    /api/clinics/:id          - Get specific clinic
POST   /api/clinics              - Create new clinic
PUT    /api/clinics/:id/status   - Update status
PUT    /api/clinics/:id/services - Update services
POST   /api/auth/login           - Clinic authentication
```

---

## 4. User Flows

### 4.1 Pet Owner Flow
1. Land on homepage with map
2. See all clinics as markers
3. Filter by services needed (optional)
4. Click marker to see clinic details
5. View open/closed status + available services
6. Get directions / call clinic

### 4.2 Clinic Staff Flow
1. Navigate to clinic portal
2. Login with credentials
3. Toggle open/closed status
4. Update available services
5. Confirm changes

---

## 5. UI/UX Wireframes

### 5.1 Main Map View (Public)
```
+----------------------------------+
|  [Logo] Tel Aviv Vet Clinics    |
|  [Filter: Services ▼] [Status ▼]|
+----------------------------------+
|                                  |
|     [  Interactive Map  ]        |
|     [  with Markers     ]        |
|                                  |
|  Sidebar:                        |
|  • Clinic Name ⚫ Open            |
|    Services: Emergency, Surgery  |
|    📍 Address | 📞 Phone         |
+----------------------------------+
```

### 5.2 Clinic Dashboard
```
+----------------------------------+
|  Clinic Dashboard - [Clinic Name]|
+----------------------------------+
|  Status: [Toggle] Open / Closed  |
|                                  |
|  Available Services:             |
|  ☑ Emergency Care                |
|  ☑ Surgery                       |
|  ☐ Pet Hotel                     |
|  ☐ Grooming                      |
|                                  |
|  [Save Changes]                  |
+----------------------------------+
```

---

## 6. Development Phases

### Phase 1: MVP (Week 1-2)
- Static map with hardcoded clinics
- Basic clinic info display
- Simple filter functionality
- LocalStorage for status updates

### Phase 2: Enhanced Features (Week 3-4)
- Clinic authentication
- Dynamic data management
- Advanced filtering
- Mobile optimization

### Phase 3: Backend Integration (Future)
- REST API implementation
- Database (PostgreSQL/MongoDB)
- Real authentication system
- Admin panel for clinic management

---

## 7. Success Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 2 seconds |
| Mobile Usability | 95% responsive |
| Status Update Time | < 5 seconds |
| User Session Length | > 2 minutes avg |

---

## 8. Risk Management

| Risk | Impact | Mitigation |
|------|--------|------------|
| Google Maps API costs | Medium | Use free tier / Consider Leaflet.js |
| Data accuracy | High | Auto-reset status daily, require updates |
| Clinic adoption | High | Simple onboarding, clear value prop |
| Mobile performance | Medium | Optimize images, lazy loading |

---

## 9. Next Steps

1. ✅ Complete technical specification
2. ⏳ Design mockups
3. ⏳ Set up development environment
4. ⏳ Implement Phase 1 MVP
5. ⏳ User testing
6. ⏳ Deploy demo version

---

**Document Owner:** Dima Levin  
**Last Updated:** February 16, 2026  
**Status:** Draft for Review
