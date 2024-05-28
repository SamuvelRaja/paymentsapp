import { useState } from "react";
import {Link} from 'react-router-dom'


export default function Header(){

const[open,setOpen]=useState({
        consumer:false,
        business:false,
        company:false,
        Payments:false,
        Booking:false,
        Financial:false,
        Banking:false,
        Loans:false,
        OnlinePayments:false,
        InstorePayments:false,
        PaymentGateway:false,
        QRcode:false,
    });

    let list=[{
        link:"Paytm for Consumer",
        list:[{
            link:"Payments",
            list:[{
                link:"Recharge & Pay Bills",
            },{
                link:"Send Money to Anyone"
            },{
                link:"Online Payments"
            },{
                link:"Instore Payments"
            }]
        },{
            link:"Booking",
            list:[{
                link:"Movies",
            },{
                link:"Bus Tickets"
            },{
                link:"Train Tickets"
            },{
                link:"Flight Tickets"
            }]
        },{
            link:"Financial",
            list:[{
                link:"Banking",
                list:[{
                    link:"Savings Account"
                }]
            },{
                link:"Paytm money"
            },{
                link:"Insurance"
            },{
                link:"Loans",
                list:[{
                    link:"Postpaid",
                },{
                    link:"Credit Card"
                },{
                    link:"Personal Loan"
                },{
                    link:"Credit Report"
                }]
            }],

        }]
    },{
        link:"business",
            list:[{
                link:"OnlinePayments",
                list:[{
                    link:"Payment Gateway"
                },{
                    link:"Link Payments"
                },{
                    link:"Instore Payments"
                },{
                    link:"no Payments"
                }
                ]
            },{
                link:"InstorePayments",
                list:[{
                    link:"All-in-one QR"
                },{
                    link:"POS"
                },{
                    link:"All-in-one Payment Links"
                },{
                    link:"GST Filing"
                }
                ]
            },{
                link:"PaymentGateway",
                list:[{
                    link:"Payment Gateway",
                },{
                    link:"Link Payments"
                },{
                    link:"complaints"
                },{
                    link:"GST no"
                }]
            },{
                link:"QRCode",
                list:[{
                    link:"All-in-one QR",
                },{
                    link:"POS"
                },{
                    link:"Marketing"
                },{
                    link:"Ads"
                }]
            }]
    },{
        link:"Company",
        list:[{
            link:"about"
        },{
            link:"leadership"
        },{
            link:"board"
        },{
            link:"investor relations"
        },{
            link:"blog"
        },{
            link:"careers"
        },{
            link:"contact us"
        }]
    }]
    return(<header className="sticky ">
        <div className="flex  justify-between items-center mx-auto skull h-[92px] ">
            <div>
                <Link to="/">
                    <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="paytmlogo" />
                </Link>
            </div>
            <div>
                <nav className="flex justify-between gap-[5px] relative">
                    <div 
                        onMouseOver={() => {setOpen(prevState => ({ ...prevState, consumer: true })); console.log(open,"ov")}}
                        onMouseLeave={() => {setOpen(prevState => ({ ...prevState, consumer: false })); console.log(open,"lv")}}
                        className="p-[12px] ddparent text-[17px] hover:bg-[#f7f5fa] font-semibold text-black">
                        <a href="" >Paytm for Consumer</a>
                        <DropDown list={list[0].list} open={open} context={open.consumer} setOpen={setOpen}/>
                    </div>
                    <div 
                        onMouseOver={() => setOpen(prevState => ({ ...prevState, business: true }))}
                        onMouseLeave={() => setOpen(prevState => ({ ...prevState, business: false }))}
                        className="p-[12px] ddparent text-[17px] hover:bg-[#f7f5fa] font-semibold text-black">
                        <a href="" >Paytm For Business</a>
                        <DropDown list={list[1].list} open={open} context={open.business} setOpen={setOpen}/>
                    </div>
                    <div className="p-[12px] ddparent text-[17px] hover:bg-[#f7f5fa] font-semibold text-black">
                        <a href="">Investor Relations</a>
                        
                    </div>
                    <div 
                        onMouseOver={() => setOpen(prevState => ({ ...prevState, company: true }))}
                        onMouseLeave={() => setOpen(prevState => ({ ...prevState, company: false }))}
                        className="p-[12px] ddparent text-[17px] hover:bg-[#f7f5fa] font-semibold text-black">
                        <a href="" >Company</a>
                        <DropDown list={list[2].list} open={open} context={open.company} setOpen={setOpen}/>
                    </div>
                    <div className="p-[12px] ddparent text-[17px] hover:bg-[#f7f5fa] font-semibold text-black">
                        <a href="">Career</a>
                    </div>
                </nav>
            </div>
            <div className=" flex items-center rounded-full bg-[#00baf2] hover:bg-[#002970] pl-5 p-0.5 gap-2">
                <Link to={"/signup"} className="text-white"> Sign UP</Link>
                <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt="" />
            </div>
        </div>
    </header>);
}
function DropDown({list,open,context,setOpen}){
    console.log(context,"dd",open)
    return (
        context && (
            <div className={` absolute border border-[#ccc] p-1 bg-white rounded-[8px] hover:rounded-l-[8px] dds min-w-[200px] w-fit`}>
                {list.map((item) => {
                    return (
                        <div key={item.link} className="flex flex-col gap-2 text-[14px] font-normal text-black p-1 hover:bg-[#f7f5fa]"
                            onMouseOver={() => setOpen(prevState => ({ ...prevState, [item.link]: true }))}
                            onMouseLeave={() => setOpen(prevState => ({ ...prevState, [item.link]: false }))}
                        >
                            <a href="" className="p-1">{item.link}</a>
                            {item.list && <DropDown list={item.list} open={open} context={open[item.link]} setOpen={setOpen}/>}
                        </div>
                    );
                })}
            </div>
        )
    );
}