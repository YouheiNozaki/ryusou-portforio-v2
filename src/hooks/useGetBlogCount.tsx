import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type Props = {
  children: ReactNode;
};

const BlogCountContext = createContext<{ blogCount: number }>({
  blogCount: 0,
});

const BlogCountUpdateContext = createContext<{
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

export const useGetBlogCount = () => {
  const { blogCount } = useContext(BlogCountContext);
  const { setBlogCount } = useContext(BlogCountUpdateContext);

  return { blogCount, setBlogCount };
};
