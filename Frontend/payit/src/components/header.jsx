export default function Header(){
    return(<header className="sticky ">
        <div className="flex  justify-between items-center mx-auto skull h-[92px] ">
            <div>
                <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="paytmlogo" />
            </div>
            <div>
                <nav className="flex justify-between gap-[5px]">
                    <div className="p-[12px] text-[17px] hover:bg-[#f7f5fa] font-semibold text-black"><a href="">Paytm for Consumer</a></div>
                    <div className="p-[12px] text-[17px] hover:bg-[#f7f5fa] font-semibold text-black"><a href="">Paytm For Business</a></div>
                    <div className="p-[12px] text-[17px] hover:bg-[#f7f5fa] font-semibold text-black"><a href="">Investor Relations</a></div>
                    <div className="p-[12px] text-[17px] hover:bg-[#f7f5fa] font-semibold text-black"><a href="">Company</a></div>
                    <div className="p-[12px] text-[17px] hover:bg-[#f7f5fa] font-semibold text-black"><a href="">Career</a></div>
                </nav>
            </div>
            <div className=" flex items-center rounded-full bg-[#00baf2] hover:bg-[#002970] pl-5 p-0.5 gap-2">
                <a href="" className="text-white">Sign in</a>
                <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt="" />
            </div>
        </div>
    </header>);
}