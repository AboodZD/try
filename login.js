// login.js
function login(username, password) {
  if (username === "user" && password === "1234") {
    console.log("تم تسجيل الدخول بنجاح!");
  } else {
    console.log("خطأ في اسم المستخدم أو كلمة المرور.");
  }
}

// اختبار الدالة
login("user", "1234");
