import Navbar from './navbar';

export default function Layout (props) {
  return (
    <div>
      <Navbar nav={props.nav} />
      {props.children}
    </div>
  )
}