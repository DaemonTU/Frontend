import React, {useState} from 'react';
import Navbar from './navbar';
import '../static/css/daemonShare.css';
let marked = require("marked");

function DaemonShare(){
    const[markdown,setMarkdown] = useState("");
    const[title,setTitle] = useState("");
    const[show,setShow] = useState("none");
    const[borderBottom,setBorderBottom] = useState("edit");

    function updateMarkdown(markText){
        setMarkdown(markText);
    }
    function setStyle(el,st){
        setShow(el);
        setBorderBottom(st);
    }
    return(
        <React.Fragment>
        <Navbar />
        <section class="relative w-full mx-auto post-wrapper">
            <div class="container px-5 py-24 mx-auto post-inner-wrapper">
                <div className="flex flex-row items-center w-3/4 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="mb-4 post-page-header mx-auto">Write a post</h1>
                    </div>
                    <div class="flex flex-row justify-end w-full mb-12">
                        <button class="text-white
                        border-0 py-2 px-8 mr-4 focus:outline-none
                        rounded post-edit-btn" onClick={() => setStyle("none","edit")}
                        style={{borderBottomWidth: "3px", 
                        borderBottomColor : `${borderBottom}` === "edit" ? "#cc241d" : "transparent"}}
                        >
                        Edit
                        </button>
                        <button class="text-white
                        border-0 py-2 px-8 focus:outline-none
                        rounded post-preview-btn" onClick={() => setStyle("display","preview")}
                        style={{borderBottomWidth: "3px",borderBottomColor : `${borderBottom}` === "preview" ? "#cc241d" : "transparent"}}
                        >
                        Preview
                        </button>
                    </div> 
                </div>
                <div class="form-wrapper">
                    <form class="flex flex-wrap -m-2 md:w-3/4 mx-auto post-form">
                        <div className="post-form-fields-wrapper w-full mx-auto">
                            <div class="p-2 w-full">
                                <div class="relative" style={{display : `${show}` === "none" ? "block" : "none"}}>
                                    <textarea name="title" 
                                    class="w-full rounded border py-10 px-5 post-title"
                                    placeholder="New post title here ..."
                                    onChange={e => setTitle(e.target.value)}
                                    value={title}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative" style={{display : `${show}` === "none" ? "block" : "none"}}>
                                    <textarea name="description" 
                                    class="w-full rounded border py-10 px-5 post-description"
                                    placeholder="Write your post content here ..."
                                    onChange={e => updateMarkdown(e.target.value)}
                                    value={markdown}
                                    ></textarea>
                                </div>
                                <div class="relative" style={{display : `${show}` === "none" ? "none" : "block"}}>
                                    <div class="w-full rounded border py-10 px-5 post-markdown-title"
                                    dangerouslySetInnerHTML={{__html : marked(title)}}
                                    ></div>
                                    <div class="w-full rounded border py-10 px-5 post-markdown"
                                    dangerouslySetInnerHTML={{__html : marked(markdown)}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 w-full flex flex-row justify-start">
                            <button class="border-0 py-2 px-8 focus:outline-none
                            rounded post-btn mr-4">
                                Publish
                            </button>
                            <button class="border-0 py-2 px-8 focus:outline-none
                            rounded post-btn">
                                Save Draft
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default DaemonShare;