import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { UploadedFile } from '../types';

interface FileUploadProps {
  onFileUpload: (file: UploadedFile) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedFile: UploadedFile = {
          id: `file-${Date.now()}-${Math.random()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date(),
          base64: e.target?.result as string,
        };
        onFileUpload(uploadedFile);
      };
      reader.readAsDataURL(file);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-blue-50', 'border-blue-400');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('bg-blue-50', 'border-blue-400');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-blue-50', 'border-blue-400');
    
    const files = e.dataTransfer.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          const uploadedFile: UploadedFile = {
            id: `file-${Date.now()}-${Math.random()}`,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadedAt: new Date(),
            base64: event.target?.result as string,
          };
          onFileUpload(uploadedFile);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="mb-4">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="*/*"
        onChange={handleFileSelect}
        className="hidden"
        id="file-input"
      />
      
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-colors hover:border-blue-400 hover:bg-blue-50"
      >
        <Upload size={24} className="mx-auto text-gray-400" />
      </div>
    </div>
  );
};
