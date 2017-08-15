import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleColored = () => (
  <Card.Group itemsPerRow={3}>
    <Card color='red' image={'./img/cake.jpg'} />
    <Card color='orange' image={'./img/pizza.jpg'} />
    <Card color='yellow' image={'./img/thai.jpg'} />
    <Card color='olive' image={'./img/korma.jpg'} />
    <Card color='green' image={'./img/dessert.jpg'} />
    <Card color='teal' image={'./img/cake.jpg'} />
    <Card color='blue' image={'./img/cake.jpg'} />
    <Card color='violet' image={'./img/cake.jpg'} />
    <Card color='purple' image={'./img/cake.jpg'} />
  </Card.Group>
)

export default CardExampleColored


// import React from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'
//
// const CardExampleImageCard = () => (
// 	<Card.Group itemsPerRow={3}>
//
// 		<Card className='md-col-10'>
// 		<Image src='./img/cake.jpg' />
// 		<Card.Content>
// 		  <Card.Header>Fruit Cake</Card.Header>
// 		  <Card.Meta>Joined in 2016</Card.Meta>
// 		  <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
// 		</Card.Content>
// 		</Card>
// 		<Card>
// 		<Image src='./img/pizza.jpg' />
// 		<Card.Content>
// 		  <Card.Header>Pizza</Card.Header>
// 		  <Card.Meta>Joined in 2016</Card.Meta>
// 		  <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
// 		</Card.Content>
// 		</Card>
// 		<Card>
// 		<Image src='./img/thai.jpg' />
// 		<Card.Content>
// 		  <Card.Header>Thai Food</Card.Header>
// 		  <Card.Meta>Joined in 2016</Card.Meta>
// 		  <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
// 		</Card.Content>
// 		</Card>
// 	</Card.Group>
// )
//
// export default CardExampleImageCard
