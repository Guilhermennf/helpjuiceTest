import { EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./styles.css";
import { InitialContent } from "./InitialContent/InitialContent";

export default function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.content.size === 0) {
                        return "Type / then 1 to create a heading";
                    }
                    return "Type / for blocks, @ to link docs or people";
                },
            }),
        ],
        content: InitialContent,
        editorProps: {
            attributes: {
                class: "outline-none",
            },
        },
    });

    return (
        <>
            <EditorContent editor={editor} />

            {editor && (
                <FloatingMenu
                    editor={editor}
                    shouldShow={({ state }) => {
                        const { $from } = state.selection;
                        const currentLineText = $from.nodeBefore?.textContent;

                        return currentLineText === "/1";
                    }}
                    className="flex flex-col space-y-2 p-2 bg-zinc-100 rounded-lg"
                >
                    <div>
                        <h1 className="font-bold">Add blocks</h1>
                        <span className="text-sm text-gray-400 ">
                            Keep trying to filter, or escape to exit
                        </span>
                        <div className="flex items-center pt-2">
                            <span className="text-sm font-bold text-gray-400 mr-1">
                                Filtering keyword
                            </span>{" "}
                            <p className="bg-[#6388bc] text-white font-xs rounded-md px-[4px]">
                                {1}
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()
                            }
                            className="flex items-center gap-2 p-1 mt-5 rounded min-w-[280px] hover:bg-zinc-200"
                        >
                            <span className="w-12 rounded text-gray-400 text-xl">
                                T
                            </span>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-bold">
                                    Heading 1
                                </span>
                                <span className="text-xs text-gray-400">
                                    Shortcut: type # + space
                                </span>
                            </div>
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            }
                            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
                        >
                            <span className="w-12 rounded text-gray-400 text-xl">
                                T
                            </span>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-bold">
                                    Expandable Heading 1
                                </span>
                                <span className="text-xs text-gray-400">
                                    {"Shortcut: type >># + space"}
                                </span>
                            </div>
                        </button>
                    </div>
                </FloatingMenu>
            )}
        </>
    );
}
