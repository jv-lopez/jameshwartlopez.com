"use client";

import { Button } from "@/components/ui/button";
import { parse } from "@wordpress/block-serialization-default-parser";
import { useState } from "react";
import { toast } from "sonner";

export default function GutenbergParser() {
  const [inputText, setInputText] = useState<string>("");
  const [parsedJSON, setParsedJSON] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleParse = () => {
    try {
      const parsed = parse(inputText);
      console.log("parse", parsed);
      setParsedJSON(JSON.stringify(parsed, null, 2)); // Format JSON with indentation
      setCopySuccess(""); // Reset copy success message
    } catch (error) {
      setParsedJSON("Error: Unable to parse the input string.");
    }
  };

  const handleCopy = async () => {
    if (parsedJSON) {
      try {
        await navigator.clipboard.writeText(parsedJSON);
        toast.success("Copied to clipboard!");
        setCopySuccess("Copied to clipboard!");
      } catch (error) {
        setCopySuccess("Failed to copy!");
        toast.success("Failed to copy!");
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-16">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Gutenberg String To JSON Parser
        </h1>

        <div className="p-8 font-sans w-full">
          <h1 className="text-2xl font-bold mb-4">Parse Text to JSON</h1>
          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <Button onClick={handleParse}>Parse</Button>

          {parsedJSON && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Parsed JSON</h2>
              <Button onClick={handleCopy} className="bg-secondary">
                Copy to Clipboard
              </Button>

              <pre className=" p-4 rounded-md overflow-x-auto">
                {parsedJSON}
              </pre>
              <Button onClick={handleCopy} className="bg-secondary">
                Copy to Clipboard
              </Button>
              {copySuccess && (
                <p className="text-green-600 mt-2">{copySuccess}</p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
