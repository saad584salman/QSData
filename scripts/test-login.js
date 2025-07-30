#!/usr/bin/env node

import https from 'https';
import http from 'http';

console.log('🔐 Testing Login Endpoint');
console.log('==========================');

const testLogin = () => {
  const data = JSON.stringify({
    username: 'admin',
    password: 'admin'
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/auth/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    let responseData = '';
    
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        const data = JSON.parse(responseData);
        console.log('✅ Login successful!');
        console.log('Token:', data.token ? 'Present' : 'Missing');
        console.log('Role:', data.role);
      } else {
        console.log('❌ Login failed:', res.statusCode);
        console.log('Response:', responseData);
      }
    });
  });

  req.on('error', (error) => {
    console.log('❌ Network error:', error.message);
  });

  req.write(data);
  req.end();
};

testLogin(); 