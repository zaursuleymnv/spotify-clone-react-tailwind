import { Icon } from "Icons";

export default function DownloadApp() {
    return (
        <a href="#" className="h-10 px-6 flex flex-shrink-0 items-center gap-x-4 text-link font-semibold text-sm hover:text-white">
            <Icon name="download" size={20}/>
            Download application
        </a>
    )
}