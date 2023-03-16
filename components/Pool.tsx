import SyneIcon from "./images/SyneIcon"

const Pool = () => {
    return(
        <div className="w-full secondary-bg-color grid grid-cols-12 gap-8 px-[16px] py-[15px] border-liquidity">
            <div className="col-span-3 flex items-center gap-3">
                <SyneIcon width="36px" />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="font-td-1">veSYNE</p>
                        <p className="font-td-badge badge-bg-color badge-color-1 border-button-small px-[5px] ml-1">auto</p>
                    </div>
                    <p className="font-td-2 tertiary-color">Convert WYND</p>
                </div>
            </div>
            <div className="col-span-1 flex items-center">
                <p className="apy-color-1 font-td-3">37.8%</p>
            </div>
            <div className="col-span-2 flex items-center">
                <p className="primary-color font-td-3">$0.00</p>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <p className="primary-color font-td-3">$1,035,697</p>
                <p className="tertiary-color font-td-4">$3,095,011 total</p>
            </div>
            <div className="col-span-2 flex items-center">
                <p className="primary-color font-td-3">$0.00</p>
            </div>
            <div className="col-span-2 flex justify-end items-center">
                <p className="primary-color font-td-3">$0.00</p>
            </div>
        </div>
    )
}
export default Pool