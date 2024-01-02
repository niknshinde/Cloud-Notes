import React from 'react'
import noteContext from '../context/notes/noteContext'

export const About1 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headingStyle = {
    color: '#85586F',
    textAlign: 'center',
  };

  const paragraphStyle = {
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🌟 Welcome to NoteCloud 🌟</h1>

      <p style={paragraphStyle}>
        Your go-to destination for seamless note-taking and organization. At NoteCloud, we believe in the power of capturing ideas, thoughts, and important information effortlessly. Our platform is designed to simplify your note-taking experience, ensuring that your notes are always accessible whenever and wherever you need them.
      </p>

      <h2 style={headingStyle}>What Sets NoteCloud Apart?</h2>

      <p style={paragraphStyle}>
        NoteCloud stands out as a user-friendly and secure platform for taking, organizing, and retrieving notes. With our cloud-based system, you can say goodbye to the hassle of managing physical notebooks or scattered digital files. Your notes are securely stored in the cloud, offering you the freedom to access them from any device with an internet connection.
      </p>

      <h2 style={headingStyle}>Key Features:</h2>

      <ul>
        <li style={paragraphStyle}><strong>Cloud Storage:</strong> Enjoy the convenience of storing your notes securely in the cloud, eliminating the risk of data loss and ensuring accessibility from various devices.</li>
        <li style={paragraphStyle}><strong>Sync Across Devices:</strong> Seamlessly sync your notes across all your devices. Start taking notes on your laptop during a meeting and continue on your smartphone while on the go.</li>
        <li style={paragraphStyle}><strong>Intuitive Interface:</strong> Our user-friendly interface makes note-taking a breeze. Organize your notes effortlessly and find what you need with ease.</li>
        <li style={paragraphStyle}><strong>Privacy and Security:</strong> Your data's security is our priority. Benefit from encryption and robust security measures to ensure the confidentiality of your notes.</li>
      </ul>

      <h2 style={headingStyle}>How It Works:</h2>

      <ol>
        <li style={paragraphStyle}><strong>Create an Account:</strong> Sign up for a NoteCloud account to start your note-taking journey.</li>
        <li style={paragraphStyle}><strong>Take Notes:</strong> Utilize our intuitive note-taking features to capture your thoughts, ideas, and important information.</li>
        <li style={paragraphStyle}><strong>Cloud Storage:</strong> Your notes are automatically saved to the cloud, ensuring you never lose valuable information.</li>
        <li style={paragraphStyle}><strong>Access Anywhere:</strong> Log in to your NoteCloud account from any device to access your notes instantly.</li>
      </ol>

      <h2 style={headingStyle}>Our Mission:</h2>

      <p style={paragraphStyle}>
        At NoteCloud, we are committed to providing a reliable and efficient platform that enhances your productivity by simplifying the note-taking process. We believe that organized and accessible information empowers individuals to achieve their goals and succeed in their endeavors.
      </p>

      <h2 style={headingStyle}>Get Started Today:</h2>

      <p style={paragraphStyle}>
        Join NoteCloud today and experience the freedom of having your notes at your fingertips, no matter where life takes you. 🚀📝
      </p>
    </div>
  )
}
