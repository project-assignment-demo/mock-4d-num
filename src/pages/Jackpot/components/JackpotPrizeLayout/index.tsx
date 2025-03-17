interface JackpotPrizeLayoutProps {

}
const JackpotPrizeLayout = (props: JackpotPrizeLayoutProps) => {
    return <div className="flex items-center w-full gap-[5px]">
        <div className="w-[20%] bg-[#E9181B] p-[10px] rounded-md">
            <p className="text-white text-center font-bold text-[18px]">1ST</p>
        </div>
        <div className="w-[80%] flex items-center justify-center p-[10px] rounded-md border border-[#E9E9E9]">
            <p className="text-center font-bold text-[18px]">415 133</p>
        </div>
    </div>
}

export default JackpotPrizeLayout;