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
