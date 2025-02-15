export const validate=(email, password)=>{
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isValidPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isValidEmail) return "Invalid Email";

    if(!isValidPassword) return "Invalid Password";

    return null;
}