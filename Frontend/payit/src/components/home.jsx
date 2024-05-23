import BtnPrimary from "./btnprimary"

export default function Home(){
    return(
        <div>
            <div className="herodiv w-[1260px] mx-auto" >
                <div className="left-hero w-[650px] pt-[128px]">
                    <img className="w-[80px] mb-[48px] " src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png" alt="paytm logo" />
                    <h1 className="font-bold text-[56px] mb-[10px] leading-[65px]">India&apos;s Most-loved Payments App</h1>
                    <p className="mb-[40px] leading-[30px] text-semibold text-[20px] max-w-[475px]">Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                    <BtnPrimary className={"gap-2 border hover:border-black bg-black hover:bg-white text-white hover:text-black text-[15px]"}>
                        Download Paytm App
                        <svg width="14" height="16" className="download-icon" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z" ></path></svg>
                        <svg width="14" height="16" className="download-icon" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z" ></path></svg>
                    </BtnPrimary>
                </div>
                <div className="right-hero ">
                    <img className="w-[528px] absolute top-[250px] right-0" src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1715933362922.png" alt="BannerImage" />
                </div>
            </div>
            
        </div>
    )
}