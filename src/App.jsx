import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#09090F',minHeight: 'auto',width:'auto', padding: '0',margin:'0',boxSizing:'border-box'}}>
      <div style={{padding:"10vw",marginLeft:'10vw'}} >
        <h1 style={{color:"#FFFFFF",fontSize:'35px',fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'}}>Privacy Policy</h1>
        <p className='para'>Date: September 27, 2023</p>
        <h2 className='title'>Introduction</h2>
        <p className='para'>Welcome to [Your Company Name] ("we," "our," or "us"). At [Your Company Name], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website, products, or services. By accessing or using our services, you consent to the practices described in this Privacy Policy.</p>
        <h2 className='title'>Information We Collect</h2>
        <p className='para'>We may collect various types of information, including:</p>
        <ul className='para'>
        <li><b>Personal Information:</b> Such as your name, email address, and other identifying information you provide when registering or contacting us.</li>
        <li><b>Usage Data:</b>  Information about how you interact with our website, products, and services, including IP addresses, device and browser information, and access times.</li>
        <li><b>Cookies:</b>We use cookies to collect information about your preferences, settings, and browsing patterns. You can manage cookie preferences in your browser settings.</li>
        <li><b>Third-party Information:</b> Information we may receive from third-party sources or services, which may include social media platforms.</li>        
        </ul>
        <h2 className='title'>How We Use Your Information</h2>
        <p className='para'>We use your information for various purposes, including:</p>
        <ul className='para'>
        <li>Providing and improving our products and services.</li>
        <li>Responding to your inquiries and support requests.</li>
        <li>Sending you promotional materials and updates (if you opt-in).</li>
        <li>Complying with legal obligations and protecting our rights.</li>
        </ul>
        <h2 className='title'>Data Security</h2>
        <p className='para'>We take the security of your personal information seriously and employ appropriate technical and organizational measures to safeguard it. However, no method of online transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        <h2 className='title'>Third-party Links</h2>
        <p className='para'>Our website may contain links to third-party sites or services not operated by us. We are not responsible for the privacy practices of such third parties. We encourage you to review their privacy policies.</p>
        <h2 className='title'>Your Choices</h2>
        <p className='para'>You can update or delete your personal information by contacting us. You can also opt-out of receiving promotional communications from us.</p>
        <h2 className='title'>Changes to This Policy</h2>
        <p className='para'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on our website.</p>
      </div>
      
      
    </div>
  )
}

export default App
