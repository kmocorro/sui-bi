import { Card, Icon } from 'semantic-ui-react'
import Image from 'next'

const extra = (
  <a>
    <Icon name='idea' />
    16 Bright Ideas
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image={`http://dev-metaspf401.sunpowercorp.com:4000/codecs-img/39239.png`}
    header='Kevin Mocorro'
    meta='Business Intelligence and System Support'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default CardExampleCardProps