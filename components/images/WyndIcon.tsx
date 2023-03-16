interface PropsType {
    width: string
}

const SyneIcon = ({width}: PropsType) => {
    return (
        <svg width={width} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M10.7578 20C16.2806 20 20.7578 15.5228 20.7578 10C20.7578 4.47715 16.2806 0 10.7578 0C5.2349 0 0.757751 4.47715 0.757751 10C0.757751 15.5228 5.2349 20 10.7578 20Z" fill="#006CFB" />
            <rect x="6.461" y="10.0547" width="6.15385" height="6.15385" transform="rotate(-45 6.461 10.0547)" fill="#006CFB" />
        </svg>
    )
}
export default SyneIcon