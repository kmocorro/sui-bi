import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input, Menu } from 'semantic-ui-react'

export default function Navbar (props) {
  const router = useRouter()

  const [ activeItem, setactiveItem ] = useState({name: props.nav})

  const handleItemOnClick = (e, {name}) => {

    if(name === 'dashboard'){
      router.push(`/`)
    }else{
      router.push(`/${name}`)
    }
  }

  return (
    <Menu secondary>
      <Menu.Item
        name='dashboard'
        active={activeItem.name === 'dashboard'}
        onClick={handleItemOnClick}
      />
      <Menu.Item
        name='feasibility'
        active={activeItem.name === 'feasibility'}
        onClick={handleItemOnClick}
      />
      <Menu.Item
        name='risk'
        active={activeItem.name === 'risk'}
        onClick={handleItemOnClick}
      />
      <Menu.Item
        name='action'
        active={activeItem.name === 'action'}
        onClick={handleItemOnClick}
      />
      <Menu.Item
        name='summary'
        active={activeItem.name === 'summary'}
        onClick={handleItemOnClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='logout'
          active={activeItem.name === 'logout'}
          onClick={handleItemOnClick}
        />
      </Menu.Menu>
    </Menu>
    
  )
}