import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type Props = {
  children: ReactNode;
};

export const BlogCountContext = createContext<{ blogCount: number }>({
  blogCount: 0,
});

export const BlogCountUpdateContext = createContext<{
  setBlogCount: Dispatch<SetStateAction<number>>;
}>({
  setBlogCount: undefined,
});

export const BlogCountContextProvider: React.VFC<Props> = ({ children }) => {
  const [blogCount, setBlogCount] = useState<number>(0);

  return (
    <BlogCountContext.Provider value={{ blogCount }}>
      <BlogCountUpdateContext.Provider value={{ setBlogCount }}>
        {children}
      </BlogCountUpdateContext.Provider>
    </BlogCountContext.Provider>
  );
};
