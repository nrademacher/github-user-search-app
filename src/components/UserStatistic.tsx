import type { UserProp } from "@/utils"

export const UserStatistic: React.FC<{ statName: string; statValue: UserProp }> = ({ statName, statValue }) => (
    <div className="flex flex-col mr-0 md:mr-[25%]">
        <h4 className="mb-2 text-h4 font-h4">{statName}</h4>
        <p className="text-h3 md:text-stat font-stat text-charcoal dark:text-white">{statValue}</p>
    </div>
)
