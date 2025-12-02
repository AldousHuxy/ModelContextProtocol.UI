import type { Message } from '@/types/mesage';
import { ChatBox } from './Chat/ChatBox';
import { ChatMessage } from './Chat/ChatMessage';
import type { Pill } from '@/types/pill';

type MainProps = {
  isDarkMode: boolean;
};

export const Main = ({ isDarkMode }: MainProps) => {
  const messages = [
    { id: 3, role: 'user', text: '💾 24-08-0233R Lemon Gulch Reach 1 - [396 MB]' },
    { id: 3, role: 'user', text: 'Can you summarize the key points of this proposal?' },
    { id: 6, role: 'ai', text: <>
        <div>This proposal focuses on the Lemon Gulch Reach 1 project, highlighting key aspects such as hydraulic and hydrologic models, proposed plans, FEMA MT-2 forms, comparison tables, and other relevant information including bridge details and effective data.</div>
        <div>The main objectives include flood risk assessment, infrastructure improvements, and compliance with regulatory standards to ensure community safety and resilience.</div>
      </>
    },
    { id: 7, role: 'user', text: 'Great, what are the main tie-ins with existing infrastructure?' },
    { id: 8, role: 'ai', text: 'The proposal ties into existing levee systems along Lemon Gulch and incorporates recent bridge modifications to ensure compliance with updated flood risk assessments.' },
    { id: 9, role: 'user', text: 'Thanks! Can you investigate any new requirements we need to consider?' },
    { id: 10, role: 'ai', text: 'Certainly! The new requirements include adherence to the latest FEMA guidelines, incorporation of climate change projections in flood modeling, and ensuring public safety measures are up to date.' },
    { id: 11, role: 'user', text: 'Are license and signature number visible in the required locations in the proposal?' },
    { id: 12, role: 'ai', text: 'Yes, the license and signature numbers are clearly displayed in the designated sections of the proposal as per regulatory requirements.' },
    { id: 13, role: 'user', text: 'Are there any other noticeable issues or concerns?' },
    { id: 14, role: 'ai', text: 'Upon review, there are no significant issues or concerns. The proposal appears to be comprehensive and well-aligned with current standards.' },
    { id: 15, role: 'user', text: 'What is the satisfaction rating currently for this proposal?' },
    { id: 16, role: 'ai', text: 'The current satisfaction rating for this proposal stands at 92%, reflecting positive feedback from stakeholders and reviewers.' },
  ] satisfies Message[];

  const pills = [
    { id: 2, label: 'Summarize', text: 'Summarize the entire proposal and check for key points, included parties, and any notable details', color: 'grey' },
    { id: 1, label: 'Tie-Ins', text: 'Analyze the upstream and downstream tie-ins with existing infrastructure', color: 'grey' },
    { id: 3, label: 'Requirements', text: 'Check for visibility of license number, signature number, seal, and other regulatory markings', color: 'grey' },
    { id: 4, label: 'Issues', text: 'Identify any noticeable issues or concerns within the proposal', color: 'grey' },
    { id: 5, label: 'Satisfaction', text: 'Determine the current satisfaction rating for this proposal based on recent reviews', color: 'grey' },
    { id: 7, label: 'Compliance', text: 'Verify compliance with the latest FEMA guidelines and local regulations', color: 'grey' },
    { id: 8, label: 'Environmental Impact', text: 'Assess any environmental impact statements or considerations included in the proposal', color: 'grey' },
    { id: 9, label: 'Cost Analysis', text: 'Provide a brief cost analysis based on the figures presented in the proposal', color: 'grey' },
    { id: 10, label: 'Timeline', text: 'Outline the proposed timeline and any critical milestones mentioned', color: 'grey' },
    { id: 11, label: 'Parties', text: 'Identify all parties involved in the proposal and their roles', color: 'grey' },
  ] satisfies Pill[];

  return (
    <main className="h-full flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
        <div className="flex-1 min-h-0">
          <ChatBox messages={messages} isDarkMode={isDarkMode} />
        </div>
        <ChatMessage isDarkMode={isDarkMode} pills={pills} />
    </main>
  );
}