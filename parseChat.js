import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const output = "### **1. Setup & Environment**\n\
- **Install JDK**: Java Development Kit (JDK) for compiling and running Java programs.\n\
- **IDE**: Use IntelliJ IDEA, Eclipse, or VS Code for coding.\n\
- **JVM**: Understand Java Virtual Machine (runs compiled bytecode).\n\
- **Command Line**: Learn basic commands (`javac`, `java`, `jar`)."

const streamedText = `
# AI Chat Summary

## 1. Introduction
This AI chat helps you generate structured responses.
It uses streaming for fast feedback.

## 2. Features
- Title and subtitle parsing
- Bullet point formatting
- Markdown-friendly output

## 3. Usage
Just feed the text into the function.
It will extract titles and sections.
`;

// console.log(parseStructuredContent(streamedText));


// function parseStructuredContent(text) {
//     const lines = text.split("\n");
//     const result = {
//       title: "",
//       sections: [],
//     };
  
//     let currentSection = null;
  
//     for (let line of lines) {
//       line = line.trim();
  
//       if (!line) continue;
  
//       // Title detection (first line with all caps or markdown H1)
//       if (!result.title && (/^# /.test(line) || /^[A-Z\s]{5,}$/.test(line))) {
//         result.title = line.replace(/^# /, "").trim();
//         continue;
//       }
  
//       // Subtitle detection (markdown H2 or leading **text** or numbered)
//       if (/^## /.test(line) || /^\d+\.\s/.test(line) || /^\*\*.+\*\*/.test(line)) {
//         if (currentSection) {
//           result.sections.push(currentSection);
//         }
  
//         currentSection = {
//           subtitle: line.replace(/^## /, "").replace(/^\*\*(.+)\*\*$/, "$1").trim(),
//           body: "",
//         };
//       } else {
//         if (!currentSection) {
//           currentSection = { subtitle: "Introduction", body: "" };
//         }
//         currentSection.body += line + "\n";
//       }
//     }
  
//     if (currentSection) {
//       result.sections.push(currentSection);
//     }
  
//     return result;
//   }
  

// function parseChat(output){
//     const lines = output.split('\n')

//     for(let line of lines){

//         if (/^###/.test(line)){
//             line = line.replace("###", "<h1>")
//             line += "</h1>"
//             console.log(line, "||||||||||||||||||")
//         }
//     }
// }

// parseChat(output)
// components/MarkdownRenderer.js
console.log("Rendering markdown content:", MarkdownRenderer({ content: streamedText }));

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
