'use client';

import React, {useEffect, useState} from 'react';

import CloseIcon from '@/asset/closeIcon.svg';
import {useRouter} from '@/i18n/routing';
import {ModalProps} from '@/types';

export default function Modal({
  children,
  title,
  subTitle,
  ModalHeight,
}: ModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => router.back()}
      className={
        'fixed inset-0 bg-modalBg flex items-center justify-center z-50'
      }
    >
      <div
        onClick={handleModalClick}
        className={`
         absolute bottom-0
          bg-white w-full max-h-screen  ${ModalHeight} max-w-md rounded-t-2xl shadow-lg
          transition-all duration-300 ease-in-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          md:static
          md:w-7xl md:rounded-2xl
          md:transform-none md:opacity-100
        `}
      >
        <div
          className={
            'relative py-10 px-6 flex min-h-full flex-col items-center'
          }
        >
          <div className={'flex flex-col items-center justify-center mb-10'}>
            <h2 className={'text-2xl font-bold '}>{title}</h2>
            {subTitle && (
              <h3 className={'text-gray300 text-sm mt-1'}>{subTitle}</h3>
            )}
          </div>
          {children}
          <CloseIcon
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              router.back();
            }}
            className={'absolute top-10 right-5 cursor-pointer'}
          />
        </div>
      </div>
    </div>
  );
}
