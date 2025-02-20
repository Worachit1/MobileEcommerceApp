# MobileEcommerceApp
 เป็น mini Project Mobile App เขียนโดย typeScipt

#ติดตั้งในส่วน Front End
# 1. React Navigation (สำหรับการนำทาง)
# ติดตั้ง React Navigation
npm install @react-navigation/native

# ติดตั้ง Dependencies ที่จำเป็น
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @react-native-community/masked-view

# ติดตั้ง React Navigation Stack
npm install @react-navigation/stack

#ติดตั้ง React Navigation Tabs (ถ้ามี Bottom Tabs)
npm install @react-navigation/bottom-tabs

# 2.Axios (สำหรับดึง API)
npm install axios

# 3. Redux
npm install @reduxjs/toolkit react-redux

# 4. Icons 
npm install @expo/vector-icons

# 5. TypeScript (ถ้ายังไม่มี)
npm install typescript @types/react @types/react-native @types/react-redux @types/react-navigation

# 6. React Native Paper (ถ้าใช้ UI Components)
npm install react-native-paper

#7. Async Storage (ถ้าใช้เก็บค่าถาวร)
npm install @react-native-async-storage/async-storage

# run โดย ใช้ npx expo start

# ติดตั้งในส่วน Back End

# 1. ติดตั้ง Express.js (Framework หลัก)
npm install express

# 2. ติดตั้ง Mongoose (ถ้าใช้ MongoDB)
npm install mongoose
ถ้าใช้ MongoDB ต้องมี .env ไฟล์เพื่อเก็บ Connection String เช่น
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# 3. ติดตั้ง CORS (เพื่อให้ React Native ติดต่อกับ Backend ได้) 
npm install cors

 # 4. ติดตั้ง Body Parser (ใช้รับค่าจาก API)
 npm install body-parser

# 5. ติดตั้ง dotenv (สำหรับแยก config ไฟล์ .env)
npm install dotenv

# 6. ติดตั้ง Nodemon (สำหรับพัฒนา ไม่ต้องรันใหม่ทุกครั้ง)
npm install -g nodemon

#  7. ติดตั้ง JSON Web Token (ถ้ามีระบบ Login)
npm install jsonwebtoken bcryptjs

# 8. ติดตั้ง Express Validator (สำหรับตรวจสอบข้อมูล Input)
npm install express-validator

#  9. ติดตั้ง Multer (ถ้าต้องอัปโหลดไฟล์หรือรูปภาพ)
npm install multer
run โดย ใช้ npm start  # ถ้าใช้ nodemon

