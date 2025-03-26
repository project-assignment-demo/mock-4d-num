const ThemeModeSwitcher = () => {

    return (
        <>
        <input className="w-0 h-0 invisible peer" type="checkbox" id="darkmode-toggle" />
        <label htmlFor="darkmode-toggle" className="
        w-[500px] 
        h-[200px] 
        relative 
        block 
        bg-[#ebebeb] 
        rounded-[200px] 
        shadow-[inset_0px_5px_15px_rgba(0,0,0,0.4),_inset_0px_-5px_15px_rgba(255,255,255,0.4)] 
        cursor-pointer
        transition-[0.3s]
        after:content-['']
        after:w-[180px]
        after:h-[180px]
        after:absolute
        after:top-[10px]
        after:left-[10px]
        after:bg-[linear-gradient(180deg,#ffcc89,#d8860b)]
        after:rounded-[180px]
        after:shadow-[0px_5px_10px_rgba(0,0,0,0.2)]
        after:transition-[0.3s]
        peer-checked:bg-[#242424]
        peer-checked:after:left-[490px]
        peer-checked:after:transform-[translatex(-100%)]
        peer-checked:after:bg-[linear-gradient(180deg,#777,#3a3a3a)]
        "></label>
        </>
    )
}

export default ThemeModeSwitcher;