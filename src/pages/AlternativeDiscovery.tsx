import React, { useEffect, useState } from 'react'

// Components
import CloseButton from '../components/CloseButton'
import Button from '../components/Button'
import ProductDescription from '../components/ProductDescription'
import SearchField from '../components/SearchField'
import ProductCarousel from '../components/ProductCarousel'
import LoadingWheel from '../components/LoadingWheel'

// Hooks
import useApi from '../hooks/useApi'

//Images
import logo from '../_images/logo.svg'

const initialTags = ['On-sale', 'More exciting style', 'Light colours']

const alternativeEndPointUrl = 'https://api.splashup.co/discover/v3/alternatives'

const AlternativeDiscovery = (props: IProps): JSX.Element => {
  // Props
  const { closeModule } = props

  // States
  const [productId, setProductId] = useState(props.productId)
  const [productSelected, setProductSelected] = useState<IProduct | null>(null)
  const [tags, setTags] = useState<string[]>(initialTags)
  const [tagsSelected, setTagSelected] = useState<string[]>([])
  const [search, setSearch] = useState('')

  // Hooks
  const { data, error, isLoading } = useApi(
    `${alternativeEndPointUrl}?id=${productId}${tagsSelected.length > 0 ? `&tags=${tagsSelected.join(',')}` : ''}`
  )

  // Set default product each time we fetch the alternatives
  useEffect(() => {
    data && setProductSelected(data.base_product)
  }, [data])

  const toggleTag = (tagClicked: string) => {
    let newTagsSelectedArr

    if (!tagsSelected.includes(tagClicked)) newTagsSelectedArr = [...tagsSelected, tagClicked]
    else newTagsSelectedArr = newTagsSelectedArr = tagsSelected.filter(tag => tag !== tagClicked)

    setTagSelected(newTagsSelectedArr)
  }
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = () => {
    if (!search) return

    const newTag = search

    setTags(prevState => [...prevState, newTag])
    setTagSelected(prevState => [...prevState, newTag])
    setSearch('')
  }

  const selectProduct = (id: string) => {
    setProductId(id)
  }

  console.log('Rendering Module', productId, data?.alternatives)

  return (
    <section id="splashup-discovery-module">
      <div className="fixed top-0 left-0 flex w-full h-full">
        <div className="flex flex-col px-2 bg-purple-lightest" style={{ width: '330px' }}>
          <div>
            {/* Logo and close button */}
            <div className="flex items-center justify-between">
              <img src={logo} alt="discovery-logo" />
              <CloseButton onClick={closeModule}></CloseButton>
            </div>

            <div className="flex flex-wrap my-2 ">
              {tags.map(tag => (
                <Button
                  key={tag}
                  inverted={!tagsSelected.includes(tag)}
                  onClick={() => toggleTag(tag)}
                  style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                >
                  {tag}
                </Button>
              ))}
            </div>
            <div className="my-2">
              <form onSubmit={handleSearchSubmit}>
                <SearchField name="search" value={search} onChange={handleSearchChange}></SearchField>
              </form>
            </div>

            <p className="my-2 text-sm">
              Tailored Alternatives <small>powered by splashup.co</small>
            </p>

            {error && <p className="text-white">{error}</p>}

            {isLoading && <LoadingWheel />}

            {data?.alternatives.length > 1 && (
              <ProductCarousel alternatives={data.alternatives} selectProduct={selectProduct} />
            )}
          </div>
          <div className="flex-grow">
            {productSelected && <ProductDescription product={productSelected}></ProductDescription>}
          </div>
        </div>
        <div className="flex-grow bg-black bg-opacity-90 " onClick={closeModule}></div>
      </div>
    </section>
  )
}

interface IProps {
  productId: string
  closeModule: () => void
}

export interface IAlternativeRes {
  userId: string
  base_product: IProduct
  alternatives: IProduct[]
}

export interface IProduct {
  brand_name: string
  gender: string
  id: string
  image_alt_text: string
  image_url: string
  name: string
  offer_price: number
  retail_price: number
  url: string
}

export default AlternativeDiscovery
