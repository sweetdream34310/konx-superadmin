/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'slate' : '#2e3248',
      'divider' : '#44475d',
      'homeboard' : '#25293c',
      'label' : '#c7cad9',
      'button' : '#28c76f',
      'white' : '#fff' ,
      'yellow' : '#DA8A67',
      'success' : "#22d3ee",
      'primary' : "#1976d2",
      'warning' : "#d044ef"
    },
    backgroundImage : {
      'charger' : "url('./assets/charger.png')", 
      // 'loginboard' : "url('./assets/login_image.PNG)",
      'company_logo' : "url('./assets/konx.co.ltd.jpg')",
      'dashboard_picture' : "url('./assets/Car_background.PNG')"
    }
  },
  plugins: [],
}