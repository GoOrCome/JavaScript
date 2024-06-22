function generateOtp() {
    const max = 9999;
    const mini = 1000;
    const Otp = Math.floor(Math.random() * (max - mini + 1)) + mini;
    return Otp.toString();
}

console.log(`Here is your otp: ${generateOtp()}`);

// OUTPUT: Here is your otp: 2951
