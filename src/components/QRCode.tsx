import React from 'react';

interface QRCodeProps {
  value: string;
  size?: number;
}

// This is a placeholder component that would normally use a QR code library
// For a real implementation, you would use a library like 'qrcode.react'
const QRCode: React.FC<QRCodeProps> = ({ value, size = 200 }) => {
  // In a real implementation, this would generate a proper QR code
  // For now, we're using a placeholder image from a QR code generator service
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(value)}&size=${size}x${size}&format=svg`;
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-white">
      <img 
        src={qrUrl} 
        alt={`QR Code for ${value}`}
        width={size} 
        height={size}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default QRCode;