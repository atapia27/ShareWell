/* eslint-disable @next/next/no-img-element */
  // components/ModalHeader.tsx
  import React from 'react';

  const ModalHeader: React.FC = () => {
    return (
      
      <div className="flex h-[224px] justify-center items-center gap-[10px] self-stretch bg-[#687CEB] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
        {/* Name & Date */}
        <div className="flex flex-col items-start gap-[12px] absolute left-[48px] bottom-[43px]">
          {/* Headline Frame */}
          <div className="flex items-center gap-[106px]">
            {/* Headline */}
            <div className="w-[396px] text-white font-medium text-[32px] leading-[140%]">
              Modal 1
            </div>
          </div>
          {/* Paragraph One */}
          <div className="text-white font-medium text-[14px] leading-[140%]">
            Lorem Ipsum is simply
          </div>
          {/* Paragraph Two */}
          <div className="text-white font-medium text-[16px] leading-[140%]">
            Thursday, Jun 22, 2024<br />
            06:00pm - 07:30pm EST
          </div>
        </div>
        {/* Logo 
        
        if using logo.svg from figma, h-[224px] is default, and correct sizing as using individual elements
        */}
        
          <img className="flex justify-center items-center absolute right-0 bottom-0"
                src="/icon.svg" 
                alt="iconFull"  
              />

      </div>
    );
  };

  export default ModalHeader;