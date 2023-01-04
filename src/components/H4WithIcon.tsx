
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function H4WithIcon({children, iconName}) {
  return (
    <h4 style={{display:"flex", alignItems:"center", marginBottom:"0px"}}>
      {children}
      <img src={useBaseUrl(`/icons/${iconName}`)} height='26px' style={{marginLeft:'10px', }}/>
    </h4>
  );
}