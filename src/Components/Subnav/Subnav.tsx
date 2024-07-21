import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Subnav() {
    return (
        <nav
            className="flex flex-wrap justify-between items-center p-5"
            aria-label="Breadcrumb"
        >
            <ol className="flex flex-wrap items-center space-x-1">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
                <li className="flex items-center">
                    <button
                        className="flex items-center text-sm font-medium text-[#a3a8b2]-700 dark:text-gray-400 dark:hover:text-[#6c727f] mx-2"
                        type="button"
                    >
                        <ImportContactsIcon
                            className="mx-2"
                            fontSize="medium"
                        />{" "}
                        Main
                    </button>
                </li>
                <li>
                    <div className="flex items-center">
                        <p>/</p>
                        <button
                            className="flex items-center text-sm font-medium text-[#a3a8b2]-700 dark:text-gray-400 dark:hover:text-[#6c727f] mx-2"
                            type="button"
                        >
                            Getting started
                        </button>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <p>/</p>
                        <button
                            className="flex items-center text-sm font-medium text-[#a3a8b2]-700 dark:text-gray-400 dark:hover:text-[#6c727f] mx-2"
                            type="button"
                        >
                            Front-end developer test proje...
                        </button>
                    </div>
                </li>
            </ol>
            <div className="flex">
                <button
                    className="flex items-center text-sm font-medium text-[#a3a8b2]-700 dark:text-gray-400 dark:hover:text-[#6c727f]"
                    type="button"
                >
                    <LockOpenIcon className="mx-2" fontSize="small" />
                    Editing
                </button>
                <div className="border-r border-gray-300 h-6 mx-2"></div>

                <button
                    className="flex items-center text-sm font-medium text-[#557db7]-700 dark:text-[#557db7] dark:hover:text-[#36588C]"
                    type="button"
                >
                    Publish Space
                    <KeyboardArrowDownIcon />
                </button>
            </div>
        </nav>
    );
}
