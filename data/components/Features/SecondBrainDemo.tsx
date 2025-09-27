
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Manage your Projects and Tasks",
    description: "Easily manage and track your projects and tasks all in one place.",
    image: "https://framerusercontent.com/images/fabHmji7Ka0Jj8TGPOnitnsBgE.png",
    alt: "Manage your Projects and Tasks"
  },
  {
    title: "Organize your life",
    description: "You have the power to create your own system.",
    image: "https://framerusercontent.com/images/2SQEOKLEHSjIrzflF3SUjDgi3E.png",
    alt: "Organize your life"
  },
  {
    title: "PARA Method",
    description: "PARA stands for Projects, Areas, Resources, and Archives.",
    image: "https://framerusercontent.com/images/Lr9BvlHoSi6ZVv5gDHiYiw0mo.png",
    alt: "PARA Method"
  }
];

const SecondBrainDemo = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '80px 20px',
      minHeight: '500px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          style={{ 
            fontSize: '40px', 
            fontFamily: 'Inter, sans-serif',
            color: '#121212',
            textAlign: 'center',
            marginBottom: '20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Build your Second Brain
        </motion.h2>
        <motion.p 
          style={{ 
            fontSize: '18px', 
            fontFamily: 'Inter, sans-serif',
            color: '#6D6D6D',
            textAlign: 'center',
            marginBottom: '60px'
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Take control of your life by capturing and organizing all your projects,<br />
          tasks, notes, goals, finances, resources, events, contacts, and habits in one<br />
          streamlined system.
        </motion.p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px' 
        }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              style={{ display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.2 + (index * 0.1)
              }}
              viewport={{ once: true }}
            >
              <div style={{
                width: '100%',
                height: '260px',
                backgroundColor: '#F6F6F6',
                border: '1px solid #E7E7E7',
                borderRadius: '24px',
                marginBottom: '24px',
                overflow: 'hidden'
              }}>
                <img
                  src={feature.image}
                  alt={feature.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontFamily: 'Inter, sans-serif',
                color: '#121212',
                marginBottom: '12px'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: '16px', 
                fontFamily: 'Inter, sans-serif',
                color: '#6D6D6D'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SecondBrainDemo };
