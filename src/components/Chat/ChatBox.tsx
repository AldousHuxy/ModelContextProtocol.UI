import type { Message } from '@/types/mesage';
import { ChatMessageBox } from './ChatMessageBox';

type ChatBoxProps = {
  messages: Message[];
  isDarkMode: boolean;
};

export const ChatBox = ({ messages, isDarkMode }: ChatBoxProps) => {
  return (
    <div className={`flex flex-col gap-3 sm:gap-4 w-full p-4 sm:p-6 rounded-2xl shadow-lg border h-full overflow-y-auto scrollbar-smooth transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex flex-col gap-3 sm:gap-4 pb-4">
        {messages.map(msg => <ChatMessageBox key={msg.id} {...msg} isDarkMode={isDarkMode} />)}
      </div>
    </div>
  );
}