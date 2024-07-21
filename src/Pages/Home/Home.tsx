import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import PersonIcon from "@mui/icons-material/Person";
import Editor from "../../Components/Editor/Editor";
// import { useCurrentEditor } from "@tiptap/react";

export default function Home() {
    // const { editor } = useCurrentEditor();

    return (
        <div>
            <div className="flex flex-col justify-center items-center p-3">
                <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap items-center border border-gray-300 bg-white rounded-lg px-4 py-2 shadow">
                    <div className="flex items-center">
                        <div className="bg-green-200 text-green-700 font-bold rounded-lg px-3 py-1 mr-4">
                            P
                        </div>
                        <div className="border-r border-gray-300 h-5 mx-1"></div>
                        <div className="flex items-center mx-2">
                            <AccessTimeIcon className="text-gray-500 mr-1" />
                            <span>0 min</span>
                        </div>
                        <div className="border-r border-gray-300 h-5 mx-1"></div>
                        <div className="flex items-center mx-2">
                            <PersonIcon className="rounded-full mr-1" />
                        </div>
                        <div className="border-r border-gray-300 h-5 mx-1"></div>
                        <div className="flex items-center mx-2">
                            <SouthWestIcon className="text-gray-500 mr-1" />
                            <span>0</span>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                        <CheckCircleOutlineIcon className="text-gray-500" />
                        <CloudQueueIcon className="text-gray-500" />
                        <MoreVertIcon className="text-gray-500" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-3">
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">
                        Front-end developer test project
                    </h1>

                    <hr className="border-gray-300 my-4" />

                    <Editor />

                    {/* <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre> */}
                </div>
            </div>
        </div>
    );
}
