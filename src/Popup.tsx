import React, { useState } from "react";
import { summarizeWebPage } from "./summarizer";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./components/ui/select";
import { Loader2 } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { SelectValue } from "@radix-ui/react-select";
import { useToast } from "./components/ui/use-toast";
import { Label } from "./components/ui/label";

const getDefaultLanguage = () => {
  const browserLocale = navigator.language;
  if (browserLocale.startsWith("ja")) {
    return "japanese";
  } else {
    return "english";
  }
};

const Popup: React.FC = () => {
  const [summary, setSummary] = useState("");
  const [language, setLanguage] = useState(getDefaultLanguage());
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);

  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsSummaryLoading(true);
    try {
      const result = await summarizeWebPage(language);
      setSummary(result);
      toast({
        description: "Summarized",
        color: "success",
      });
    } catch (error) {
      console.error(error);
      setSummary(`Failed to summarize: ${error}`);
      toast({
        description: "Failed to summarize",
        color: "error",
      });
    } finally {
      setIsSummaryLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="box-border h-auto w-[400px]">
        <div className="flex flex-col m-1 p-1">
          <div className="flex flex-row my-1 justify">
            <div className="basis-1/2">
              <div>
                <Label htmlFor="language">Summarization Language</Label>
                <Select
                  onValueChange={(e) => {
                    setLanguage(e);
                  }}
                  defaultValue={language}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder="Select Language"
                      defaultValue={language}
                    />
                  </SelectTrigger>
                  <SelectContent defaultValue={language} id="language">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col justify-end items-end my-1">
              {isSummaryLoading ? (
                <Button disabled variant={"outline"}>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Summarizing...
                </Button>
              ) : (
                <Button onClick={handleSummarize}>Summarize This Page</Button>
              )}
            </div>
          </div>
          <div className="basis-1/1 grid w-full gap-2">
            <Textarea value={summary} rows={10} readOnly />
            <Button
              variant={"outline"}
              onClick={() => {
                navigator.clipboard.writeText(summary).then(() => {
                  toast({
                    description: "Copied to clipboard",
                  });
                });
              }}
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
