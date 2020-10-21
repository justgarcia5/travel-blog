import React, { useState } from 'react';

export default function IsLoadingHOC() {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading);
    };
    return (
      <div>
        {isLoading &&
          <LogoAnimationLoader
            message={loadingMessage}
          />
        }
        <WrappedComponent
          {...props}
          setLoading={setLoadingState}
        />
      </div>
    )
  }
  return HOC;
}
