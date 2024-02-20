import React from 'react';
import '@/scss/heading.scss';

interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return (
    <div className="heading">
      <h2 style={{textTransform:"capitalize"}} >{title}</h2>
      <div className="line"></div>
    </div>
  );
}

export default Heading;
