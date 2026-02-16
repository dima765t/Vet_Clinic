// Tel Aviv Vet Clinics Project - Interview Presentation
// Run with: node create_presentation.js
// Required: npm install -g pptxgenjs

const pptxgen = require("pptxgenjs");

// Create presentation
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Dima Levin';
pres.title = 'Tel Aviv Vet Clinics Platform - Project Showcase';

// Color palette - Ocean Gradient theme
const colors = {
  primary: "065A82",      // Deep blue
  secondary: "1C7293",    // Teal
  accent: "21295C",       // Midnight
  success: "06D6A0",      // Green
  text: "FFFFFF",         // White
  textDark: "1E293B",     // Dark slate
  bg: "F8FAFC",           // Light background
  cardBg: "FFFFFF"        // Card background
};

// Helper function for consistent shadows
const makeShadow = () => ({
  type: "outer",
  blur: 6,
  offset: 2,
  angle: 135,
  color: "000000",
  opacity: 0.1
});

// ===========================
// SLIDE 1: TITLE SLIDE
// ===========================
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };

slide1.addText("Tel Aviv Vet Clinics", {
  x: 0.5, y: 1.5, w: 9, h: 1,
  fontSize: 48, bold: true, color: colors.text,
  align: "center", fontFace: "Calibri"
});

slide1.addText("Real-Time Status Platform", {
  x: 0.5, y: 2.7, w: 9, h: 0.6,
  fontSize: 32, color: colors.text,
  align: "center", fontFace: "Calibri"
});

slide1.addText([
  { text: "Project Showcase by ", options: {} },
  { text: "Dima Levin", options: { bold: true } }
], {
  x: 0.5, y: 4.2, w: 9, h: 0.5,
  fontSize: 18, color: colors.text,
  align: "center", fontFace: "Calibri"
});

slide1.addText("Project Manager | Product Manager", {
  x: 0.5, y: 4.7, w: 9, h: 0.4,
  fontSize: 14, color: colors.text, italic: true,
  align: "center", fontFace: "Calibri"
});

// ===========================
// SLIDE 2: PROJECT OVERVIEW
// ===========================
let slide2 = pres.addSlide();
slide2.background = { color: colors.bg };

slide2.addText("Project Overview", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Card 1: Business Problem
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 0.08, h: 1.8,
  fill: { color: colors.primary }
});

slide2.addText("🎯 Business Problem", {
  x: 0.8, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide2.addText([
  { text: "Pet owners struggle to find available vet clinics", options: { bullet: true, breakLine: true } },
  { text: "Clinics lack real-time status updates", options: { bullet: true, breakLine: true } },
  { text: "No centralized platform in Tel Aviv", options: { bullet: true } }
], {
  x: 0.8, y: 1.9, w: 3.8, h: 1.0,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// Card 2: Solution
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 0.08, h: 1.8,
  fill: { color: colors.secondary }
});

slide2.addText("💡 Solution", {
  x: 5.5, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide2.addText([
  { text: "Interactive map of all clinics", options: { bullet: true, breakLine: true } },
  { text: "Real-time open/closed status", options: { bullet: true, breakLine: true } },
  { text: "Service availability filtering", options: { bullet: true } }
], {
  x: 5.5, y: 1.9, w: 3.8, h: 1.0,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// Target Users
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.3, w: 9, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.3, w: 0.08, h: 1.8,
  fill: { color: colors.success }
});

slide2.addText("👥 Target Users", {
  x: 0.8, y: 3.5, w: 8.5, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide2.addText([
  { text: "Primary: ", options: { bold: true } },
  { text: "Pet owners in Tel Aviv seeking immediate veterinary care" }
], {
  x: 0.8, y: 4.0, w: 8.5, h: 0.4,
  fontSize: 14, color: colors.textDark,
  fontFace: "Calibri"
});

slide2.addText([
  { text: "Secondary: ", options: { bold: true } },
  { text: "Veterinary clinic staff managing availability and service information" }
], {
  x: 0.8, y: 4.5, w: 8.5, h: 0.4,
  fontSize: 14, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 3: TECHNICAL ARCHITECTURE
// ===========================
let slide3 = pres.addSlide();
slide3.background = { color: colors.bg };

slide3.addText("Technical Architecture", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Tech Stack Card
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 3.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 0.08, h: 3.8,
  fill: { color: colors.primary }
});

slide3.addText("💻 Technology Stack", {
  x: 0.8, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide3.addText([
  { text: "Frontend: ", options: { bold: true, breakLine: true } },
  { text: "React.js + Tailwind CSS", options: { breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "Map Integration: ", options: { bold: true, breakLine: true } },
  { text: "Leaflet.js (Open Source)", options: { breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "Data Storage: ", options: { bold: true, breakLine: true } },
  { text: "Browser LocalStorage (MVP)", options: { breakLine: true } },
  { text: "Future: REST API + PostgreSQL", options: { breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "Tools: ", options: { bold: true, breakLine: true } },
  { text: "Git, VS Code, JIRA" }
], {
  x: 0.8, y: 1.9, w: 3.8, h: 2.9,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// Data Model Card
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 3.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 0.08, h: 3.8,
  fill: { color: colors.secondary }
});

slide3.addText("📊 Data Model", {
  x: 5.5, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide3.addText([
  { text: "Clinic Entity:", options: { bold: true, breakLine: true } },
  { text: "• ID, Name, Address", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Coordinates (lat/lng)", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Contact Info (phone, email)", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Status (open/closed)", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Services Array", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Operating Hours", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "• Last Updated Timestamp", options: { bullet: true, indentLevel: 0, breakLine: true } },
  { text: "", options: { breakLine: true } },
  { text: "Services:", options: { bold: true, breakLine: true } },
  { text: "Emergency, Surgery, Vaccination,", options: { breakLine: true } },
  { text: "Dental, X-Ray, Lab Tests, Grooming" }
], {
  x: 5.5, y: 1.9, w: 3.8, h: 2.9,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 4: KEY FEATURES
// ===========================
let slide4 = pres.addSlide();
slide4.background = { color: colors.bg };

slide4.addText("Key Features", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Feature 1
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 1.5,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide4.addText("🗺️ Interactive Map", {
  x: 0.8, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide4.addText("Leaflet.js powered map showing all clinics with color-coded markers (green=open, red=closed)", {
  x: 0.8, y: 1.9, w: 3.8, h: 0.6,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Feature 2
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 1.5,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide4.addText("🔄 Real-Time Status", {
  x: 5.5, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide4.addText("Clinics can update their open/closed status instantly via dedicated dashboard", {
  x: 5.5, y: 1.9, w: 3.8, h: 0.6,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Feature 3
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.0, w: 4.3, h: 1.5,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide4.addText("🔍 Advanced Filtering", {
  x: 0.8, y: 3.2, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide4.addText("Filter by status (open/closed) and service type (emergency, surgery, vaccination, etc.)", {
  x: 0.8, y: 3.7, w: 3.8, h: 0.6,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Feature 4
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 3.0, w: 4.3, h: 1.5,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide4.addText("📱 Mobile Responsive", {
  x: 5.5, y: 3.2, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide4.addText("Fully responsive design adapts to desktop, tablet, and mobile devices seamlessly", {
  x: 5.5, y: 3.7, w: 3.8, h: 0.6,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Feature 5
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.8, w: 9, h: 0.7,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide4.addText("💾 Persistent Data: LocalStorage ensures data persists between sessions (Production: PostgreSQL)", {
  x: 0.8, y: 5.0, w: 8.5, h: 0.4,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 5: PROJECT MANAGEMENT APPROACH
// ===========================
let slide5 = pres.addSlide();
slide5.background = { color: colors.bg };

slide5.addText("Project Management Approach", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Requirements Gathering
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 2.8, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide5.addText("1️⃣", {
  x: 0.7, y: 1.4, w: 2.4, h: 0.5,
  fontSize: 32, align: "center",
  fontFace: "Calibri"
});

slide5.addText("Requirements", {
  x: 0.7, y: 2.0, w: 2.4, h: 0.35,
  fontSize: 14, bold: true, color: colors.textDark,
  align: "center", fontFace: "Calibri"
});

slide5.addText([
  { text: "• User needs analysis", options: { bullet: true, breakLine: true } },
  { text: "• Scope definition", options: { bullet: true, breakLine: true } },
  { text: "• Technical spec" }
], {
  x: 0.7, y: 2.4, w: 2.4, h: 0.5,
  fontSize: 10, color: colors.textDark,
  fontFace: "Calibri"
});

// Design
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 3.6, y: 1.2, w: 2.8, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide5.addText("2️⃣", {
  x: 3.8, y: 1.4, w: 2.4, h: 0.5,
  fontSize: 32, align: "center",
  fontFace: "Calibri"
});

slide5.addText("Design", {
  x: 3.8, y: 2.0, w: 2.4, h: 0.35,
  fontSize: 14, bold: true, color: colors.textDark,
  align: "center", fontFace: "Calibri"
});

slide5.addText([
  { text: "• Data modeling", options: { bullet: true, breakLine: true } },
  { text: "• UI/UX wireframes", options: { bullet: true, breakLine: true } },
  { text: "• Architecture" }
], {
  x: 3.8, y: 2.4, w: 2.4, h: 0.5,
  fontSize: 10, color: colors.textDark,
  fontFace: "Calibri"
});

// Development
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 6.7, y: 1.2, w: 2.8, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide5.addText("3️⃣", {
  x: 6.9, y: 1.4, w: 2.4, h: 0.5,
  fontSize: 32, align: "center",
  fontFace: "Calibri"
});

slide5.addText("Development", {
  x: 6.9, y: 2.0, w: 2.4, h: 0.35,
  fontSize: 14, bold: true, color: colors.textDark,
  align: "center", fontFace: "Calibri"
});

slide5.addText([
  { text: "• Iterative coding", options: { bullet: true, breakLine: true } },
  { text: "• Component testing", options: { bullet: true, breakLine: true } },
  { text: "• Code review" }
], {
  x: 6.9, y: 2.4, w: 2.4, h: 0.5,
  fontSize: 10, color: colors.textDark,
  fontFace: "Calibri"
});

// Testing & Launch
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 2.1, y: 3.3, w: 2.8, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide5.addText("4️⃣", {
  x: 2.3, y: 3.5, w: 2.4, h: 0.5,
  fontSize: 32, align: "center",
  fontFace: "Calibri"
});

slide5.addText("Testing", {
  x: 2.3, y: 4.1, w: 2.4, h: 0.35,
  fontSize: 14, bold: true, color: colors.textDark,
  align: "center", fontFace: "Calibri"
});

slide5.addText([
  { text: "• QA testing", options: { bullet: true, breakLine: true } },
  { text: "• User feedback", options: { bullet: true, breakLine: true } },
  { text: "• Bug fixes" }
], {
  x: 2.3, y: 4.5, w: 2.4, h: 0.5,
  fontSize: 10, color: colors.textDark,
  fontFace: "Calibri"
});

// Deployment
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 3.3, w: 2.8, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide5.addText("5️⃣", {
  x: 5.4, y: 3.5, w: 2.4, h: 0.5,
  fontSize: 32, align: "center",
  fontFace: "Calibri"
});

slide5.addText("Launch", {
  x: 5.4, y: 4.1, w: 2.4, h: 0.35,
  fontSize: 14, bold: true, color: colors.textDark,
  align: "center", fontFace: "Calibri"
});

slide5.addText([
  { text: "• Deployment", options: { bullet: true, breakLine: true } },
  { text: "• Monitoring", options: { bullet: true, breakLine: true } },
  { text: "• Iteration" }
], {
  x: 5.4, y: 4.5, w: 2.4, h: 0.5,
  fontSize: 10, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 6: FUTURE ROADMAP
// ===========================
let slide6 = pres.addSlide();
slide6.background = { color: colors.bg };

slide6.addText("Future Roadmap", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Phase 2
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 0.08, h: 1.8,
  fill: { color: colors.secondary }
});

slide6.addText("📅 Phase 2: Backend Integration", {
  x: 0.8, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide6.addText([
  { text: "REST API development", options: { bullet: true, breakLine: true } },
  { text: "PostgreSQL database", options: { bullet: true, breakLine: true } },
  { text: "Authentication system", options: { bullet: true, breakLine: true } },
  { text: "Admin panel" }
], {
  x: 0.8, y: 1.9, w: 3.8, h: 1.0,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Phase 3
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 0.08, h: 1.8,
  fill: { color: colors.success }
});

slide6.addText("🚀 Phase 3: Advanced Features", {
  x: 5.5, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide6.addText([
  { text: "Online booking system", options: { bullet: true, breakLine: true } },
  { text: "User reviews & ratings", options: { bullet: true, breakLine: true } },
  { text: "Push notifications", options: { bullet: true, breakLine: true } },
  { text: "Mobile app (iOS/Android)" }
], {
  x: 5.5, y: 1.9, w: 3.8, h: 1.0,
  fontSize: 11, color: colors.textDark,
  fontFace: "Calibri"
});

// Potential Integrations
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.3, w: 9, h: 1.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.3, w: 0.08, h: 1.8,
  fill: { color: colors.primary }
});

slide6.addText("🔗 Potential Integrations", {
  x: 0.8, y: 3.5, w: 8.5, h: 0.4,
  fontSize: 16, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide6.addText([
  { text: "Google Maps API for enhanced routing", options: { bullet: true, breakLine: true } },
  { text: "Payment gateways (Stripe, PayPal)", options: { bullet: true, breakLine: true } },
  { text: "SMS/Email notifications", options: { bullet: true, breakLine: true } },
  { text: "Analytics dashboard for clinic owners" }
], {
  x: 0.8, y: 4.0, w: 8.5, h: 1.0,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 7: SKILLS DEMONSTRATED
// ===========================
let slide7 = pres.addSlide();
slide7.background = { color: colors.bg };

slide7.addText("Skills Demonstrated", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 40, bold: true, color: colors.textDark,
  fontFace: "Calibri", margin: 0
});

// Technical Skills
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 3.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 0.08, h: 3.8,
  fill: { color: colors.primary }
});

slide7.addText("💻 Technical Skills", {
  x: 0.8, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide7.addText([
  { text: "React.js development", options: { bullet: true, breakLine: true } },
  { text: "API integration (Leaflet)", options: { bullet: true, breakLine: true } },
  { text: "Data modeling", options: { bullet: true, breakLine: true } },
  { text: "Responsive UI/UX design", options: { bullet: true, breakLine: true } },
  { text: "State management", options: { bullet: true, breakLine: true } },
  { text: "Browser storage APIs" }
], {
  x: 0.8, y: 1.9, w: 3.8, h: 2.9,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// PM Skills
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 3.8,
  fill: { color: colors.cardBg },
  shadow: makeShadow()
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 0.08, h: 3.8,
  fill: { color: colors.secondary }
});

slide7.addText("📊 Project Management", {
  x: 5.5, y: 1.4, w: 3.8, h: 0.4,
  fontSize: 18, bold: true, color: colors.textDark,
  fontFace: "Calibri"
});

slide7.addText([
  { text: "Requirements gathering", options: { bullet: true, breakLine: true } },
  { text: "Technical specification writing", options: { bullet: true, breakLine: true } },
  { text: "Scope & timeline management", options: { bullet: true, breakLine: true } },
  { text: "Risk assessment", options: { bullet: true, breakLine: true } },
  { text: "Stakeholder communication", options: { bullet: true, breakLine: true } },
  { text: "Agile methodology" }
], {
  x: 5.5, y: 1.9, w: 3.8, h: 2.9,
  fontSize: 12, color: colors.textDark,
  fontFace: "Calibri"
});

// ===========================
// SLIDE 8: CLOSING
// ===========================
let slide8 = pres.addSlide();
slide8.background = { color: colors.primary };

slide8.addText("Thank You", {
  x: 0.5, y: 1.8, w: 9, h: 1,
  fontSize: 48, bold: true, color: colors.text,
  align: "center", fontFace: "Calibri"
});

slide8.addText("Ready to build innovative solutions", {
  x: 0.5, y: 3.0, w: 9, h: 0.5,
  fontSize: 24, color: colors.text,
  align: "center", fontFace: "Calibri"
});

slide8.addText([
  { text: "Dima Levin", options: { breakLine: true, bold: true } },
  { text: "📧 dima765t@gmail.com", options: { breakLine: true } },
  { text: "📞 +972-528225702", options: { breakLine: true } },
  { text: "💼 linkedin.com/in/dima-levin-y37" }
], {
  x: 0.5, y: 4.2, w: 9, h: 0.8,
  fontSize: 14, color: colors.text,
  align: "center", fontFace: "Calibri"
});

// Save presentation
pres.writeFile({ fileName: "Vet_Clinics_Project_Presentation.pptx" })
  .then(() => {
    console.log("✅ Presentation created successfully!");
    console.log("📁 File: Vet_Clinics_Project_Presentation.pptx");
  })
  .catch(err => {
    console.error("❌ Error creating presentation:", err);
  });
