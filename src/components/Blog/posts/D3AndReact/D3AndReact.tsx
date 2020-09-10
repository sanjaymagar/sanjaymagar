import React from 'react';

import './D3AndReact.scss';
import Wave from './Wave';
import { EventListener } from '../../../utils/useHook/useEventListener';
import { ElementResize } from '../../../utils/useHook/useElementSize';
import { Debounce } from '../../../utils/useHook/useDenounce';
import { FetchData } from '../../../utils/useHook/useFetch';
import { Hover } from '../../../utils/useHook/useHover';
import { ImageOnLoad } from '../../../utils/useHook/useImageOnLoad';
import { Page } from '../../../utils/useHook/useIntersectionObserver';
import { LocalStorage } from '../../../utils/useHook/useLocalStorage';
import { WindowSize } from '../../../utils/useHook/useWindowSize';
import { OnClick } from '../../../utils/useHook/useOnClickOutside';
import { TextCopy } from '../../../utils/useHook/useCopyToClipboard.jsx';

const D3AndReact = () => {
  return (
    <div className='D3AndReact'>
      <div className='D3AndReact__content'>
        <div className='D3AndReact__centered'>
          <Wave />
          {/* <EventListener /> */}
          {/* <ElementResize /> */}
          {/* <Debounce /> */}
          {/* <FetchData /> */}
          {/* <Hover /> */}
          {/* <ImageOnLoad /> */}
          {/* <LocalStorage /> */}
          {/* <WindowSize /> */}
          {/* <OnClick /> */}
          {/* <TextCopy /> */}
        </div>
      </div>
    </div>
  );
};

export default D3AndReact;
