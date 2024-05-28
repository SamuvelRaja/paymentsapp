import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const postData = {
            email:formData.email,
            password:formData.password
    };
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("token",data.token)
        navigate('/dashboard');
      })
      .catch(error => {
        console.error("Error:", error);
      });// Validated and parsed data
    }

    
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
    const handleShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    return (
        <div className="flex justify-center items-center h-screen mt-[-92px] bg-gray-100">
      
            <div className="bg-white rounded-lg shadow-lg p-8 w-[360px]">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <div className="relative">
              <input
                type={formData.showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                onClick={handleShowPassword}
              >
                {formData.showPassword ? "Hide" : "Show"}
              </button>
            </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                    Don&apos;t have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
