export default function BtnPrimary({ children, className }) {

    return (
        <button className={`card ${className} flex items-center rounded-full py-[12px] px-[24px]`}>
            {children}
        </button>
    );
}