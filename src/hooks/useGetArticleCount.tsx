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

const ArticleCountContext = createContext<{ articleCount: number }>({
  articleCount: 0,
});

const ArticleCountUpdateContext = createContext<{
  setArticleCount: Dispatch<SetStateAction<number>>;
}>({
  setArticleCount: undefined,
});

export const ArticleCountContextProvider: React.VFC<Props> = ({ children }) => {
  const [articleCount, setArticleCount] = useState<number>(0);

  return (
    <ArticleCountContext.Provider value={{ articleCount }}>
      <ArticleCountUpdateContext.Provider value={{ setArticleCount }}>
        {children}
      </ArticleCountUpdateContext.Provider>
    </ArticleCountContext.Provider>
  );
};

export const useGetArticleCount = () => {
  const { articleCount } = useContext(ArticleCountContext);
  const { setArticleCount } = useContext(ArticleCountUpdateContext);

  return { articleCount, setArticleCount };
};
