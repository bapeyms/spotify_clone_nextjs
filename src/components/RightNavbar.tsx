export default function RightNavbar() {
    return (
        <aside className="w-80 h-full bg-[#0C0C0C]/40 border-l border-[#91D1EC]/10 p-5 flex flex-col gap-4 shrink-0 hidden xl:flex mr-1">
          <div className="text-xs font-semibold text-[#AAE4FF]/40 uppercase tracking-wider">Зараз грає</div>
          
          <div className="w-full aspect-square bg-[#001C34] rounded-lg border border-[#91D1EC]/10 flex items-center justify-center text-[#AAE4FF]/40 text-sm">
            [Обкладинка треку]
          </div>
          
          <div className="mt-2">
            <h4 className="font-medium text-white">Назва треку</h4>
            <p className="text-xs text-[#AAE4FF]/60">Виконавець</p>
          </div>
        </aside>
    )
}