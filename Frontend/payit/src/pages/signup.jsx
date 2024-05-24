import { useState } from "react";
import { Link } from "react-router-dom";
import Z from "zod";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false
  });

const passwordSchema = Z.string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must be less than 20 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
  );


  const userSchema = Z.object({
    email:Z.string().email(),
    password:passwordSchema,
  })

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("formData");
    const postData = {
      email: formData.email,
      password: formData.password
    };
    
    try {
          const parsedData = userSchema.safeParse(postData);
          console.log(parsedData.data,"hh"); 
          fetch("http://localhost:3000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
          })
          .catch(error => {
            // Handle the error
          });// Validated and parsed data
        } catch (error) {
          toast.error("Validation Errors!")
          console.error("Validation Errors:", error.format()); // Display error messages
        }
    // Add your signup logic here
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const toggleShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  const toggleShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword
    });
  };

  return (
    <div className="flex justify-center items-center h-screen mt-[-92px] bg-gray-100 ">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg p-8 w-[360px]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={formData.showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                onClick={toggleShowPassword}
              >
                {formData.showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={formData.showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                onClick={toggleShowConfirmPassword}
              >
                {formData.showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
