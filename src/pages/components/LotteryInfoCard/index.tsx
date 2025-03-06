

interface PrizeProps {
    text: string
}

const Prize = (props: PrizeProps) => {
    return (
        <div className="flex-auto bg-[#F5C500] px-2 py-2 rounded-xl">

            <p className="text-center font-light">
                <span className="font-bold mr-1">{props.text}</span>
                Prize</p>
        </div>
    )
}

interface PrizeContentProps {
    value: string;
    id: string;
    fontSize?: number;
}

const PrizeContent = (props: React.PropsWithChildren) => {
    return (
        <div className="flex-1/3 bg-white drop-shadow-sm rounded-md ">
            {props.children}
        </div>
    );
}

const PrizeInnerContent = (props: PrizeContentProps) => {

    const fontSize = props.fontSize ?? 36;

    return <div className="relative w-full h-full">
        <p className="absolute top-0 left-0 text-[12px] text-red-500 font-semibold">{props.id}</p>
        <p className="font-bold text-center px-2 py-2" style={{ fontSize: `${36} px` }}>{props.value}</p>
    </div>

}

interface PrizeTableProps {
    title: string;
}

const PrizeTable = (props: PrizeTableProps) => {
    return (
        <div className="w-full rounded-md mt-[10px] overflow-hidden">

            <div className="bg-black py-[8px]">
                <p className="text-white font-bold text-center text-[14px]">{props.title}</p>
            </div>
            <div className=" grid grid-cols-5">
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="----" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="" value="" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
                <div className="border border-gray-100 bg-white">
                    <PrizeInnerContent id="E" value="0578" />
                </div>
            </div>
        </div>
    );
}

const Card = () => {
    return (
        <div className="rounded-2xl bg-white pb-[50px] shadow-2xl">
            <div className="flex flex-col items-center justify-center bg-red-400 w-full rounded-2xl relative pb-[50px] pt-[20px]">
                <div className="rounded-full w-20 h-20 border-red-200 border-8">
                    <img src="https://share.4dnum.com/site-logo/4Dlogo-01.png" alt="" />
                </div>
                <p className="text-xl font-medium text-white">Magnum 4D</p>
                <div className="bg-white drop-rounded-sm w-[95%] p-[5px] rounded-lg shadow-md flex items-start absolute bottom-[-50px] z-10 ">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="font-extralight">Date</p>
                        <p className="font-bold">2025-03-02</p>
                        <p className="font-bold">(Sun)</p>
                    </div>
                    <hr className="border-[1px] border-solid border-black h-[30px]" />
                    <div className="flex-1 flex flex-col h-full justify-between">
                        <p className="text-center font-extralight">Draw No.</p>
                        <p className="text-center font-bold">171/25</p>
                    </div>
                </div>
            </div>
            <div className="pb-[50px]"></div>
            <div className="flex flex-col items-center px-[20px] w-full">
                <div className="flex justify-between items-center w-full gap-2 mt-4">
                    <Prize text="1ST" />
                    <Prize text="2ND" />
                    <Prize text="3RD" />
                </div>
                <div className="flex justify-between items-center w-full gap-2 mt-2">
                    <PrizeContent >
                        <PrizeInnerContent id="E" value="0578" />
                    </PrizeContent>

                    <PrizeContent >
                        <PrizeInnerContent id="E" value="0578" />
                    </PrizeContent>
                    <PrizeContent >
                        <PrizeInnerContent id="E" value="0578" />
                    </PrizeContent>

                </div>

                <PrizeTable title="Special" />

                <div className="mt-2"></div>

                <PrizeTable title="Consolation" />
            </div>
        </div>
    )
}

export default Card;