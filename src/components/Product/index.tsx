import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  image: string
  infos: string[]
  title: string
  category: string
  system: string
  description: string
  id: number
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }

    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title}></img>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
