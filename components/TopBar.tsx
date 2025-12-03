import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/common";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center">
            {/* Logo and title */}
            <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt={`${APP_NAME} logo`} width={32} height={32} />
                <div className="text-xl">{APP_NAME}</div>
            </div>
            {/* Login button */}
            <div>
                <Button className="uppercase">Login</Button>
            </div>
        </div>
    )
}

export default TopBar;