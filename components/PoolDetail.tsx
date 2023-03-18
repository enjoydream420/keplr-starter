import ConvertIcon from "./images/ConvertIcon"
import InfoIcon from "./images/InfoIcon"
import SyneIcon from "./images/SyneIcon"
import MoneyIcon from './images/MoneyIcon';

interface PropsType {
    id: string
}

const PoolDetail = ({id}: PropsType) => {
    return (
        <div
            id={`accordion-collapse-body-${id}`}
            className="hidden w-full second-bg-detail-color px-[16px] py-[15px] border-liquidity"
            aria-labelledby={`accordion-collapse-heading-${id}`}
        >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 md:gap-8">
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
                <div className="col-span-1 flex items-center justify-end sm:justify-start gap-2">
                    <p className="apy-color-1 font-td-3">37.8%</p>
                    <InfoIcon width="14px" />
                </div>
                <div className="col-span-2 flex items-center justify-start sm:justify-end md:justify-start gap-2">
                    <p className="primary-color font-td-3">$0.00</p>
                    <InfoIcon width="14px" />
                </div>
                <div className="col-span-2 flex flex-col items-end sm:items-start justify-end md:justify-start">
                    <p className="primary-color font-td-3">$1,035,697</p>
                    <div className="flex items-center gap-2">
                        <p className="tertiary-color font-td-4">$3,095,011 total</p>
                        <InfoIcon width="14px" />
                    </div>
                </div>
                <div className="col-span-2 flex items-center">
                    <p className="primary-color font-td-3">$0.00</p>
                </div>
                <div className="col-span-2 flex justify-end items-center">
                    <p className="primary-color font-td-3">$0.00</p>
                </div>
            </div>
            <div className="grid grid-cols-6 md:grid-cols-12 my-[8px] detail-bg-color-1 border-liquidity">
                <button className="detail-btn-bg-color-1 flex items-center col-span-3 justify-center py-[13px] m-1 border-button">
                    <ConvertIcon />
                    <p className="fourth-color font-tab ml-2">Convert</p>
                </button>
                <button className="flex items-center col-span-3 justify-center py-[13px] m-1 border-button">
                    <MoneyIcon />
                    <p className="fourth-color font-tab ml-2">Deposit</p>
                </button>
                <button className="flex items-center col-span-3 justify-center py-[13px] m-1 border-button">
                    <MoneyIcon />
                    <p className="fourth-color font-tab ml-2">Withdraw</p>
                </button>
                <button className="flex items-center col-span-3 justify-center py-[13px] m-1 border-button">
                    <InfoIcon width="20px" />
                    <p className="fourth-color font-tab ml-2">Pool Info</p>
                </button>
            </div>
            <div className="grid grid-cols-6 md:grid-cols-12 my-[8px] text-start">
                <div className="col-span-6">
                    <p className="font-td-1 primary-color">Converting PTP to XPTP and stake it to earn protocol revenue + VTX</p>
                    <div className="detail-bg-color-3 border-small">
                        <p className="font-td-5 primary-color">Converting WYND to bWYND is irreverable</p>
                        <p className="font-td-5 tertiary-color">You may stake and unstake XPTPT tokens, but not convert them back to PTP via protocol. Exchange of XPTP for PTP can be done on Trader Joe.</p>
                        <a className="font-td-5 fourth-color">Go To Trader Joe </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PoolDetail