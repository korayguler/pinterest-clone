//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import Header from 'components/header';
import Content from 'components/content';
import AddPinButtons from 'components/add-pin-button';
export default function Layout({ children, className, ...props }) {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <AddPinButtons />
    </div>
  );
}
