import type { Message } from '@/types/mesage';

type ChatMessageBoxProps = {
    isDarkMode: boolean;
} & Message;

export const ChatMessageBox = ({ role, text, isDarkMode }: ChatMessageBoxProps) => {
    if (role === 'user') {
        return (
            <div className="self-end max-w-[80%] bg-mhfd-blue text-white px-4 py-3 rounded-2xl rounded-br-none shadow-sm">
                {text}
            </div>
        );
    }

    return (
        <div className={`self-start max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-none shadow-sm transition-colors ${
            isDarkMode 
                ? 'bg-gray-700 text-gray-100' 
                : 'bg-gray-100 text-gray-800'
        }`}>
            {text}
        </div>
    );
}