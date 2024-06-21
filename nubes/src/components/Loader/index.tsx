'use client';
import { Fragment } from 'react';

export const Loader = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[100px] h-[100px] border-8 border-accent border-t-primary rounded-full animate-spin"></div>
      </div>
    </Fragment>
  );
};

export const Spinner = () => {
return (
  <div className="flex justify-center items-center h-full">
    <div className="w-[50px] h-[50px] border-2 border-accent border-t-primary rounded-full animate-spin"></div>
  </div>
);
}