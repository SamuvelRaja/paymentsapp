import { useNavigate } from "react-router-dom";

const Dash = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem("token");
        // Navigate user to the login page
        navigate("/login");
    };

    return (
        <>
            <div className="flex justify-between items-center bg-blue-500 p-4">
                <div className="flex items-center">
                    <img
                        src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png"
                        alt="Paytm Logo"
                        className="h-8 w-8 mr-2"
                    />
                </div>
                <h1 className="text-white text-xl font-bold">
                    Welcome to the Dashboard
                </h1>
                <button
                    className="bg-white text-blue-500 px-4 py-2 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-700">
                    Explanation of how JWT authentication works...
                </p>
            </div>
        </>
    );
};

export default Dash;
