import { pretendardFont } from '../../../../public/fonts/fonts';
import * as S from './styles.ts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <S.Wrapper className={pretendardFont.className}>{children}</S.Wrapper>;
}
