'use client';
import { Fragment } from 'react';

export const Loader = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div className="donut-loader"></div>
      </div>
      <style jsx>{`
        .donut-loader {
          border: 16px solid #f3f3f3; /* White */
          border-top: 16px solid #00008b; /* Dark Blue */
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Fragment>
  );
};
