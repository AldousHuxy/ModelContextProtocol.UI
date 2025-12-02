import { useRef, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const chatMessageSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

type ChatMessageForm = z.infer<typeof chatMessageSchema>;

type ChatMessageProps = {
  isDarkMode: boolean;
  pills: Array<{ id: number; label: string; text: string; color?: string }>;
};

export const ChatMessage = ({ isDarkMode, pills }: ChatMessageProps) => {
  const { register, handleSubmit, reset, setValue } = useForm<ChatMessageForm>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit: SubmitHandler<ChatMessageForm> = ({ message }) => {
    console.log("Submitted message:", message);
    if (selectedFile) {
      console.log("Attached file:", selectedFile.name, selectedFile.size, selectedFile.type);
    }
    // Reset form and file after submission
    reset();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePillClick = (text: string) => {
    setValue('message', text);
  };

  return (
    <div className="space-y-2">
      {/* Suggestion Pills */}
      <div className="flex flex-wrap gap-2">
        {pills.map(pill => (
          <button
            key={pill.id}
            type="button"
            onClick={() => handlePillClick(pill.text)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                : pill.color === 'grey' 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* File preview */}
      {selectedFile && (
        <div className={`flex items-center justify-between gap-3 px-4 py-2 rounded-xl transition-all ${
          isDarkMode 
            ? 'bg-gray-700 border border-gray-600' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <svg className="w-5 h-5 text-mhfd-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className={`text-sm truncate ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {selectedFile.name}
            </span>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              ({(selectedFile.size / 1024).toFixed(1)} KB)
            </span>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className={`p-1 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-600 text-gray-400 hover:text-red-400' 
                : 'hover:bg-gray-200 text-gray-500 hover:text-red-500'
            }`}
            aria-label="Remove file"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Message form */}
      <form onSubmit={handleSubmit(onSubmit)} className={`flex items-center gap-3 p-4 rounded-2xl shadow-lg border transition-all hover:shadow-xl ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
          <input 
            type="text"
            className={`flex-1 px-4 py-3 border-0 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mhfd-blue transition-all ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-100 focus:bg-gray-600' 
                : 'bg-gray-50 text-gray-800 focus:bg-white'
            }`}
            placeholder="Type your message..."
            {...register('message')}
          />
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept="*/*"
          />
          <button
            type="button"
            onClick={handleAttachmentClick}
            className={`cursor-pointer p-3 rounded-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-mhfd-blue ${
              selectedFile
                ? 'text-mhfd-blue'
                : isDarkMode 
                  ? 'text-gray-300 hover:text-mhfd-blue hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-mhfd-blue hover:bg-gray-100'
            }`}
            aria-label="Attach file"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <button
            type="submit"
            className="cursor-pointer px-6 py-3 border-2 border-mhfd-blue text-mhfd-blue font-medium rounded-xl hover:bg-mhfd-blue hover:text-white transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mhfd-blue focus:ring-offset-2"
          >
            Send
          </button>
      </form>
    </div>
  );
}