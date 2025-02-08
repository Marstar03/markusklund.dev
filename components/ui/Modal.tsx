import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-2xl w-full p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title || "Modal Title"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg p-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-4">{children}</div>

        {/* Modal Footer (Optional) */}
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="px-5 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
