import React,{useState} from 'react'
import axios from 'axios';
const MarkDown = () => {

    const [markdownText, setMarkdownText] = useState("");
    const [htmlCode , setHtmlCode]= useState("");

    const handleInput= async(e)=>{
        const inputText= e.target.value;
        setMarkdownText(inputText);
        
        try {
            const response = await axios.post("http://localhost:5000/change", {markdown: inputText,});
            setHtmlCode(response.data.htmlCode);
        } catch (error) {
            console.log("error converting markdown ", error);
        }
    }
    return (
        <div className="flex h-screen">
            <textarea 
                className='w-1/2 p-4 border-r border-gray-300'
                placeholder='Type Markdown here...'
                value={markdownText}
                onChange={handleInput}
            />
            <textarea
                className="w-1/2 h-full p-4 bg-gray-100"
                value={htmlCode}
                readOnly
            />
        </div>
    )
}

export default MarkDown