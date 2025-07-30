# Login Troubleshooting Guide

## 🚨 **Issue: "Invalid credentials" on frontend**

### **✅ Backend Status: WORKING**

- ✅ Database: Connected and running
- ✅ Authentication API: Working (tested with curl)
- ✅ CORS: Properly configured
- ✅ Credentials: admin/admin and user/user

### **🔧 Frontend Status: NEEDS TESTING**

## **🧪 Step-by-Step Testing:**

### **1. Test Backend Directly:**

```bash
curl -s -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin\"}"
```

**Expected:** `{"token":"...","role":"master"}`

### **2. Test Frontend Proxy:**

```bash
curl -s -X POST http://localhost:5173/api/auth/login -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin\"}"
```

**Expected:** Same response as above

### **3. Browser Testing:**

1. Open: http://localhost:5173
2. Open Developer Tools (F12)
3. Go to Console tab
4. Try login with admin/admin
5. Check console for debug logs

### **4. Hard Refresh:**

- Press Ctrl+Shift+R (hard refresh)
- Clear browser cache
- Try incognito/private mode

### **5. Alternative Test:**

Open: http://localhost:5173/debug-login.html
Click "Test Login" button

## **🎯 Most Likely Solutions:**

### **Option A: Browser Cache Issue**

1. Hard refresh (Ctrl+Shift+R)
2. Clear browser cache
3. Try incognito mode

### **Option B: Vite Proxy Issue**

1. Restart frontend: `npm run dev:frontend`
2. Wait 10 seconds
3. Try again

### **Option C: Network Issue**

1. Check if both servers are running:
   - Backend: http://localhost:3000/health
   - Frontend: http://localhost:5173

### **Option D: Build Issue**

1. Rebuild frontend: `npm run client:build`
2. Restart both servers

## **📊 Current Status:**

- ✅ Backend: Working perfectly
- ✅ Database: Connected
- ✅ API: Responding correctly
- ⚠️ Frontend: Needs testing

## **🚀 Quick Fix:**

Try opening http://localhost:5173 in an incognito window and test login with admin/admin
